import axios from 'axios';

export const fetchMediaChannelData = () => {
  return axios
    .get('https://madup.shop/api/v1/media-report?startDate=2022-02-01&endDate=2022-04-20')
    .then((response) => {
      console.log({ response });

      return response.data;
    });
};
