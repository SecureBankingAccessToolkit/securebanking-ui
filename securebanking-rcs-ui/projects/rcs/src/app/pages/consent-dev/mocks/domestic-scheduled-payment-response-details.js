module.exports = {
  "type": "DomesticScheduledPaymentConsentDetails",
  "decisionApiUri": "/api/rcs/consent/decision/",
  "username": "psu4test",
  "userId": "737742f2-01e4-4efa-a131-77e6526f98d2",
  "logo": "https://forgerock.com",
  "clientId": "5d649549-bfea-4f23-b071-618fcb74e37f",
  "instructedAmount": {
    "amount": "10.01",
    "currency": "GBP"
  },
  "merchantName": "Automating-testing",
  "accounts": [
    {
      "id": "c8e6f564-8cf2-43d1-a4c4-4ef138035cc2",
      "userId": "737742f2-01e4-4efa-a131-77e6526f98d2",
      "account": {
        "accountId": "c8e6f564-8cf2-43d1-a4c4-4ef138035cc2",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-06-08T08:08:10.602Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "UK Bills",
        "openingDate": "2022-06-07T08:08:10.602Z",
        "maturityDate": "2022-06-09T08:08:10.603Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "36500330521558",
            "name": "737742f2-01e4-4efa-a131-77e6526f98d2",
            "secondaryIdentification": "11511370"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "36500330521558",
          "name": "737742f2-01e4-4efa-a131-77e6526f98d2",
          "secondaryIdentification": "11511370"
        }
      },
      "latestStatementId": "d23e5a6e-68ea-4935-9566-40076eee90a4",
      "created": "2022-06-08T08:08:10.577Z",
      "balances": [
        {
          "accountId": "c8e6f564-8cf2-43d1-a4c4-4ef138035cc2",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-06-08T08:08:10.759Z",
          "amount": {
            "amount": "747.88",
            "currency": "GBP"
          }
        }
      ]
    },
    {
      "id": "b09d9f52-f3c1-4685-a445-bb8724442139",
      "userId": "737742f2-01e4-4efa-a131-77e6526f98d2",
      "account": {
        "accountId": "b09d9f52-f3c1-4685-a445-bb8724442139",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-06-08T08:08:12.333Z",
        "currency": "EUR",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "FR Bills",
        "openingDate": "2022-06-07T08:08:12.333Z",
        "maturityDate": "2022-06-09T08:08:12.333Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "38475969978429",
            "name": "737742f2-01e4-4efa-a131-77e6526f98d2",
            "secondaryIdentification": "58553312"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "38475969978429",
          "name": "737742f2-01e4-4efa-a131-77e6526f98d2",
          "secondaryIdentification": "58553312"
        }
      },
      "latestStatementId": "d9246ca7-c490-4204-a797-88e4f52883c2",
      "created": "2022-06-08T08:08:12.333Z",
      "balances": [
        {
          "accountId": "b09d9f52-f3c1-4685-a445-bb8724442139",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-06-08T08:08:12.336Z",
          "amount": {
            "amount": "14275.98",
            "currency": "EUR"
          }
        }
      ]
    },
    {
      "id": "30a05640-8c9e-4893-873b-60f39f2409d7",
      "userId": "737742f2-01e4-4efa-a131-77e6526f98d2",
      "account": {
        "accountId": "30a05640-8c9e-4893-873b-60f39f2409d7",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-06-08T08:08:13.083Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "Household",
        "openingDate": "2022-06-07T08:08:13.083Z",
        "maturityDate": "2022-06-09T08:08:13.083Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "97597044503404",
            "name": "737742f2-01e4-4efa-a131-77e6526f98d2"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "97597044503404",
          "name": "737742f2-01e4-4efa-a131-77e6526f98d2"
        }
      },
      "latestStatementId": "30e2bdb6-46f6-400f-96bb-9c6c646c0ac9",
      "created": "2022-06-08T08:08:13.083Z",
      "balances": [
        {
          "accountId": "30a05640-8c9e-4893-873b-60f39f2409d7",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-06-08T08:08:13.085Z",
          "amount": {
            "amount": "3440.49",
            "currency": "GBP"
          }
        }
      ]
    }
  ],
  "paymentDate": "2022-06-08T12:16:03.000Z",
  "paymentReference": "FRESCO-037",
  "intentType": "PAYMENT_DOMESTIC_SCHEDULED_CONSENT"
};