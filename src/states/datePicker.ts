import { atom } from 'recoil';

interface IPeriod {
  startDate: string;
  endDate: string;
}

export const periodState = atom<IPeriod>({
  key: '#periodState',
  default: { startDate: '', endDate: '' },
});
