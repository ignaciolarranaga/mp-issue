# Mercadopago Issue Reproduction

How to check:

- `npm install`
- Add a valid test key in [App.js](src/App.js): `initMercadoPago('TEST-...');`
- `npm start` to run the server
- `npm test` to run the cypress script, the output will override the sample video. If you want to run the test in live mode just run npm run cypress and select the only e2e test defined.

You can see the recording of the execution in: [cypress/videos/issue.cy.js.mp4](cypress/videos/issue.cy.js.mp4)

You can see the details of the inputs in the test [cypress/e2e/issue.cy.js](cypress/e2e/issue.cy.js).

This is a sample of the preference in case it needs to be recreated:

```
{
    "external_reference": "64d8d67ee71f18698f3f870a",
    "items": [
        {
            "id": "64298cea2786f775048f13ab",
            "title": "Deposit for Surfear la Vida",
            "description": "Este original libro nos presenta a unos jóvenes protagonistas que se enfrentan a un nuevo reto en sus vidas, en su caso es surf, pero para ti podría ser cualquier otro como cambiar de instituto o mudarte de casa.Para afrontar cualquier cambio en tu v...",
            "picture_url": "https://contents.p2pbookstore.com/books/9788418774041.jpg",
            "category_id": "entertainment",
            "quantity": 1,
            "currency_id": "UYU",
            "unit_price": 103.5
        }
    ],
    "payer": {
        "email": "6jjzoamia82m@1secmail.com",
        "date_created": "2023-08-13T13:12:14.000Z",
        "phone": {
            "area_code": "",
            "number": 99122123
        }
    },
    "statement_descriptor": "P2P Bookstore",
    "auto_return": "approved",
    "notification_url": "https://develop-webhooks.p2pbookstore.com/7MQHdpDzxGDoQoy0Iep2/mercadopago/64d8d67ee71f18698f3f870a",
    "back_urls": {
        "success": "http://localhost:3000/successful-purchase",
        "failure": "http://localhost:3000/failed-purchase",
        "pending": "http://localhost:3000/pending-purchase"
    }
}
```
