migrate:
	npx prisma migrate dev

server:
	npm run dev

test:
	npm run test

cover:
	jest --collect-coverage

docker:
	docker build -f ../templates/Dockerfile --platform linux/amd64 . -t productapp

run-docker:
	docker run -it --rm -p 3000:3000 productapp