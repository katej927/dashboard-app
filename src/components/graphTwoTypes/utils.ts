import { IDay, IDayNumberType } from 'types/integratedAd';
import { PRIMARY_OPTIONS } from './constants';

type KeyOfIDayNumberType = keyof IDayNumberType;

// const format = (integratedAdInfo: IDay[], btn: KeyOfIDayNumberType | KeyOfIDayNumberType[]) =>
//   integratedAdInfo.map((day) => {
//     return { x: day.date, y: Array.isArray(btn) ? (day[btn[0]] * day[btn[1]]) / 100 : day[btn] };
//   });

interface IFormatedData {
  x: string;
  y: number;
}
const formatReturnData = (
  unitVal: string,
  integratedAdInfo: IDay[],
  btn: KeyOfIDayNumberType | KeyOfIDayNumberType[]
) => {
  const formatedData = integratedAdInfo.map((day) => {
    return { x: day.date, y: Array.isArray(btn) ? (day[btn[0]] * day[btn[1]]) / 100 : day[btn] };
  });
  return {
    unit: unitVal,
    formatedData,
    maxValue: Math.max(...formatedData.map((obj: IFormatedData) => obj.y)),
  };
};

type Options = typeof PRIMARY_OPTIONS[number];

export const convertData = (integratedAdInfo: IDay[], btnName: Options) => {
  if (btnName === 'ROAS') return formatReturnData('%', integratedAdInfo, 'roas');
  if (btnName === '광고비') return formatReturnData('원', integratedAdInfo, 'cost');
  if (btnName === '클릭수') return formatReturnData('회', integratedAdInfo, 'click');
  if (btnName === '노출수') return formatReturnData('회', integratedAdInfo, 'imp');
  if (btnName === '매출') return formatReturnData('원', integratedAdInfo, 'convValue');
  if (btnName === '전환수') return formatReturnData('회', integratedAdInfo, ['cvr', 'click']);
  return undefined;
};

// dayjs(day.date).format('MM월 DD일')

export const filter1stOpt = (firstOpt: Options) =>
  PRIMARY_OPTIONS.filter((option) => option !== firstOpt).concat('없음');
