import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);

export const getCurrentUTCDateString = () => dayjs.utc().format('YYYY-MM-DD');
