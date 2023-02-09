module.exports = {
    "type": "AccountsConsentDetails",
    "decisionApiUri": "/rcs/api/consent/decision/",
    "username": "psu4test",
    "userId": "fc99f546-8507-428b-88f2-1d78860a0881",
    "logo": "https://forgerock.com",
    "clientId": "225ca346-85b0-43cf-91e5-e59c67619c65",
    "clientName": "TPP Test application",
    "serviceProviderName": "Forgerock Bank simulation config",
    "permissions": [
        "ReadAccountsDetail",
        "ReadBalances",
        "ReadTransactionsDetail",
        "ReadTransactionsCredits",
        "ReadBeneficiariesDetail",
        "ReadDirectDebits",
        "ReadStandingOrdersDetail",
        "ReadProducts",
        "ReadOffers",
        "ReadParty",
        "ReadScheduledPaymentsDetail",
        "ReadStatementsDetail"
    ],
    "accounts": [
        {
            "id": "b8ed6de5-92c9-4b87-b47b-136c7b653eec",
            "userId": "fc99f546-8507-428b-88f2-1d78860a0881",
            "account": {
                "accountId": "b8ed6de5-92c9-4b87-b47b-136c7b653eec",
                "status": "Enabled",
                "statusUpdateDateTime": "2022-06-09T06:16:14.366Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "UK Bills",
                "openingDate": "2022-06-08T06:16:14.366Z",
                "maturityDate": "2022-06-10T06:16:14.367Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "38929353032797",
                        "name": "fc99f546-8507-428b-88f2-1d78860a0881",
                        "secondaryIdentification": "3679413"
                    }
                ],
                "firstAccount": {
                    "schemeName": "UK.OBIE.SortCodeAccountNumber",
                    "identification": "38929353032797",
                    "name": "fc99f546-8507-428b-88f2-1d78860a0881",
                    "secondaryIdentification": "3679413"
                }
            },
            "latestStatementId": "09ef2dba-6f84-44a9-ba45-02ce95e4bf6b",
            "created": "2022-06-09T06:16:14.342Z",
            "balances": [
                {
                    "accountId": "b8ed6de5-92c9-4b87-b47b-136c7b653eec",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2022-06-09T06:16:14.517Z",
                    "amount": {
                        "amount": "3709.47",
                        "currency": "GBP"
                    }
                }
            ]
        },
        {
            "id": "29421549-1819-4e16-8b87-1915722a4db8",
            "userId": "fc99f546-8507-428b-88f2-1d78860a0881",
            "account": {
                "accountId": "29421549-1819-4e16-8b87-1915722a4db8",
                "status": "Enabled",
                "statusUpdateDateTime": "2022-06-09T06:16:15.667Z",
                "currency": "EUR",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "FR Bills",
                "openingDate": "2022-06-08T06:16:15.667Z",
                "maturityDate": "2022-06-10T06:16:15.667Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "52706813573133",
                        "name": "fc99f546-8507-428b-88f2-1d78860a0881",
                        "secondaryIdentification": "5352357"
                    }
                ],
                "firstAccount": {
                    "schemeName": "UK.OBIE.SortCodeAccountNumber",
                    "identification": "52706813573133",
                    "name": "fc99f546-8507-428b-88f2-1d78860a0881",
                    "secondaryIdentification": "5352357"
                }
            },
            "latestStatementId": "2f166748-abc9-4040-b259-8c9eda1d4f88",
            "created": "2022-06-09T06:16:15.667Z",
            "balances": [
                {
                    "accountId": "29421549-1819-4e16-8b87-1915722a4db8",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2022-06-09T06:16:15.670Z",
                    "amount": {
                        "amount": "7455.40",
                        "currency": "EUR"
                    }
                }
            ]
        },
        {
            "id": "8495b716-4c23-4c13-83ae-cd7760d237cb",
            "userId": "fc99f546-8507-428b-88f2-1d78860a0881",
            "account": {
                "accountId": "8495b716-4c23-4c13-83ae-cd7760d237cb",
                "status": "Enabled",
                "statusUpdateDateTime": "2022-06-09T06:16:16.227Z",
                "currency": "GBP",
                "accountType": "Personal",
                "accountSubType": "CurrentAccount",
                "nickname": "Household",
                "openingDate": "2022-06-08T06:16:16.227Z",
                "maturityDate": "2022-06-10T06:16:16.227Z",
                "accounts": [
                    {
                        "schemeName": "UK.OBIE.SortCodeAccountNumber",
                        "identification": "59167537878201",
                        "name": "fc99f546-8507-428b-88f2-1d78860a0881"
                    }
                ],
                "firstAccount": {
                    "schemeName": "UK.OBIE.SortCodeAccountNumber",
                    "identification": "59167537878201",
                    "name": "fc99f546-8507-428b-88f2-1d78860a0881"
                }
            },
            "latestStatementId": "fd1dbe16-da1f-409a-b506-0c341e577028",
            "created": "2022-06-09T06:16:16.226Z",
            "balances": [
                {
                    "accountId": "8495b716-4c23-4c13-83ae-cd7760d237cb",
                    "creditDebitIndicator": "Debit",
                    "type": "InterimAvailable",
                    "dateTime": "2022-06-09T06:16:16.230Z",
                    "amount": {
                        "amount": "6354.23",
                        "currency": "GBP"
                    }
                }
            ]
        }
    ],
    "fromTransaction": "2019-04-03T00:00:00.000Z",
    "toTransaction": "2019-08-01T00:00:00.000Z",
    "expiredDate": "2019-08-01T00:00:00.000Z",
    "intentType": "ACCOUNT_ACCESS_CONSENT"
};
