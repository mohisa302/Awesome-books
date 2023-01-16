import { DateTime } from './luxon.js';

const dateContainer = document.querySelector('.date-time');

const printDate = () => {
  const time = DateTime.local();
  dateContainer.innerHTML = `${time.toLocaleString(DateTime.DATETIME_SHORT)}`;
  setInterval(printDate, 1000);
};

export default printDate;
