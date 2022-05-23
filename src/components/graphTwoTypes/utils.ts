import dayjs from 'dayjs';
import { PRIMARY_OPTIONS } from 'assets';
import integratedAdStatus from 'dummies/integratedAdStatus.json';

const { daily } = integratedAdStatus.report;

interface IDay {
  [key: string]: string | number;
}

export const convertData = (btn: string) => {
  return daily.map((day: IDay) => {
    return { x: dayjs(day.date).format('MM월 DD일'), y: day[btn] };
  });
};

export const solution = (firstOpt: string) => PRIMARY_OPTIONS.filter((option) => option !== firstOpt).concat('없음');
