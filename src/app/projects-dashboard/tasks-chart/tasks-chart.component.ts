import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef, SimpleChanges
} from '@angular/core';
import {ProjectSummary, RasterizationData} from '../../model';
import {IChartistData, IChartistLineChart} from 'chartist';
import {rasterize} from '../../utilities/time-utilities';
import * as Chartist from 'chartist';
import * as moment from 'moment';

export interface ChartLegendItem {
  title: string;
  class: string;
}

export interface ChartTimeFrame {
  name: string;
  timeFrame: number;
  amount: number;
}

@Component({
  selector: 'app-tasks-chart',
  templateUrl: './tasks-chart.component.html',
  styleUrls: ['./tasks-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksChartComponent implements OnChanges, AfterViewInit {

  @Input() projectSummaries: ProjectSummary[];
  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;

  chart: IChartistLineChart;
  legend: ChartLegendItem[];
  timeFrames: ChartTimeFrame[] = [{
    name: 'day',
    timeFrame: 600000,
    amount: 144
  }, {
    name: 'week',
    timeFrame: 3600000,
    amount: 168
  }, {
    name: 'year',
    timeFrame: 86400000,
    amount: 360
  }];

  timeFrameNames = this.timeFrames.map((timeFrame) => timeFrame.name);
  selectedTimeFrame = this.timeFrames[0];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.projectSummaries && this.projectSummaries) {
      this.legend = this.projectSummaries.map((projectSummary, index) => ({
        title: projectSummary.project.title,
        class: `series-${index + 1}`
      }));
    }
    this.createOrUpdateChart();
  }

  ngAfterViewInit() {
    this.createOrUpdateChart();
  }

  selectTimeFrame(timeFrameName: string) {
    this.selectedTimeFrame = this.timeFrames.find((timeFrame) => timeFrame.name === timeFrameName);
    this.createOrUpdateChart();
  }

  createOrUpdateChart() {
    if (!this.projectSummaries || !this.chartContainer) {
      return;
    }

    const data = this.createChartData();
    if (this.chart) {
      this.chart.update(data);
    } else {
      this.createChart(data);
    }
  }

  createChartData(): IChartistData {
    const now = +new Date();
    return {
      series: this.projectSummaries.map(projectSummary => {
        const tasks = projectSummary.tasks.filter(task => task.projectId === projectSummary.project.id);
        const timeData: RasterizationData[] = tasks.reduce((data, task) => {
          data.push({
            time: task.created,
            weight: 1
          });

          if (task.done) {
            data.push({
              time: task.completed,
              weight: -1
            });
          }
          return data;
        }, []);

        return rasterize(timeData, this.selectedTimeFrame.timeFrame, this.selectedTimeFrame.amount, now, null, true);
      }),
      labels: Array.from({
        length: this.selectedTimeFrame.amount
      }).map((e, index) => now - index * this.selectedTimeFrame.timeFrame).reverse()
    };
  }


  createChart(data: IChartistData) {
    this.chart = new Chartist.Line(this.chartContainer.nativeElement, data, {
      width: '100%',
      height: 300,
      lineSmooth: Chartist.Interpolation.step({
        fillHoles: true
      }),
      axisY: {
        onlyInteger: true,
        low: 0,
        offset: 70,
        labelInterpolationFnc: value => `${value} tasks`
      },
      axisX: {
        labelInterpolationFnc: (value, index) => index % Math.floor(144 / 2) === 0 ?
          moment(value).calendar() : null,
        labelOffset: {
          y: 10
        }
      }
    }, [
      ['screen and (min-width: 1200px)', {
        axisX: {
          labelInterpolationFnc: (value, index) => index % Math.floor(144 / 4) === 0 ?
            moment(value).calendar() : null,
        }
      }],
      ['screen and (min-width: 1500px)', {
        axisX: {
          labelInterpolationFnc: (value, index) => index % Math.floor(144 / 6) === 0 ?
            moment(value).calendar() : null,
        }
      }]
    ]);
  }
}
