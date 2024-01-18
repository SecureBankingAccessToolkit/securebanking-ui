module.exports = {
  "type": "FundsConfirmationConsentDetails",
  "consentId": "FCC_67e60d61-2cd4-4e9c-a473-8680b8e7c309",
  "decisionApiUri": "/rcs/api/consent/decision",
  "username": "psu4test",
  "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
  "clientId": "ce058417-bedc-444e-ba3d-fb793423ad27",
  "clientName": "SAPIG automating-testing",
  "serviceProviderName": "Test Bank",
  "accounts": [
    {
      "id": "01233243245676",
      "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
      "account": {
        "accountId": "01233243245676",
        "status": "Enabled",
        "statusUpdateDateTime": "2023-08-03T05:54:05.780Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "UK Bills",
        "openingDate": "2023-08-02T05:54:05.780Z",
        "maturityDate": "2023-08-04T05:54:05.781Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "01233243245676",
            "name": "psu4test",
            "secondaryIdentification": "40691009"
          }
        ]
      },
      "latestStatementId": "d4677ca0-053a-40d1-b0f7-7e5cf11064a1",
      "created": "2023-08-03T05:54:05.747Z",
      "updated": "2023-08-03T05:54:12.100Z",
      "balances": [
        {
          "accountId": "01233243245676",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2023-08-03T05:54:06.349Z",
          "amount": {
            "amount": "14776.38",
            "currency": "GBP"
          }
        }
      ]
    }
  ],
  "expirationDateTime": "2024-05-02T00:00:00.000Z",
  "debtorAccount": {
    "schemeName": "UK.OBIE.SortCodeAccountNumber",
    "identification": "01233243245676",
    "name": "psu4test",
    "accountId": "01233243245676"
  },
  "intentType": "FUNDS_CONFIRMATION_CONSENT"
};

