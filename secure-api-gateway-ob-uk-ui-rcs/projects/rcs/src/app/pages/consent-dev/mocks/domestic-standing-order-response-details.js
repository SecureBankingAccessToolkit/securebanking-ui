module.exports = {
    "type": "DomesticStandingOrderConsentDetails",
    "consentId": "PDSOC_d0f51320-9ba5-4f56-9949-f89afbc23d",
    "decisionApiUri": "/rcs/api/consent/decision",
    "username": "psu4test",
    "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
    "clientId": "88ca3111-fa9f-4ff3-a61d-6cd9961606c5",
    "clientName": "SAPIG automating-testing",
    "serviceProviderName": "Test Bank",
    "accounts": [
        {
            "id": "01233243245676",
            "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
            "account": {
                "accountId": "01233243245676",
                "status": "Enabled",
                "statusUpdateDateTime": "2023-09-19T05:48:03.210Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "UK Bills",
                "openingDate": "2023-09-18T05:48:03.210Z",
                "maturityDate": "2023-09-20T05:48:03.211Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "01233243245676",
                        "name": "psu4test",
                        "secondaryIdentification": "34277610"
                    }
                ]
            },
            "latestStatementId": "998aca23-f2f8-4a42-8e82-48fa571b50b3",
            "created": "2023-09-19T05:48:03.128Z",
            "updated": "2023-09-19T05:48:07.762Z",
            "balances": [
                {
                    "accountId": "01233243245676",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2023-09-19T05:48:03.565Z",
                    "amount": {
                        "amount": "4713.45",
                        "currency": "GBP"
                    }
                }
            ]
        },
        {
            "id": "01233254312390",
            "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
            "account": {
                "accountId": "01233254312390",
                "status": "Enabled",
                "statusUpdateDateTime": "2023-09-19T05:48:07.963Z",
                "currency": "EUR",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "FR Bills",
                "openingDate": "2023-09-18T05:48:07.963Z",
                "maturityDate": "2023-09-20T05:48:07.963Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "01233254312390",
                        "name": "psu4test",
                        "secondaryIdentification": "44398363"
                    }
                ]
            },
            "latestStatementId": "e5a0fdd1-b885-4e9e-94f9-648027faa7e6",
            "created": "2023-09-19T05:48:07.963Z",
            "updated": "2023-09-19T05:48:10.140Z",
            "balances": [
                {
                    "accountId": "01233254312390",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2023-09-19T05:48:07.965Z",
                    "amount": {
                        "amount": "1391.86",
                        "currency": "EUR"
                    }
                }
            ]
        },
        {
            "id": "33441230187862",
            "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
            "account": {
                "accountId": "33441230187862",
                "status": "Enabled",
                "statusUpdateDateTime": "2023-09-19T05:48:10.168Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "Household",
                "openingDate": "2023-09-18T05:48:10.168Z",
                "maturityDate": "2023-09-20T05:48:10.168Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "33441230187862",
                        "name": "psu4test"
                    }
                ]
            },
            "latestStatementId": "2179c1eb-cf73-4171-89b5-8dd7d6916141",
            "created": "2023-09-19T05:48:10.168Z",
            "updated": "2023-09-19T05:48:11.493Z",
            "balances": [
                {
                    "accountId": "33441230187862",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2023-09-19T05:48:10.182Z",
                    "amount": {
                        "amount": "15087.65",
                        "currency": "GBP"
                    }
                }
            ]
        }
    ],
    "initiation": {
        "type": "FRWriteDomesticStandingOrderDataInitiation",
        "frequency": "Paid on the 25th March, 24th June, 29th September and 25th December.",
        "reference": "Reference text",
        "firstPaymentDateTime": "2022-06-21T06:06:06.000Z",
        "finalPaymentDateTime": "2023-03-20T06:06:06.000Z",
        "firstPaymentAmount": {
            "amount": "165.88",
            "currency": "GBP"
        },
        "recurringPaymentAmount": {
            "amount": "65",
            "currency": "GBP"
        },
        "finalPaymentAmount": {
            "amount": "525.83",
            "currency": "GBP"
        },
        "creditorAccount": {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "08080021325698",
            "name": "ACME Inc",
            "secondaryIdentification": "0002"
        }
    },
    "paymentReference": "Reference text",
    "charges": {
        "amount": "0"
    },
    "intentType": "PAYMENT_DOMESTIC_STANDING_ORDERS_CONSENT"
};