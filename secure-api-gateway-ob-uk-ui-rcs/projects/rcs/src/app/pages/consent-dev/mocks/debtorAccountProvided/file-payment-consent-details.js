module.exports = {
  type: "FilePaymentConsentDetails",
  decisionApiUri: "/rcs/api/consent/decision/",
  username: "testUserName",
  userId: "c7303aee-2ff1-44b5-b21f-a7a3aaf39271",
  logo: "https://www.vhv.rs/dpng/d/455-4556963_warner-bros-logo-warner-brothers-logo-png-transparent.png",
  clientId: "3bce98ec-755f-42f6-9f82-0a120a6db559",
  clientName: "TPP Test application",
  serviceProviderName: "Forgerock Bank simulation config",
  filePayment: {
    fileReference: "XmlExample",
    numberOfTransactions: "3",
    controlSum: 11500000,
    requestedExecutionDateTime: "2023-09-27T13:03:06.000Z",
    debtorAccount: {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "30772183765717",
      name: "Will Smith account",
      secondaryIdentification: "66234289"
    },
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
    amount: "21.11",
    currency: "GBP"
  },
  intentType: "PAYMENT_FILE_CONSENT"
};
