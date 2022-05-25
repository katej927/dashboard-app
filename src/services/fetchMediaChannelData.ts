import axios from 'axios';
import { IPeriod } from 'types/period';

const BASE_URL = 'https://madup.shop/api/v1';

export const fetchMediaChannelData = ({ startDate, endDate }: IPeriod) => {
  return axios.get(`${BASE_URL}/media-report`, {
    params: {
      startDate,
      endDate,
    },
  });
};
