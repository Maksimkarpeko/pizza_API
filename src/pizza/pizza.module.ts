import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service.js';
import { PizzaController } from './pizza.controller.js';
import { PrismaModule } from '../prisma_service/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
