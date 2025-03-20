develop:
	npx webpack serve

install:
	npm ci

build:
	rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

lint:
	npx eslint --no-config-lookup --config eslint.config.js --ignore-path .eslintignore .

.PHONY: test