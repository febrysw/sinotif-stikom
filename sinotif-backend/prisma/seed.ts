import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'user-sinotif@stikombanyuwangi.ac.id',
      firstname: 'User',
      lastname: 'Sinotif',
      password: '$2b$10$kzL5ap0x.Y6Y9lyj33rOhuRuik7z1F6NEYDrBTHceqQsBacb59k5y', // sinotif3333
      role: 'USER',
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'admin-sinotif@stikombanyuwangi.ac.id',
      firstname: 'Admin',
      lastname: 'Sinotif',
      role: 'ADMIN',
      password: '$2b$10$kzL5ap0x.Y6Y9lyj33rOhuRuik7z1F6NEYDrBTHceqQsBacb59k5y', // sinotif3333
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
