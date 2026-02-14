import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PizzaModule } from './pizza/pizza.module.js';
import { PrismaModule } from './prisma_service/prisma.module.js';
import { OrderModule } from './order/order.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PizzaModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
