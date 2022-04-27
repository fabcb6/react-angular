import axios, { AxiosResponse } from 'axios';
import { Pizza } from '../interfaces/Pizza';

export const getAll = async () => {
  return await axios
    .get<Pizza>(`http://localhost:3001/pizzas/`)
    .then((res: AxiosResponse) => {
      const { data } = res;
      return data.pizzas;
    })
    .catch(() => {
      console.log('Error trying to validate code');
      return null;
    });
};

export const add = async (newPizza: Pizza) => {
  return await axios
    .post<Pizza>(`http://localhost:3001/pizzas`, {
      name: newPizza.name,
      price: newPizza.price,
      ingredients: newPizza.ingredients,
      picture: newPizza.picture
    })
    .then((res: AxiosResponse) => {
      const { data } = res;
      return data;
    })
    .catch(() => {
      console.log('Error trying to validate code');
      return null;
    });
};
