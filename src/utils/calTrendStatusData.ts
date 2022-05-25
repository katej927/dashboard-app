import { transferUnit } from './transferUnit';
import { INIT_TREND_GRID_TOTAL_DATA } from '../constant/trendData';
import { ITotalAdData, ITrendDataGrid } from 'types/trendData';

// TODO WILL CHANGE TREND_STATUS TYPE
interface IDaily {
  click: number;
  conv: number;
  convValue: number;
  cost: number;
  cpa: number;
  cpc: number;
  ctr: number;
  cvr: number;
  date: Date;
  id: number;
  imp: number;
  roas: number;
}

const calTrendDataToGrid = (data: IDaily[]): ITotalAdData => {
  if (data.length === 0) return INIT_TREND_GRID_TOTAL_DATA;
  const res = data.reduce((acc, cur) => {
    acc.roas += cur.roas; // ROAS 계산에 쓰임
    acc.cost += cur.cost; // 광고비!
    acc.click += cur.click; // 클릭 횟수!
    acc.imp += cur.imp; // 노출횟수
    acc.convValue += cur.convValue; // 매출!
    acc.cvr += cur.cvr; // 전환수 계산에 쓰임! 전환수 = cvr * click / 100
    return acc;
  });

  return {
    roas: Number((res.roas / data.length).toFixed(2)),
    cost: res.cost,
    imp: res.imp,
    click: res.click,
    conversion: Number(((res.cvr * res.click) / 100).toFixed(0).toLocaleString()),
    convValue: res.convValue,
  };
};

export const calTrendData = (curData: IDaily[], prevData: IDaily[]): ITrendDataGrid => {
  const cur = calTrendDataToGrid(curData);
  const prev = calTrendDataToGrid(prevData);

  return {
    roas: {
      value: String(cur.roas),
      compValue: prev.roas !== 0 ? Math.abs(prev.roas - cur.roas).toFixed(0) : String(cur.roas),
      compare: cur.roas > prev.roas,
    },
    cost: {
      value: transferUnit(cur.cost),
      compValue: transferUnit(
        prev.cost !== 0 ? Math.abs(prev.cost - cur.cost) : cur.cost,
        false,
        String(cur.cost).length
      ),
      compare: cur.cost > prev.cost,
    },
    imp: {
      value: transferUnit(cur.imp, true),
      compValue: transferUnit(prev.imp !== 0 ? Math.abs(prev.imp - cur.imp) : cur.imp, true, String(cur.imp).length),
      compare: cur.imp > prev.imp,
    },
    click: {
      value: transferUnit(cur.click, true),
      compValue: transferUnit(
        prev.click !== 0 ? Math.abs(prev.click - cur.click) : cur.click,
        true,
        String(cur.click).length
      ),
      compare: cur.click > prev.click,
    },
    conversion: {
      value: transferUnit(cur.conversion, true),
      compValue: transferUnit(
        prev.conversion !== 0 ? Math.abs(prev.conversion - cur.conversion) : cur.conversion,
        true,
        String(cur.conversion).length
      ),
      compare: cur.conversion > prev.conversion,
    },
    convValue: {
      value: transferUnit(cur.convValue),
      compValue: transferUnit(
        prev.convValue !== 0 ? Math.abs(prev.convValue - cur.convValue) : cur.convValue,
        false,
        String(cur.convValue).length
      ),
      compare: cur.convValue > prev.convValue,
    },
  };
};
