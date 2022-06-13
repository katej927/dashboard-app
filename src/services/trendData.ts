import axios from 'axios';
import { IPeriod } from 'types/period';

const BASE_URL = 'https://madup-1a.herokuapp.com/api/v1';

export const getTrendData = ({ startDate, endDate }: IPeriod) => {
  return axios.get(`${BASE_URL}/daily-report`, {
    params: {
      startDate,
      endDate,
    },
  });
};

export const getAdManagementData = () => {
  return axios.get(`${BASE_URL}/advertising`).then((res) => {
    return res.data.ads;
  });
};
