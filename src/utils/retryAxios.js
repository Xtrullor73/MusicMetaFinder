import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create();

axiosRetry(axiosInstance, {
  retries: 3, // The number of times to retry before failing
  retryCondition: (error) => error.response.status === 429 || error.response.status >= 500,
  retryDelay: (retryCount) => retryCount * 2000, // Wait 2 seconds between retries
});

export default axiosInstance;
