const express = require('express');
const request = require('supertest');
const serverRoutes = require('../server/index.js');

// request = supertest(serverRoutes)
const regeneratorRuntime = require("regenerator-runtime");
const axios = require('axios');
const app = express();


describe('Express', () => {
  test('GET request should receive a valid response', (done) => {
    request(app)
      .get('/products/:rootIsbn/alsoBought')
      .then((res) => {
        console.log('RESPONSE IS HERE LOOK HERE', res.data)
        expect(200);
        expect(res.body).not.toBe(undefined);
        expect(typeof res.body).toBe('object');
        done();
      });
  });

  // test('Database', (done) => {
  //   request(app)
  //   .get('/products/:rootIsbn/alsoBought')
  //   .then((response) => {
  //     console.log("RESPONSE", response)
  //   })
  // })

});


