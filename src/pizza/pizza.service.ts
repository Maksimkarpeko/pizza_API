import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma_service/prisma.service.js';

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaService) {}

  getPizza() {
    return this.prisma.pizzaVariant.findMany({
      include: {
        pizza: {
          include: {
            category: true,
          },
        },
      },
    });
  }
}
