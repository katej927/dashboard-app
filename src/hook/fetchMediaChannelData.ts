import axios from 'axios';

const BASE_URL = 'https://madup.shop/api/v1/media-report';

export const fetchMediaChannelData = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
  return axios.get(`${BASE_URL}?startDate=${startDate}&endDate=${endDate}`).then((response) => {
    return response.data;
  });
};
