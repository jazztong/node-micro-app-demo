migrate:
	npx prisma migrate dev

server:
	npm run dev

test:
	npm run test

cover:
	jest --collect-coverage

docker:
	docker build --platform linux/amd64 . -t userapp

run-docker:
	docker run -it --rm -p 3000:3000 userapp

schema:
	prisma generate --schema=./src/prisma/schema.prisma

dev-build:
	docker run -it --rm -p 8000:3000 --entrypoint sh -v $(PWD):/user-app node:14
