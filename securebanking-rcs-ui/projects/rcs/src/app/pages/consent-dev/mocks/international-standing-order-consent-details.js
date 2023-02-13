module.exports = {
  "type": "InternationalStandingOrderConsentDetails",
  "decisionApiUri": "/rcs/api/consent/decision/",
  "username": "psu4test",
  "userId": "24a3b7b8-b477-446b-8bec-69214d8a3582",
  "logo": "https://forgerock.com",
  "clientId": "aecab376-5c1d-4874-8549-475aa0eb68d2",
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
  "internationalStandingOrder": {
    "type": "FRWriteInternationalStandingOrderDataInitiation",
    "frequency": "Every working day.",
    "firstPaymentDateTime": "2022-09-27T10:03:06.000Z",
    "finalPaymentDateTime": "2022-09-27T10:03:06.000Z",
    "instructedAmount": {
      "amount": "10.01",
      "currency": "GBP"
    }
  },
  "accounts": [
    {
      "id": "88420f4c-1cb3-48b9-9c70-9f377a8efcec",
      "userId": "24a3b7b8-b477-446b-8bec-69214d8a3582",
      "account": {
        "accountId": "88420f4c-1cb3-48b9-9c70-9f377a8efcec",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-09-29T06:59:11.000Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "UK Bills",
        "openingDate": "2022-09-28T06:59:11.000Z",
        "maturityDate": "2022-09-30T06:59:11.000Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "33445235224228",
            "name": "24a3b7b8-b477-446b-8bec-69214d8a3582",
            "secondaryIdentification": "51171563"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "33445235224228",
          "name": "24a3b7b8-b477-446b-8bec-69214d8a3582",
          "secondaryIdentification": "51171563"
        }
      },
      "latestStatementId": "f1693471-2c7e-4fcf-8460-4b9b35f7f288",
      "created": "2022-09-29T06:59:11.000Z",
      "balances": [
        {
          "accountId": "88420f4c-1cb3-48b9-9c70-9f377a8efcec",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-09-29T06:59:12.000Z",
          "amount": {
            "amount": "2435.91",
            "currency": "GBP"
          }
        }
      ]
    },
    {
      "id": "7cac111f-0361-44cf-b29d-b28f65e37dae",
      "userId": "24a3b7b8-b477-446b-8bec-69214d8a3582",
      "account": {
        "accountId": "7cac111f-0361-44cf-b29d-b28f65e37dae",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-09-29T06:59:13.000Z",
        "currency": "EUR",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "FR Bills",
        "openingDate": "2022-09-28T06:59:13.000Z",
        "maturityDate": "2022-09-30T06:59:13.000Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "77323579641141",
            "name": "24a3b7b8-b477-446b-8bec-69214d8a3582",
            "secondaryIdentification": "28664857"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "77323579641141",
          "name": "24a3b7b8-b477-446b-8bec-69214d8a3582",
          "secondaryIdentification": "28664857"
        }
      },
      "latestStatementId": "3293220b-eb77-4dd9-9222-f631a09759ec",
      "created": "2022-09-29T06:59:13.000Z",
      "balances": [
        {
          "accountId": "7cac111f-0361-44cf-b29d-b28f65e37dae",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-09-29T06:59:13.000Z",
          "amount": {
            "amount": "8104.69",
            "currency": "EUR"
          }
        }
      ]
    },
    {
      "id": "e67445c0-3138-4362-a9af-6a16114d9097",
      "userId": "24a3b7b8-b477-446b-8bec-69214d8a3582",
      "account": {
        "accountId": "e67445c0-3138-4362-a9af-6a16114d9097",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-09-29T06:59:14.000Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "Household",
        "openingDate": "2022-09-28T06:59:14.000Z",
        "maturityDate": "2022-09-30T06:59:14.000Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "98246566821200",
            "name": "24a3b7b8-b477-446b-8bec-69214d8a3582"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "98246566821200",
          "name": "24a3b7b8-b477-446b-8bec-69214d8a3582"
        }
      },
      "latestStatementId": "a469c220-9d76-4467-bd8d-2621d09c915e",
      "created": "2022-09-29T06:59:14.000Z",
      "balances": [
        {
          "accountId": "e67445c0-3138-4362-a9af-6a16114d9097",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-09-29T06:59:14.000Z",
          "amount": {
            "amount": "7956.70",
            "currency": "GBP"
          }
        }
      ]
    }
  ],
  "charges": {
    "amount": "1.5",
    "currency": "GBP"
  },
  "currencyOfTransfer": "USD",
  "paymentReference": "Ipsum Non Arcu Inc.",
  "intentType": "PAYMENT_INTERNATIONAL_STANDING_ORDERS_CONSENT"
}
