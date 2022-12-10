FROM python:3.9-alpine
RUN apk add --update gmp-dev build-base nodejs npm
RUN python -m pip install --upgrade pip
RUN pip install cairo-lang openzeppelin-cairo-contracts
WORKDIR /app