module.exports = {
    type: "InternationalStandingOrderConsentDetails",
    decisionApiUri: "/rcs/api/consent/decision/",
    username: "psu4test",
    userId: "24a3b7b8-b477-446b-8bec-69214d8a3582",
    logo: "https://forgerock.com",
    clientId: "aecab376-5c1d-4874-8549-475aa0eb68d2",
    clientName: "TPP Test application",
    serviceProviderName: "Forgerock Bank simulation config",
    initiation: {
        debtorAccount: {
            schemeName: "UK.OBIE.SortCodeAccountNumber",
            identification: "30772183765717",
            name: "Will Smith account",
            secondaryIdentification: "66234289"
        },
        creditorAccount: {
            schemeName: "UK.OBIE.SortCodeAccountNumber",
            identification: "08080021325698",
            name: "ACME Inc",
            secondaryIdentification: "0002"
        },
        type: "FRWriteInternationalStandingOrderDataInitiation",
        frequency: "Every working day.",
        firstPaymentDateTime: "2022-09-27T10:03:06.000Z",
        finalPaymentDateTime: "2022-09-27T10:03:06.000Z",
        instructedAmount: {
            amount: "10.01",
            currency: "GBP"
        }
    },
    accounts: [
        {
            id: "cdb062f6-daed-479a-8843-00f842926ef7",
            userId: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
            account: {
                accountId: "cdb062f6-daed-479a-8843-00f842926ef7",
                status: "Enabled",
                statusUpdateDateTime: "2022-04-01T11:35:15.368Z",
                currency: "GBP",
                accountType: "Personal",
                accountSubType: "CurrentAccount",
                nickname: "UK Bills",
                openingDate: "2022-03-31T11:35:15.368Z",
                maturityDate: "2022-04-02T11:35:15.368Z",
                accounts: [
                    {
                        schemeName: "UK.OBIE.SortCodeAccountNumber",
                        identification: "30772183765717",
                        name: "Will Smith account",
                        secondaryIdentification: "66234289"
                    }
                ]
            },
            latestStatementId: "995af620-0f5c-4071-a7ca-6591038d12c4",
            created: "2022-04-01T11:35:15.368Z",
            balances: [
                {
                    accountId: "cdb062f6-daed-479a-8843-00f842926ef7",
                    creditDebitIndicator: "Debit",
                    type: "InterimAvailable",
                    dateTime: "2022-04-01T11:35:15.373Z",
                    amount: {
                        amount: "1679.63",
                        currency: "GBP"
                    }
                }
            ]
        }
    ],
    charges: {
        amount: "1.5",
        currency: "GBP"
    },
    currencyOfTransfer: "USD",
    paymentReference: "Ipsum Non Arcu Inc.",
    intentType: "PAYMENT_INTERNATIONAL_STANDING_ORDERS_CONSENT"
}
