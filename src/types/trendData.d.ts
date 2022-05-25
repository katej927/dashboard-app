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
