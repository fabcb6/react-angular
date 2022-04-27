import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { PizzaList } from './PizzaList';
import { Pizza } from '../interfaces/Pizza';

import * as PizzaService from '../services/PizzaService';

export const CreatePizzaForm = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>();

  const [formulario, setFormulario] = useState({
    name: '',
    price: 0,
    ingredients: '',
    picture: ''
  });

  const { name, price, ingredients, picture } = formulario;

  const loadData = async () => {
    console.log(123);
    setPizzas(
      await PizzaService.getAll().then((data: Pizza[]) => {
        console.log(data);
        return data;
      })
    );
  };

  if (pizzas === undefined) {
    loadData();
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const handlePizzaSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPizza: Pizza = {
      name: name,
      price: price,
      picture: picture,
      ingredients: ingredients.split(',')
    };
    await PizzaService.add(newPizza).then(() => {
      setFormulario({
        name: '',
        price: 0,
        ingredients: '',
        picture: ''
      });
      loadData();
    });
  };

  return (
    <Container>
      <h2>Agregar una nueva pizza</h2>
      <Form onSubmit={handlePizzaSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="name" type="text" placeholder="Ingresa un nombre" onChange={handleChange} value={name} />
          <Form.Text className="text-muted">Este es el nombre de la nueva pizza.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="Ingresa un precio"
            onChange={handleChange}
            value={price}
          />
          <Form.Text className="text-muted">El precio solo seran numeros.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ingredients">
          <Form.Label>Ingredientes</Form.Label>
          <Form.Control
            name="ingredients"
            type="text"
            placeholder="Ingresa los ingredientes especiales"
            onChange={handleChange}
            value={ingredients}
          />
          <Form.Text className="text-muted">Los ingredientes deben de ser separados por coma ","</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="picture">
          <Form.Label>Imange url</Form.Label>
          <Form.Control
            name="picture"
            type="text"
            placeholder="Ingresa un url"
            onChange={handleChange}
            value={picture}
          />
          <Form.Text className="text-muted">Este url sera para referencia de la imagen de la pizza</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {pizzas ? <PizzaList pizzas={pizzas} /> : ''}
    </Container>
  );
};
