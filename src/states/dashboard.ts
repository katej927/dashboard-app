import { atom } from 'recoil';
import { IPeriod } from 'types/period';

export const periodState = atom<IPeriod>({
  key: '#periodState',
  default: { startDate: '2022-02-01', endDate: '2022-02-08' },
});
