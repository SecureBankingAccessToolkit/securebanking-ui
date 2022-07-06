module.exports = {
  "type": "InternationalPaymentConsentDetails",
  "decisionApiUri": "/api/rcs/consent/decision/",
  "username": "psu4test",
  "userId": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
  "logo": "https://forgerock.com",
  "clientId": "eb7e13d0-d7a8-449c-94c3-6d18aaed85e4",
  "instructedAmount": {
      "amount": "10.01",
      "currency": "GBP"
  },
  "exchangeRateInformation": {
      "unitCurrency": "EUR",
      "exchangeRate": "10",
      "rateType": "AGREED",
      "contractIdentification": "/tbill/2018/T102993"
  },
  "merchantName": "Automating-testing",
  "currencyOfTransfer": "USD",
  "paymentReference": "FRESCO-037",
  "accounts": [
      {
          "id": "afe693ce-6b45-4b2b-abaf-b42056a135c5",
          "userId": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
          "account": {
              "accountId": "afe693ce-6b45-4b2b-abaf-b42056a135c5",
              "status": "Enabled",
              "statusUpdateDateTime": "2022-07-06T06:39:11.115Z",
              "currency": "GBP",
              "accountType": "Personal",
              "accountSubType": "CurrentAccount",
              "nickname": "UK Bills",
              "openingDate": "2022-07-05T06:39:11.115Z",
              "maturityDate": "2022-07-07T06:39:11.116Z",
              "accounts": [
                  {
                      "schemeName": "UK.OBIE.SortCodeAccountNumber",
                      "identification": "51497750767868",
                      "name": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
                      "secondaryIdentification": "15878292"
                  }
              ],
              "firstAccount": {
                  "schemeName": "UK.OBIE.SortCodeAccountNumber",
                  "identification": "51497750767868",
                  "name": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
                  "secondaryIdentification": "15878292"
              }
          },
          "latestStatementId": "7c4751ca-83ec-4928-870b-496d69ac2a8d",
          "created": "2022-07-06T06:39:11.094Z",
          "balances": [
              {
                  "accountId": "afe693ce-6b45-4b2b-abaf-b42056a135c5",
                  "creditDebitIndicator": "Debit",
                  "type": "InterimAvailable",
                  "dateTime": "2022-07-06T06:39:11.389Z",
                  "amount": {
                      "amount": "9172.87",
                      "currency": "GBP"
                  }
              }
          ]
      },
      {
          "id": "b6a6ceb1-db4d-42d6-9e53-81c4887c931c",
          "userId": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
          "account": {
              "accountId": "b6a6ceb1-db4d-42d6-9e53-81c4887c931c",
              "status": "Enabled",
              "statusUpdateDateTime": "2022-07-06T06:39:13.639Z",
              "currency": "EUR",
              "accountType": "Personal",
              "accountSubType": "CurrentAccount",
              "nickname": "FR Bills",
              "openingDate": "2022-07-05T06:39:13.639Z",
              "maturityDate": "2022-07-07T06:39:13.639Z",
              "accounts": [
                  {
                      "schemeName": "UK.OBIE.SortCodeAccountNumber",
                      "identification": "19127546367088",
                      "name": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
                      "secondaryIdentification": "3437348"
                  }
              ],
              "firstAccount": {
                  "schemeName": "UK.OBIE.SortCodeAccountNumber",
                  "identification": "19127546367088",
                  "name": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
                  "secondaryIdentification": "3437348"
              }
          },
          "latestStatementId": "a6815a32-bd5e-427e-9819-5f8cfdeaab90",
          "created": "2022-07-06T06:39:13.639Z",
          "balances": [
              {
                  "accountId": "b6a6ceb1-db4d-42d6-9e53-81c4887c931c",
                  "creditDebitIndicator": "Debit",
                  "type": "InterimAvailable",
                  "dateTime": "2022-07-06T06:39:13.641Z",
                  "amount": {
                      "amount": "6320.67",
                      "currency": "EUR"
                  }
              }
          ]
      },
      {
          "id": "4c4bdd91-bc2f-4390-9f54-060702413ce7",
          "userId": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac",
          "account": {
              "accountId": "4c4bdd91-bc2f-4390-9f54-060702413ce7",
              "status": "Enabled",
              "statusUpdateDateTime": "2022-07-06T06:39:14.604Z",
              "currency": "GBP",
              "accountType": "Personal",
              "accountSubType": "CurrentAccount",
              "nickname": "Household",
              "openingDate": "2022-07-05T06:39:14.604Z",
              "maturityDate": "2022-07-07T06:39:14.604Z",
              "accounts": [
                  {
                      "schemeName": "UK.OBIE.SortCodeAccountNumber",
                      "identification": "92389168525341",
                      "name": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac"
                  }
              ],
              "firstAccount": {
                  "schemeName": "UK.OBIE.SortCodeAccountNumber",
                  "identification": "92389168525341",
                  "name": "5ea4043f-76b4-4aff-873f-0086eb6cf6ac"
              }
          },
          "latestStatementId": "34d33129-565f-4949-9c74-8934b9654133",
          "created": "2022-07-06T06:39:14.604Z",
          "balances": [
              {
                  "accountId": "4c4bdd91-bc2f-4390-9f54-060702413ce7",
                  "creditDebitIndicator": "Debit",
                  "type": "InterimAvailable",
                  "dateTime": "2022-07-06T06:39:14.606Z",
                  "amount": {
                      "amount": "4963.87",
                      "currency": "GBP"
                  }
              }
          ]
      }
  ],
  "intentType": "PAYMENT_INTERNATIONAL_CONSENT"
}