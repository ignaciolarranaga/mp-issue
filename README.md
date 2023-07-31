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
    "external_reference": "64c7cd87be49fd89f65345e2",
    "items": [
        {
            "id": "646cc96459d69ee232165ea8",
            "title": "Harry Potter y la Piedra Filosofal Ilustrado Tapa Blanda",
            "description": "Una maravillosa edición, ilustrada por Jim Kay, del primer volumen de la serie de Harry Potter.\r\n\r\nLa vida de Harry Potter cambia para siempre el día que cumple once años, cuando el gigante de ojos negros y brillantes Rubeus Hagrid le entrega una car...",
            "picture_url": "https://contents.p2pbookstore.com/books/9788498389470.jpg",
            "category_id": "entertainment",
            "quantity": 1,
            "currency_id": "UYU",
            "unit_price": 545
        }
    ],
    "payer": {
        "email": "sxmozg5z52@1secmail.com",
        "date_created": "2023-07-31T15:11:07.000Z",
        "phone": {
            "area_code": "",
            "number": 99123456
        }
    },
    "statement_descriptor": "P2P Bookstore",
    "auto_return": "approved",
    "notification_url": "https//develop-webhooks.p2pbookstore.com/YUu8QajjLp5n8GjO7y7t/mercadopago/64c7cd87be49fd89f65345e2",
    "back_urls": {
        "success": "http://localhost:3000/es/compra-exitosa",
        "failure": "http://localhost:3000/es/compra-fallida",
        "pending": "http://localhost:3000/es/compra-pendiente"
    }
}
```