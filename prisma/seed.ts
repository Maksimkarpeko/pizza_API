import { PrismaPg } from '@prisma/adapter-pg';
import { DoughType, PrismaClient } from '../src/generated/prisma/client.js';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined in .env file');
}

const adapter = new PrismaPg({ connectionString });
const prisma: PrismaClient = new PrismaClient({ adapter });
async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Мясные' },
      { name: 'Вегетарианская' },
      { name: 'Гриль' },
      { name: 'Острые' },
    ],
  });

  await prisma.pizza.createMany({
    data: [
      { name: 'Чизбургер-пицца', imageUrl: '/img/1.png', categoryId: 1 },
      { name: 'Сырная', imageUrl: '/img/2.png', categoryId: 2 },
      { name: 'Креветки по-азиатски', imageUrl: '/img/3.png', categoryId: 3 },
      { name: 'Сырный цыпленок', imageUrl: '/img/4.png', categoryId: 1 },
      { name: 'Маргарита', imageUrl: '/img/5.png', categoryId: 2 },
      { name: 'Пепперони Фреш', imageUrl: '/img/6.png', categoryId: 1 },
      { name: 'Диабло', imageUrl: '/img/7.png', categoryId: 4 },
      { name: 'Овощи и грибы', imageUrl: '/img/8.png', categoryId: 2 },
    ],
  });
  await prisma.pizzaVariant.createMany({
    data: [
      { pizzaId: 1, size: 26, doughType: DoughType.THIN, price: 395 },
      { pizzaId: 1, size: 30, doughType: DoughType.TRADITIONAL, price: 450 },

      { pizzaId: 2, size: 26, doughType: DoughType.THIN, price: 450 },
      { pizzaId: 2, size: 40, doughType: DoughType.TRADITIONAL, price: 630 },

      { pizzaId: 3, size: 30, doughType: DoughType.THIN, price: 290 },

      { pizzaId: 4, size: 26, doughType: DoughType.THIN, price: 385 },
      { pizzaId: 4, size: 30, doughType: DoughType.TRADITIONAL, price: 445 },

      { pizzaId: 5, size: 26, doughType: DoughType.THIN, price: 350 },
      { pizzaId: 5, size: 40, doughType: DoughType.TRADITIONAL, price: 590 },

      { pizzaId: 6, size: 30, doughType: DoughType.THIN, price: 420 },
      { pizzaId: 6, size: 40, doughType: DoughType.TRADITIONAL, price: 580 },

      { pizzaId: 7, size: 26, doughType: DoughType.THIN, price: 490 },
      { pizzaId: 7, size: 30, doughType: DoughType.TRADITIONAL, price: 550 },

      { pizzaId: 8, size: 26, doughType: DoughType.THIN, price: 320 },
      { pizzaId: 8, size: 30, doughType: DoughType.TRADITIONAL, price: 390 },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
  });
