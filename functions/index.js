const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I0OERIpqrol3TiqAmmou8rtqR5iRhIeLsRmYrysSw8LyPwoc1L5KfUEcDUGZdIA3nyW457iIJkykTY3AiXoCXnR00dxTErZTL')

// - API

// - App Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    description: "Test charge",
    shipping: {
        name: "Test Name",
        address: {
        line1: "Address Line 1",
        postal_code: "88888",
        city: "San Francisco",
        state: "CA",
        country: "US"
        }
    }
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app)