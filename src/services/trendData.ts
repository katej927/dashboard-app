import axios from 'axios';

const BASE_URL = 'https://madup.shop/api/v1';

interface IDate {
  startDate: Date;
  endDate: Date;
}

export const getTrendData = ({ startDate, endDate }: IDate) => {
  return axios.get(`${BASE_URL}/daily-report`, {
    params: {
      startDate,
      endDate,
    },
  });
};
