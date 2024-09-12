setup: env
	pip install -r requirements.txt

env:
	python3 -m venv env

run_test: 
	cd javascript && npm start

run_api:
	cd python && fastapi dev main.py

run: run_test run_api