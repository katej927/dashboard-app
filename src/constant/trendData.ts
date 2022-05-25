import { IDaily } from 'types/trendData';

export const INIT_TREND_GRID_TOTAL_DATA = {
  roas: 0,
  cost: 0,
  imp: 0,
  click: 0,
  cvr: 0,
  conversion: 0,
  convValue: 0,
};

export const INIT_TREND_DATA = {
  curData: {
    report: {
      daily: [
        {
          click: 0,
          conv: 0,
          convValue: 0,
          cost: 0,
          cpa: 0,
          cpc: 0,
          ctr: 0,
          cvr: 0,
          date: new Date(),
          id: 0,
          imp: 0,
          roas: 0,
        },
      ] as IDaily[],
    },
  },
  prevData: {
    report: {
      daily: [
        {
          click: 0,
          conv: 0,
          convValue: 0,
          cost: 0,
          cpa: 0,
          cpc: 0,
          ctr: 0,
          cvr: 0,
          date: new Date(),
          id: 0,
          imp: 0,
          roas: 0,
        },
      ] as IDaily[],
    },
  },
};
