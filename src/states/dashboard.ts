import { atom } from 'recoil';
import { PRIMARY_OPTIONS } from 'components/graphTwoTypes/constants';

export const graph1stSelectedOptionState = atom<string>({
  key: '#graph1stSelectedOptionState',
  default: PRIMARY_OPTIONS[0],
});

export const graph2ndSelectedOptionState = atom<string>({
  key: '#graph2ndSelectedOptionState',
  default: PRIMARY_OPTIONS[1],
});
