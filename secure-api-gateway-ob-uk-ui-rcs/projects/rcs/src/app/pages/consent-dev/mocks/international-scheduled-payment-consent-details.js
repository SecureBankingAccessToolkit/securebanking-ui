module.exports = {
  "type": "InternationalScheduledPaymentConsentDetails",
  "decisionApiUri": "/rcs/api/consent/decision/",
  "username": "psu4test",
  "userId": "86228a9d-812d-4a15-a2f7-6a45488e593b",
  "logo": "https://forgerock.com",
  "clientId": "ec0a5142-ea7c-4b82-8ff0-f24e3a526a9c",
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
  "instructedAmount": {
    "amount": "10.01",
    "currency": "GBP"
  },
  "charges": {
    "amount": "1.5",
    "currency": "GBP"
  },
  "exchangeRateInformation": {
    "unitCurrency": "EUR",
    "exchangeRate": 10,
    "rateType": "AGREED",
    "contractIdentification": "/tbill/2018/T102993"
  },
  "paymentDate": "2022-09-21T08:46:53.000Z",
  "currencyOfTransfer": "EUR",
  "paymentReference": "FRESCO-037",
  "accounts": [
    {
      "id": "c2b6d4e4-8881-4d2b-afec-6f636479cf08",
      "userId": "86228a9d-812d-4a15-a2f7-6a45488e593b",
      "account": {
        "accountId": "c2b6d4e4-8881-4d2b-afec-6f636479cf08",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-08-17T06:12:12.000Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "UK Bills",
        "openingDate": "2022-08-16T06:12:12.000Z",
        "maturityDate": "2022-08-18T06:12:12.000Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "21676417575588",
            "name": "86228a9d-812d-4a15-a2f7-6a45488e593b",
            "secondaryIdentification": "93361307"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "21676417575588",
          "name": "86228a9d-812d-4a15-a2f7-6a45488e593b",
          "secondaryIdentification": "93361307"
        }
      },
      "latestStatementId": "1f520a6f-5b9d-47c1-a821-bd51bb346493",
      "created": "2022-08-17T06:12:12.000Z",
      "balances": [
        {
          "accountId": "c2b6d4e4-8881-4d2b-afec-6f636479cf08",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-08-17T06:12:12.000Z",
          "amount": {
            "amount": "15657.68",
            "currency": "GBP"
          }
        }
      ]
    },
    {
      "id": "aebfd722-d203-4bd1-ac9a-0242783b35d3",
      "userId": "86228a9d-812d-4a15-a2f7-6a45488e593b",
      "account": {
        "accountId": "aebfd722-d203-4bd1-ac9a-0242783b35d3",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-08-17T06:12:15.000Z",
        "currency": "EUR",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "FR Bills",
        "openingDate": "2022-08-16T06:12:15.000Z",
        "maturityDate": "2022-08-18T06:12:15.000Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "2647815018024",
            "name": "86228a9d-812d-4a15-a2f7-6a45488e593b",
            "secondaryIdentification": "25240690"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "2647815018024",
          "name": "86228a9d-812d-4a15-a2f7-6a45488e593b",
          "secondaryIdentification": "25240690"
        }
      },
      "latestStatementId": "30f9d176-14c0-40e8-89ef-3114516004a8",
      "created": "2022-08-17T06:12:15.000Z",
      "balances": [
        {
          "accountId": "aebfd722-d203-4bd1-ac9a-0242783b35d3",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-08-17T06:12:15.000Z",
          "amount": {
            "amount": "1234.68",
            "currency": "EUR"
          }
        }
      ]
    },
    {
      "id": "e24fa6fe-b4df-40dd-9fe7-aa07bc56db56",
      "userId": "86228a9d-812d-4a15-a2f7-6a45488e593b",
      "account": {
        "accountId": "e24fa6fe-b4df-40dd-9fe7-aa07bc56db56",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-08-17T06:12:16.000Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "Household",
        "openingDate": "2022-08-16T06:12:16.000Z",
        "maturityDate": "2022-08-18T06:12:16.000Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "5849097294991",
            "name": "86228a9d-812d-4a15-a2f7-6a45488e593b"
          }
        ],
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "5849097294991",
          "name": "86228a9d-812d-4a15-a2f7-6a45488e593b"
        }
      },
      "latestStatementId": "704e5532-a04f-4fa1-8cd4-cf52582e62bc",
      "created": "2022-08-17T06:12:16.000Z",
      "balances": [
        {
          "accountId": "e24fa6fe-b4df-40dd-9fe7-aa07bc56db56",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2022-08-17T06:12:16.000Z",
          "amount": {
            "amount": "8561.19",
            "currency": "GBP"
          }
        }
      ]
    }
  ],
  "intentType": "PAYMENT_INTERNATIONAL_SCHEDULED_CONSENT"
}
