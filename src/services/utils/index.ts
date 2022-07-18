export const getCurrentWeek = () => {
  const today = new Date();
  const day = today.getDay();

  const dates = [];

  for (let i = 0; i < 7; i++) {
    if (i < day) {
      const date = new Date();
      const x = day - i;
      const newDate = today.getTime() - x * 60 * 60 * 24 * 1000;
      date.setTime(newDate);
      dates.push(date.toISOString());
    } else if (i > day) {
      const date = new Date();
      const x = i - day;
      const newDate = today.getTime() + x * 60 * 60 * 24 * 1000;
      date.setTime(newDate);
      dates.push(date.toISOString());
    } else {
      dates.push(today.toISOString());
    }
  }
  return {
    currenyDay: day,
    dates,
  };
};
