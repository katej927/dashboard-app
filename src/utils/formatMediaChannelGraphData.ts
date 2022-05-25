import { IMediaChannel, IRow } from 'types/tmp';

const getDefaultRows = (): IRow[] => [
  { key: 'cost', category: '광고비', value: 0, label: '' },
  { key: 'convValue', category: '매출', value: 0, label: '' },
  { key: 'imp', category: '노출 수', value: 0, label: '' },
  { key: 'click', category: '클릭 수', value: 0, label: '' },
  { key: 'conv', category: '전환 수', value: 0, label: '' },
];

export const formatMediaChannelGraphData = (data: IMediaChannel[] | undefined) => {
  const platformRows: Record<string, IRow[]> = {
    google: getDefaultRows(),
    facebook: getDefaultRows(),
    naver: getDefaultRows(),
    kakao: getDefaultRows(),
  };

  if (!data) {
    return platformRows;
  }

  const totalData = data.reduce(
    (acc, curr) => {
      acc.imp += curr.imp ?? 0;
      acc.click += curr.click ?? 0;
      acc.cost += curr.cost ?? 0;
      acc.convValue += curr.convValue ?? 0;
      acc.ctr += curr.ctr ?? 0;
      acc.cvr += curr.cvr ?? 0;
      acc.cpc += curr.cpc ?? 0;
      acc.cpa += curr.cpa ?? 0;
      acc.roas += curr.roas ?? 0;
      acc.conv += curr.cvr * curr.click * 0.01 ?? 0;

      return acc;
    },
    {
      imp: 0,
      click: 0,
      cost: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      roas: 0,
      conv: 0,
    }
  );

  data.forEach((d: IMediaChannel) => {
    platformRows[d.channel].find((item) => item.key === 'cost')!.value += d.cost;
    platformRows[d.channel].find((item) => item.key === 'convValue')!.value += d.convValue;
    platformRows[d.channel].find((item) => item.key === 'imp')!.value += d.imp;
    platformRows[d.channel].find((item) => item.key === 'click')!.value += d.click;
    platformRows[d.channel].find((item) => item.key === 'conv')!.value += d.click * d.cvr * 0.01;
  });

  Object.values(platformRows).forEach((rowList) => {
    rowList.forEach((row) => {
      const avg = row.value / (totalData[row.key] ?? 1);
      row.value = avg * 100;
      row.label = totalData[row.key].toLocaleString();
    });
  });

  return platformRows;
};
