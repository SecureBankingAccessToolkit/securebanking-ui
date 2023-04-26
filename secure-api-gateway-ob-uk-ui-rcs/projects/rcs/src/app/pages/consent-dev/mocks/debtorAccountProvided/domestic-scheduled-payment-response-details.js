module.exports = {
  type: "DomesticScheduledPaymentConsentDetails",
  decisionApiUri: "/rcs/api/consent/decision/",
  username: "psu4test",
  userId: "737742f2-01e4-4efa-a131-77e6526f98d2",
  logo: "https://forgerock.com",
  clientId: "5d649549-bfea-4f23-b071-618fcb74e37f",
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
    }
  },
  instructedAmount: {
    amount: "10.01",
    currency: "GBP"
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
  paymentDate: "2022-06-08T12:16:03.000Z",
  paymentReference: "FRESCO-037",
  intentType: "PAYMENT_DOMESTIC_SCHEDULED_CONSENT"
};
