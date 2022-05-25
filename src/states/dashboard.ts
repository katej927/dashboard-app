import { atom } from 'recoil';

export interface IPeriod {
  startDate: string;
  endDate: string;
}

export const periodState = atom<IPeriod>({
  key: '#periodState',
  default: { startDate: '2022-02-01', endDate: '2022-02-08' },
});
