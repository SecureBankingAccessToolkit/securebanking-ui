module.exports = {
    "type": "InternationalPaymentConsentDetails",
    "consentId": "PIC_2d4317b5-69aa-44a6-9fc8-aacb57b1f832",
    "decisionApiUri": "/rcs/api/consent/decision/",
    "username": "psu4test",
    "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
    "clientId": "71ca6faf-08a6-4db8-a70a-0a086900f606",
    "clientName": "SAPIG automating-testing",
    "serviceProviderName": "Test Bank",
    "accounts": [
        {
            "id": "01233243245676",
            "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
            "account": {
                "accountId": "01233243245676",
                "status": "Enabled",
                "statusUpdateDateTime": "2023-11-17T05:55:04.537Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "UK Bills",
                "openingDate": "2023-11-16T05:55:04.537Z",
                "maturityDate": "2023-11-18T05:55:04.539Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "01233243245676",
                        "name": "psu4test",
                        "secondaryIdentification": "64224194"
                    }
                ]
            },
            "latestStatementId": "16fdc38d-a739-44e3-9180-f16a72231fb8",
            "created": "2023-11-17T05:55:04.463Z",
            "updated": "2023-11-17T05:55:07.572Z",
            "balances": [
                {
                    "accountId": "01233243245676",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2023-11-17T05:55:04.868Z",
                    "amount": {
                        "amount": "11325.85",
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
                "statusUpdateDateTime": "2023-11-17T05:55:07.687Z",
                "currency": "EUR",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "FR Bills",
                "openingDate": "2023-11-16T05:55:07.687Z",
                "maturityDate": "2023-11-18T05:55:07.687Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "01233254312390",
                        "name": "psu4test",
                        "secondaryIdentification": "87884044"
                    }
                ]
            },
            "latestStatementId": "262b9bb5-cfc6-44c9-a3bb-7b8412079876",
            "created": "2023-11-17T05:55:07.687Z",
            "updated": "2023-11-17T05:55:08.774Z",
            "balances": [
                {
                    "accountId": "01233254312390",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2023-11-17T05:55:07.690Z",
                    "amount": {
                        "amount": "3977.18",
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
                "statusUpdateDateTime": "2023-11-17T05:55:08.788Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "Household",
                "openingDate": "2023-11-16T05:55:08.788Z",
                "maturityDate": "2023-11-18T05:55:08.788Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "33441230187862",
                        "name": "psu4test"
                    }
                ]
            },
            "latestStatementId": "c97f897c-6610-4c1e-8321-b836f406dc6b",
            "created": "2023-11-17T05:55:08.788Z",
            "updated": "2023-11-17T05:55:09.682Z",
            "balances": [
                {
                    "accountId": "33441230187862",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2023-11-17T05:55:08.793Z",
                    "amount": {
                        "amount": "13434.46",
                        "currency": "GBP"
                    }
                }
            ]
        }
    ],
    "initiation": {
        "type": "FRWriteInternationalDataInitiation",
        "instructionIdentification": "ANSM020",
        "endToEndIdentification": "FRESCO.21302.GFX.01",
        "localInstrument": "UK.OBIE.BACS",
        "instructionPriority": "NORMAL",
        "purpose": "CDCD",
        "extendedPurpose": "Extended purpose",
        "chargeBearer": "SHARED",
        "currencyOfTransfer": "EUR",
        "destinationCountryCode": "GB",
        "instructedAmount": {
            "amount": "10.01",
            "currency": "GBP"
        },
        "creditor": {
            "name": "Creditor Name",
            "postalAddress": {
                "addressType": "RESIDENTIAL",
                "streetName": "The Mall",
                "buildingNumber": "1",
                "postCode": "WC1 1AB",
                "townName": "London",
                "country": "UK"
            }
        },
        "creditorAgent": {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "40400411270111",
            "name": "Creditor Agent Name",
            "postalAddress": {
                "addressType": "RESIDENTIAL",
                "streetName": "The Mall",
                "buildingNumber": "1",
                "postCode": "WC1 1AB",
                "townName": "London",
                "country": "UK"
            }
        },
        "creditorAccount": {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "08080021325698",
            "name": "Mr Tim Burgess",
            "secondaryIdentification": "11"
        },
        "remittanceInformation": {
            "unstructured": "Internal ops code 5120103",
            "reference": "FRESCO-037"
        },
        "supplementaryData": {
            "data": "{}"
        }
    },
    "instructedAmount": {
        "amount": "10.01",
        "currency": "GBP"
    },
    "exchangeRateInformation": {
        "unitCurrency": "GBP",
        "exchangeRate": 1.1634,
        "rateType": "INDICATIVE"
    },
    "charges": {
        "amount": "0"
    },
    "currencyOfTransfer": "EUR",
    "paymentReference": "FRESCO-037",
    "intentType": "PAYMENT_INTERNATIONAL_CONSENT"
}
