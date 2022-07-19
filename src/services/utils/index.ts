export const getCurrentWeek = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const day = today.getDay();

  const dates = [];

  for (let i = 0; i < 7; i++) {
    if (i < day) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      const x = day - i;
      const newDate = today.getTime() - x * 60 * 60 * 24 * 1000;
      date.setTime(newDate);
      dates.push(date.toISOString());
    } else if (i > day) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
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

export const sortTodoList = (list: Todo[]): Todo[] => {
  return list.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });
};
