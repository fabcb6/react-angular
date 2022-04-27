import { Pizza } from '../interfaces/Pizza';

type params = {
  pizzas: Pizza[];
};

export const PizzaList = (params: params) => {
  const { pizzas } = params;
  return (
    <>
      <h2>Opciones de Pizza</h2>
      <ul>
        {pizzas.map((pizza: any) => {
          return <li key={pizza.name}>{pizza.name}</li>;
        })}
      </ul>
    </>
  );
};
