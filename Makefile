db:
	docker run -d -e POSTGRES_PASSWORD=password -p 5432:5432 postgres

test:
	cd product-app && make test
	cd user-app && make test

migrate:
	cd product-app && make migrate
	cd user-app && make migrate