interface Tmp {
  // 👻
}

export interface IMediaChannel {
  channel: string;
  date: string;
  imp: number;
  click: number;
  cost: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  conv?: number;
}

export interface IRow {
  value: number;
  category: string;
  key: RowKey;
  label?: string;
}

export type RowKey = 'cost' | 'convValue' | 'imp' | 'click' | 'conv' | 'roas' | 'ctr' | 'cpc';
