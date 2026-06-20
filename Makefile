.PHONY: fe-dev fe-build fe-start test clean

fe-dev:
	@echo "Starting frontend development server..."
	npm run dev

fe-build:
	@echo "Building frontend..."
	npm run build

fe-start:
	@echo "Starting frontend production server..."
	npm run start

test:
	@echo "Running tests..."
	npm run test

test-watch:
	@echo "Running tests in watch mode..."
	npm run test:watch

clean:
	@echo "Cleaning build artifacts..."
	rm -rf .next out
