import {TimeUnit} from '../model';

export const UNITS: TimeUnit[] = [
  {
    short: 'w',
    milliseconds: 5 * 8 * 60 * 60 * 1000
  },
  {
    short: 'd',
    milliseconds: 8 * 60 * 60 * 1000
  },
  {
    short: 'h',
    milliseconds: 60 * 60 * 1000
  },
  {
    short: 'm',
    milliseconds: 60 * 1000
  }
];
