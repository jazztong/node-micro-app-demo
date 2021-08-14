# node-micro-app-demo

A sample nodejs micro-services demo application

## Project start

### Init Project

Run `npm init -y`

### Project Dependencies

Run `npm install @prisma/client http-status-codes morgan @types/morgan --save`

### Dev Dependencies

Run `npm install prisma tslint typescript ts-node @types/node @types/express jest-mock-extended @types/jest ts-jest jest @types/supertest supertest --save-dev`

### Init Typescript

Run `ts --init`

### Init Ts-lint

Run `tslint --init`

### Init Prisma Project

Run `npx prisma init`

### Init jest

Run `jest --init`

### Configure .env

Configure file [.env](product-app/.env) for your database connection

### Create Prisma Schema

Edit [schema.prisma](product-app/prisma/schema.prisma) to add your new table entity

### Create Prisma Migration

Run `npx prisma migrate dev --name init`

### Start server

Run `npm run dev`

### Build

Run `npm run build`

### Test

Run `npm run test`
