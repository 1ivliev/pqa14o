docker-up:
	docker-compose up -d

install-allurectl:
	wget https://github.com/allure-framework/allurectl/releases/latest/download/allurectl_darwin_arm64 -O ./allurectl && chmod +x ./allurectl

install-playwright:
	npm init playwright

install-playwright-allure:
	npm install -D allure-playwright

install-playwright-playtheus:
	npm install -D playtheus

test:
	npx playwright test

show:
	allure serve allure-results

result-generate:
	allure generate ./allure-results -o ./allure-report --clean

result-send:
	./allurectl upload --endpoint $(ENDPOINT) --token $(TOKEN) --project-id 1 --launch-name "Test Run" ./allure-results

test-k6:
	docker compose run --rm k6

docker-down:
	docker-compose down