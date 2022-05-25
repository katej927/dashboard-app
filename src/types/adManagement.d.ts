interface IReport {
  cost: number;
  convValue: number;
  roas: number;
}

interface IAdManagementList {
  adType: string;
  budget: number;
  endData: null | string;
  id: number;
  report: IReport;
  startDate: string;
  status: string;
  title: string;
}
