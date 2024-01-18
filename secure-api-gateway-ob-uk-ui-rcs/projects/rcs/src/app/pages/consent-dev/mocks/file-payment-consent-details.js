module.exports = {
  "type": "FilePaymentConsentDetails",
  "decisionApiUri": "/rcs/api/consent/decision",
  "username": "testUserName",
  "userId": "c7303aee-2ff1-44b5-b21f-a7a3aaf39271",
  "logo": "https://www.vhv.rs/dpng/d/455-4556963_warner-bros-logo-warner-brothers-logo-png-transparent.png",
  "clientId": "3bce98ec-755f-42f6-9f82-0a120a6db559",
  "clientName": "TPP Test application",
  "serviceProviderName": "Forgerock Bank simulation config",
  "filePayment": {
    "fileReference": "XmlExample",
    "numberOfTransactions": "3",
    "controlSum": 11500000,
    "requestedExecutionDateTime": "2023-09-27T13:03:06.000Z"
  },
  "accounts": [
    {
      "id": "123456",
      "account": {
        "accountId": "1234",
        "status": "Enabled",
        "statusUpdateDateTime": "2022-10-21T17:20:40.047Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "description": "A personal current account",
        "nickname": "House Account",
        "openingDate": "2022-10-20T17:20:40.047Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "40400411290112",
            "name": "Mr A Jones"
          }
        ],
        "servicer": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "9876"
        },
        "firstAccount": {
          "schemeName": "UK.OBIE.SortCodeAccountNumber",
          "identification": "40400411290112",
          "name": "Mr A Jones"
        }
      },
      "balances": [
        {
          "accountId": "12345",
          "creditDebitIndicator": "Credit",
          "type": "InterimAvailable",
          "dateTime": "2022-10-21T17:20:40.048Z",
          "amount": {
            "amount": "10.00",
            "currency": "GBP"
          }
        }
      ]
    }
  ],
  "charges": {
    "amount": "21.11",
    "currency": "GBP"
  },
  "intentType": "PAYMENT_FILE_CONSENT"
};
