import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  AfterViewInit
} from '@angular/core';
import {Activity, RasterizationData} from '../../model';
import * as Chartist from 'chartist';
import {IChartistBarChart, IChartistData} from 'chartist';
import {rasterize, UNITS} from '../../utilities/time-utilities';

@Component({
  selector: 'app-activity-chart',
  templateUrl: './activity-chart.component.html',
  styleUrls: ['./activity-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityChartComponent implements OnChanges, AfterViewInit {
  @Input() activities: Activity[];
  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;

  chart: IChartistBarChart;

  ngOnChanges() {
    this.createOrUpdateChart();
  }

  ngAfterViewInit() {
    this.createOrUpdateChart();
  }

  createOrUpdateChart() {
    if (!this.activities || !this.chartContainer) {
      return;
    }

    const data = this.createChartData();
    if (this.chart) {
      this.chart.update(data);
    } else {
      this.createChart(data);
    }
  }

  createChart(data: IChartistData) {
    this.chart = new Chartist.Bar(this.chartContainer.nativeElement, data, {
      width: '100%',
      height: 60,
      axisY: {
        onlyInteger: true,
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
    });

    this.chart.on('draw', (context) => {
      if (context.type === 'bar' && context.value.y === 0) {
        context.element.attr({
          y2: context.y2 - 1
        });
      }
    });
  }

  createChartData(): IChartistData {
    const timeData: RasterizationData[] = this.activities.map((activity) => {
      return {
        time: activity.time,
        weight: 1
      };
    });

    return {
      series: [
        rasterize(
          timeData,
          UNITS.find((unit) => unit.short === 'h').milliseconds,
          24,
          +new Date()
        )
      ]
    };
  }
}
