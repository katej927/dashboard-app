import { IMediaChannel, IRow } from 'types/tmp';

const getDefaultRows = (): IRow[] => [
  { key: 'cost', category: '광고비', value: 0 },
  { key: 'convValue', category: '매출', value: 0 },
  { key: 'roas', category: 'ROAS', value: 0 },
  { key: 'imp', category: '노출 수', value: 0 },
  { key: 'click', category: '클릭 수', value: 0 },
  { key: 'ctr', category: '클릭률 (CTR)', value: 0 },
  { key: 'cpc', category: '클릭당비용 (CPC)', value: 0 },
];

export const formatMediaChannelTableData = (data: IMediaChannel[] | undefined) => {
  const platformRows: Record<string, IRow[]> = {
    google: getDefaultRows(),
    facebook: getDefaultRows(),
    naver: getDefaultRows(),
    kakao: getDefaultRows(),
    total: getDefaultRows(),
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
    }
  );

  data.forEach((d: IMediaChannel) => {
    platformRows[d.channel].find((item) => item.key === 'cost')!.value += d.cost;
    platformRows[d.channel].find((item) => item.key === 'convValue')!.value += d.convValue;
    platformRows[d.channel].find((item) => item.key === 'roas')!.value += d.roas;
    platformRows[d.channel].find((item) => item.key === 'imp')!.value += d.imp;
    platformRows[d.channel].find((item) => item.key === 'click')!.value += d.click;
    platformRows[d.channel].find((item) => item.key === 'ctr')!.value += d.ctr;
    platformRows[d.channel].find((item) => item.key === 'cpc')!.value += d.cpc;
  });

  platformRows.total = [
    { key: 'cost', category: '광고비', value: totalData.cost },
    { key: 'convValue', category: '매출', value: totalData.convValue },
    { key: 'roas', category: 'ROAS', value: totalData.roas },
    { key: 'imp', category: '노출 수', value: totalData.imp },
    { key: 'click', category: '클릭 수', value: totalData.click },
    { key: 'ctr', category: '클릭률 (CTR)', value: totalData.ctr },
    { key: 'cpc', category: '클릭당비용 (CPC)', value: totalData.cpc },
  ];

  return platformRows;
};
