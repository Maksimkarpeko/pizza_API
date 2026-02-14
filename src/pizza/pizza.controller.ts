import { Controller, Get } from '@nestjs/common';
import { PizzaService } from './pizza.service.js';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  getPizza() {
    return this.pizzaService.getPizza();
  }

  
}
