module.exports = {
    "type": "InternationalScheduledPaymentConsentDetails",
    "decisionApiUri": "/api/rcs/consent/decision/",
    "username": "psu4test",
    "userId": "8e465e16-e10d-4456-95ac-f558f135e81d",
    "logo": "https://forgerock.com",
    "clientId": "bd8ca1a6-f7cf-4220-8cea-cc7f9631de2c",
    "instructedAmount": {
        "amount": "10.01",
        "currency": "GBP"
    },
    "exchangeRateInformation": {
        "unitCurrency": "EUR",
        "exchangeRate": 10,
        "rateType": "AGREED",
        "contractIdentification": "/tbill/2018/T102993"
    },
    "merchantName": "Automating-testing",
    "paymentDate": "2022-07-21T08:46:53.000Z",
    "currencyOfTransfer": "USD",
    "paymentReference": "FRESCO-037",
    "accounts": [
        {
            "id": "b50d7c30-2d0c-4191-994f-038494ed04fe",
            "userId": "8e465e16-e10d-4456-95ac-f558f135e81d",
            "account": {
                "accountId": "b50d7c30-2d0c-4191-994f-038494ed04fe",
                "status": "Enabled",
                "statusUpdateDateTime": "2022-07-22T06:11:10.374Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "UK Bills",
                "openingDate": "2022-07-21T06:11:10.374Z",
                "maturityDate": "2022-07-23T06:11:10.375Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "70005730618981",
                        "name": "8e465e16-e10d-4456-95ac-f558f135e81d",
                        "secondaryIdentification": "10745775"
                    }
                ],
                "firstAccount": {
                    "schemeName": "UK.OBIE.SortCodeAccountNumber",
                    "identification": "70005730618981",
                    "name": "8e465e16-e10d-4456-95ac-f558f135e81d",
                    "secondaryIdentification": "10745775"
                }
            },
            "latestStatementId": "514a5d58-b2dc-4b87-ba2f-d6d9e26b2f63",
            "created": "2022-07-22T06:11:10.306Z",
            "balances": [
                {
                    "accountId": "b50d7c30-2d0c-4191-994f-038494ed04fe",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2022-07-22T06:11:10.573Z",
                    "amount": {
                        "amount": "12229.04",
                        "currency": "GBP"
                    }
                }
            ]
        },
        {
            "id": "ff3ec24e-9a3e-46db-b2ca-22441314e3d5",
            "userId": "8e465e16-e10d-4456-95ac-f558f135e81d",
            "account": {
                "accountId": "ff3ec24e-9a3e-46db-b2ca-22441314e3d5",
                "status": "Enabled",
                "statusUpdateDateTime": "2022-07-22T06:11:12.721Z",
                "currency": "EUR",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "FR Bills",
                "openingDate": "2022-07-21T06:11:12.721Z",
                "maturityDate": "2022-07-23T06:11:12.721Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "72306585225098",
                        "name": "8e465e16-e10d-4456-95ac-f558f135e81d",
                        "secondaryIdentification": "90689405"
                    }
                ],
                "firstAccount": {
                    "schemeName": "UK.OBIE.SortCodeAccountNumber",
                    "identification": "72306585225098",
                    "name": "8e465e16-e10d-4456-95ac-f558f135e81d",
                    "secondaryIdentification": "90689405"
                }
            },
            "latestStatementId": "9affaafd-e90d-4c26-adbd-b0a8319fb462",
            "created": "2022-07-22T06:11:12.721Z",
            "balances": [
                {
                    "accountId": "ff3ec24e-9a3e-46db-b2ca-22441314e3d5",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2022-07-22T06:11:12.724Z",
                    "amount": {
                        "amount": "16903.80",
                        "currency": "EUR"
                    }
                }
            ]
        },
        {
            "id": "b0dd584f-5d07-46cd-9c2d-f989ed0c79df",
            "userId": "8e465e16-e10d-4456-95ac-f558f135e81d",
            "account": {
                "accountId": "b0dd584f-5d07-46cd-9c2d-f989ed0c79df",
                "status": "Enabled",
                "statusUpdateDateTime": "2022-07-22T06:11:13.517Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "Household",
                "openingDate": "2022-07-21T06:11:13.517Z",
                "maturityDate": "2022-07-23T06:11:13.517Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "78577781690632",
                        "name": "8e465e16-e10d-4456-95ac-f558f135e81d"
                    }
                ],
                "firstAccount": {
                    "schemeName": "UK.OBIE.SortCodeAccountNumber",
                    "identification": "78577781690632",
                    "name": "8e465e16-e10d-4456-95ac-f558f135e81d"
                }
            },
            "latestStatementId": "ad27071b-edc3-4f54-a3ee-586ddd71ba2c",
            "created": "2022-07-22T06:11:13.517Z",
            "balances": [
                {
                    "accountId": "b0dd584f-5d07-46cd-9c2d-f989ed0c79df",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2022-07-22T06:11:13.519Z",
                    "amount": {
                        "amount": "4803.13",
                        "currency": "GBP"
                    }
                }
            ]
        }
    ],
    "intentType": "PAYMENT_INTERNATIONAL_SCHEDULED_CONSENT"
}