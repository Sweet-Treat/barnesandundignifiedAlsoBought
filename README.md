# Project Name

> The objective of the Front End Capstone is to build a fullstack application emulating a single product page of a real company. Our project will mimic the product page of a book in the Barnes and Noble site, broken out into four separate components: (1) product details, (2) e-commerce functionality, (3) related books product carousel, and (4) reviews. My product was the related books section, which consists of an image carousel populated with related books that other customers bought.

### My Service: Related Books Product Carousel
![Product Carousel](./images/Carousel_ISBN_9780670020553.png?raw=true)

### All Services
![Entire Deployed Service](./images/Proxy_ISBN_9780670020553.png?raw=true)


## Related Projects

  - https://github.com/Sweet-Treat/barnesandundignifiedItemSelection
  - https://github.com/Sweet-Treat/barnesandundignifiedreviews
  - https://github.com/Sweet-Treat/barnesandundignifiedProductAndAuthor

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- Install all dependencies first. See the [Development](#development) section.
- Run 'npm run server-dev' to spin up the server.
- Run 'npm run react-dev' in a separate terminal to create a webpack bundle.
- Enter 'http://localhost:3004/?isbn=ENTER_ISBN_HERE' into the URL.
- Replace ENTER_ISBN_HERE with either 9780765326386 or 9780670020553 to demonstrate full functionality.

## Requirements

React 16 must be used. Otherwise, the latest version of each dependency in the package.json file will suffice.

- React 16.14.0


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run db:setup
```

