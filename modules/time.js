import { DateTime } from './luxon/luxon.js';
const dateContainer = document.querySelector('.date-time');

export const printDate = () => {
  const time = DateTime.local();
  dateContainer.innerHTML = `${time.toLocaleString(DateTime.DATETIME_SHORT)}`;
  setInterval(printDate, 1000);
};
