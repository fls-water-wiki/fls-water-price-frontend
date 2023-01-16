import axios from 'axios';
import { baseURL } from './baseURL';

import fileDownload from 'js-file-download';

export const downloadDatabase = async () => {
  const result = await axios({
    method: 'get',
    url: `${baseURL}/data`,
  });

  console.log('downloaded');

  fileDownload(result.data, 'water-prices.pgsql');
  // return result
};