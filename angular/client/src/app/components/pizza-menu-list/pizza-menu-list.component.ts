import { Component, OnInit } from '@angular/core';
import { Pizza } from '@models';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-pizza-menu-list',
  templateUrl: './pizza-menu-list.component.html',
  styleUrls: ['./pizza-menu-list.component.scss']
})
export class PizzaMenuListComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getAll().subscribe((data) => {
      this.pizzas = data.pizzas ? data.pizzas : [];
    });
  }
}
