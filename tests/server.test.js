const express = require('express');
const request = require('supertest');
const serverRoutes = require('../server/index.js');

// request = supertest(serverRoutes)
const regeneratorRuntime = require("regenerator-runtime");
const axios = require('axios');
const app = express();


describe('Express', () => {
  test('Similar Items GET request should receive a valid response', (done) => {
    request(app)
      .get('/products/9780765326386/alsoBought')
      .then((res) => {
        expect(200);
        expect(res.body).not.toBe(undefined);
        expect(typeof res.body).toBe('object');
        done();
      });
    });

  test('Ratings GET request should receive a valid response', (done) => {
    request(app)
      .get(`/reviewssummary/9780765326386`)
      .then((res) => {
        expect(200);
        expect(res.body).not.toBe(undefined);
        expect(typeof res.body).toBe('object');
        done();
      });
    });
});




  // test('Database', (done) => {
  //   request(app)
  //   .get('/products/:rootIsbn/alsoBought')
  //   .then((response) => {
  //     console.log("RESPONSE", response)
  //   })
  // })


