docker build -t nest-prisma-server .
docker run -d -t -p 3333:3333 nest-prisma-server