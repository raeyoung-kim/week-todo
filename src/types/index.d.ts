type Todo = {
  id: string;
  title: string;
  description: string;
  date: string;
  isCheck: boolean;
};

type WeatherData = {
  date: string;
  dt: number;
  icon: string;
  main: string;
  day?: number;
  temp?: number;
};
