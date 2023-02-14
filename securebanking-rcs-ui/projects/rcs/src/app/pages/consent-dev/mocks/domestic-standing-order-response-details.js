module.exports = {
  "type": "DomesticStandingOrderConsentDetails",
  "decisionApiUri": "/rcs/api/consent/decision/",
  "username": "psu4test",
  "userId": "42edfd13-a642-47c1-b76c-684efe4e6449",
  "logo": "https://forgerock.com",
  "clientId": "63bce7d3-0c74-4188-9d24-88e3a69d3c80",
  "clientName": "TPP Test application",
  "serviceProviderName": "Forgerock Bank simulation config",
  initiation: {
    creditorAccount: {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "08080021325698",
      name: "ACME Inc",
      secondaryIdentification: "0002"
    }
  },
  "standingOrder": {
      "type": "FRWriteDomesticStandingOrderDataInitiation",
      "frequency": "Paid on the 25th March, 24th June, 29th September and 25th December.",
      "firstPaymentDateTime": "2022-06-21T06:06:06.000Z",
      "finalPaymentDateTime": "2023-03-20T06:06:06.000Z",
      "firstPaymentAmount": {
          "amount": "165.88",
          "currency": "GBP"
      },
      "recurringPaymentAmount": {
          "amount": "165.88",
          "currency": "GBP"
      },
      "finalPaymentAmount": {
          "amount": "165.88",
          "currency": "GBP"
      }
  },
  "accounts": [
      {
          "id": "34974c6f-af48-44a6-beca-b8c31f978f63",
          "userId": "42edfd13-a642-47c1-b76c-684efe4e6449",
          "account": {
              "accountId": "34974c6f-af48-44a6-beca-b8c31f978f63",
              "status": "Enabled",
              "statusUpdateDateTime": "2022-06-23T06:40:10.299Z",
              "currency": "GBP",
              "accountType": "Personal",
              "accountSubType": "CurrentAccount",
              "nickname": "UK Bills",
              "openingDate": "2022-06-22T06:40:10.299Z",
              "maturityDate": "2022-06-24T06:40:10.300Z",
              "accounts": [
                  {
                      "schemeName": "UK.OBIE.SortCodeAccountNumber",
                      "identification": "94737646552564",
                      "name": "42edfd13-a642-47c1-b76c-684efe4e6449",
                      "secondaryIdentification": "66809442"
                  }
              ],
              "firstAccount": {
                  "schemeName": "UK.OBIE.SortCodeAccountNumber",
                  "identification": "94737646552564",
                  "name": "42edfd13-a642-47c1-b76c-684efe4e6449",
                  "secondaryIdentification": "66809442"
              }
          },
          "latestStatementId": "fc3989e2-7b3f-4180-9989-e7647c254b8e",
          "created": "2022-06-23T06:40:10.283Z",
          "balances": [
              {
                  "accountId": "34974c6f-af48-44a6-beca-b8c31f978f63",
                  "creditDebitIndicator": "Debit",
                  "type": "InterimAvailable",
                  "dateTime": "2022-06-23T06:40:10.512Z",
                  "amount": {
                      "amount": "10894.83",
                      "currency": "GBP"
                  }
              }
          ]
      },
      {
          "id": "c5c827a2-56c1-4aa8-ae82-5dc27b04c4a8",
          "userId": "42edfd13-a642-47c1-b76c-684efe4e6449",
          "account": {
              "accountId": "c5c827a2-56c1-4aa8-ae82-5dc27b04c4a8",
              "status": "Enabled",
              "statusUpdateDateTime": "2022-06-23T06:40:12.313Z",
              "currency": "EUR",
              "accountType": "Personal",
              "accountSubType": "CurrentAccount",
              "nickname": "FR Bills",
              "openingDate": "2022-06-22T06:40:12.313Z",
              "maturityDate": "2022-06-24T06:40:12.313Z",
              "accounts": [
                  {
                      "schemeName": "UK.OBIE.SortCodeAccountNumber",
                      "identification": "40359693847335",
                      "name": "42edfd13-a642-47c1-b76c-684efe4e6449",
                      "secondaryIdentification": "75177497"
                  }
              ],
              "firstAccount": {
                  "schemeName": "UK.OBIE.SortCodeAccountNumber",
                  "identification": "40359693847335",
                  "name": "42edfd13-a642-47c1-b76c-684efe4e6449",
                  "secondaryIdentification": "75177497"
              }
          },
          "latestStatementId": "7ca14403-ea56-4234-ae4f-c8aed3a066aa",
          "created": "2022-06-23T06:40:12.313Z",
          "balances": [
              {
                  "accountId": "c5c827a2-56c1-4aa8-ae82-5dc27b04c4a8",
                  "creditDebitIndicator": "Debit",
                  "type": "InterimAvailable",
                  "dateTime": "2022-06-23T06:40:12.316Z",
                  "amount": {
                      "amount": "9098.35",
                      "currency": "EUR"
                  }
              }
          ]
      },
      {
          "id": "dc2e014f-7b53-43ed-99fe-b8a656973162",
          "userId": "42edfd13-a642-47c1-b76c-684efe4e6449",
          "account": {
              "accountId": "dc2e014f-7b53-43ed-99fe-b8a656973162",
              "status": "Enabled",
              "statusUpdateDateTime": "2022-06-23T06:40:13.496Z",
              "currency": "GBP",
              "accountType": "Personal",
              "accountSubType": "CurrentAccount",
              "nickname": "Household",
              "openingDate": "2022-06-22T06:40:13.496Z",
              "maturityDate": "2022-06-24T06:40:13.496Z",
              "accounts": [
                  {
                      "schemeName": "UK.OBIE.SortCodeAccountNumber",
                      "identification": "56542170356249",
                      "name": "42edfd13-a642-47c1-b76c-684efe4e6449"
                  }
              ],
              "firstAccount": {
                  "schemeName": "UK.OBIE.SortCodeAccountNumber",
                  "identification": "56542170356249",
                  "name": "42edfd13-a642-47c1-b76c-684efe4e6449"
              }
          },
          "latestStatementId": "16130bd0-2989-4aa9-b4e3-16c4350012d7",
          "created": "2022-06-23T06:40:13.496Z",
          "balances": [
              {
                  "accountId": "dc2e014f-7b53-43ed-99fe-b8a656973162",
                  "creditDebitIndicator": "Debit",
                  "type": "InterimAvailable",
                  "dateTime": "2022-06-23T06:40:13.498Z",
                  "amount": {
                      "amount": "1074.87",
                      "currency": "GBP"
                  }
              }
          ]
      }
  ],
  "paymentReference": "Reference text",
  "intentType": "PAYMENT_DOMESTIC_STANDING_ORDERS_CONSENT"
};
