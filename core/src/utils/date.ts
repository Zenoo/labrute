import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const getCurrentUTCDateString = () => dayjs.utc().format('YYYY-MM-DD');
