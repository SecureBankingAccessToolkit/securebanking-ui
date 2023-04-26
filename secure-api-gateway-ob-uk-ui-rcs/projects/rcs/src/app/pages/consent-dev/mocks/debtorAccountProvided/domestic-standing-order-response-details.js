module.exports = {
  type: "DomesticStandingOrderConsentDetails",
  decisionApiUri: "/rcs/api/consent/decision/",
  username: "psu4test",
  userId: "42edfd13-a642-47c1-b76c-684efe4e6449",
  logo: "https://forgerock.com",
  clientId: "63bce7d3-0c74-4188-9d24-88e3a69d3c80",
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
  standingOrder: {
      type: "FRWriteDomesticStandingOrderDataInitiation",
      frequency: "Paid on the 25th March, 24th June, 29th September and 25th December.",
      firstPaymentDateTime: "2022-06-21T06:06:06.000Z",
      finalPaymentDateTime: "2023-03-20T06:06:06.000Z",
      firstPaymentAmount: {
          amount: "165.88",
          currency: "GBP"
      },
      recurringPaymentAmount: {
          amount: "165.88",
          currency: "GBP"
      },
      finalPaymentAmount: {
          amount: "165.88",
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
  paymentReference: "Reference text",
  intentType: "PAYMENT_DOMESTIC_STANDING_ORDERS_CONSENT"
};
