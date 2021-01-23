# Barnes and Undignified: Related Books Product Carousel

> The objective of the Front End Capstone is to build a fullstack application emulating a single product page of a real company. Our project will mimic the product page of a book in the Barnes and Noble site, broken out into four separate components: (1) product details, (2) e-commerce functionality, (3) related books product carousel, and (4) reviews. My product was the related books section, which consists of an image carousel populated with related books that other customers bought.

### My Service: Related Books Product Carousel
![Product Carousel](./images/Carousel_ISBN_9780670020553.png?raw=true)

### All Services via Proxy Server
![Entire Deployed Service](./images/Proxy_ISBN_9780670020553.png?raw=true)

## Table of Contents

1. [Related Projects](#relatedProjects)
2. [Getting Started](#gettingStarted)
3. [Requirements](#requirements)
4. [Technologies Used](#technologiesUsed)

## Related Projects
#### Teammate repos
  - https://github.com/Sweet-Treat/barnesandundignifiedItemSelection
  - https://github.com/Sweet-Treat/barnesandundignifiedreviews
  - https://github.com/Sweet-Treat/barnesandundignifiedProductAndAuthor
#### Proxy repo
  - https://github.com/Sweet-Treat/barnesandundignifiedAlsoBoughtProxy

## Getting Started
### From within the root directory, run the following commands:

Install dependencies
```sh
npm install
```

Seed the MongoDB database
```sh
npm run db:setup
```

Build the bundle using webpack with continous integration in development mode
```sh
npm run react-dev
```

Spin up the server locally on port 3004
```sh
npm run server-dev
```

Navigate to *http://localhost:3004/?isbn=ENTER_ISBN_HERE* to view the service.
- Replace **ENTER_ISBN_HERE** with either **9780765326386** or **9780670020553** to demonstrate full functionality.

## Requirements

React 16 must be used. Otherwise, the latest version of each dependency in the package.json file will suffice.
- React 16.14.0

## Technologies Used
- React
- Express
- MongoDB with Mongoose library
- Webpack
- Jest framework with Enzyme library
- Amazon EC2
- Amazon S3
