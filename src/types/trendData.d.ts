export interface ITotalAdData {
  roas: number;
  cost: number;
  imp: number;
  click: number;
  conversion: number;
  convValue: number;
}

export interface ITrendDataGridItem {
  value: string;
  compValue: string;
  compare: boolean;
}

export interface ITrendDataGrid {
  [key: string]: ITrendDataGridItem;
}

export interface IDaily {
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

export interface ITrendResponse {
  curData: {
    report: {
      daily: IDaily[];
    };
  };
  prevData: {
    report: {
      daily: IDaily[];
    };
  };
}
