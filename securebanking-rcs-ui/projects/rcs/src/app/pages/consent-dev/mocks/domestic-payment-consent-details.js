module.exports = {
  type: "DomesticPaymentsConsentDetails",
  decisionApiUri: "/rcs/api/consent/decision/",
  username: "psu4test",
  userId: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
  logo: "https://forgerock.com",
  clientId: "b437c832-e79c-4479-84b0-56e8ec403232",
  clientName: "TPP Test application",
  serviceProviderName: "Forgerock Bank simulation config",
  instructedAmount: {
    amount: "165.88",
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
            name: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
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
    },
    {
      id: "faf98228-4162-43b9-a4b2-a8cbe95e26f4",
      userId: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
      account: {
        accountId: "faf98228-4162-43b9-a4b2-a8cbe95e26f4",
        status: "Enabled",
        statusUpdateDateTime: "2022-04-01T11:35:16.448Z",
        currency: "EUR",
        accountType: "Personal",
        accountSubType: "CurrentAccount",
        nickname: "FR Bills",
        openingDate: "2022-03-31T11:35:16.448Z",
        maturityDate: "2022-04-02T11:35:16.449Z",
        accounts: [
          {
            schemeName: "UK.OBIE.SortCodeAccountNumber",
            identification: "79126738233670",
            name: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
            secondaryIdentification: "49704112"
          }
        ]
      },
      latestStatementId: "fe691133-47a9-408a-ba54-997ea43dbfa4",
      created: "2022-04-01T11:35:16.448Z",
      balances: [
        {
          accountId: "faf98228-4162-43b9-a4b2-a8cbe95e26f4",
          creditDebitIndicator: "Debit",
          type: "InterimAvailable",
          dateTime: "2022-04-01T11:35:16.451Z",
          amount: {
            amount: "9949.27",
            currency: "EUR"
          }
        }
      ]
    },
    {
      id: "8c5676dd-a058-46af-a541-94584ed98dd7",
      userId: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
      account: {
        accountId: "8c5676dd-a058-46af-a541-94584ed98dd7",
        status: "Enabled",
        statusUpdateDateTime: "2022-04-01T11:35:17.017Z",
        currency: "GBP",
        accountType: "Personal",
        accountSubType: "CurrentAccount",
        nickname: "Household",
        openingDate: "2022-03-31T11:35:17.017Z",
        maturityDate: "2022-04-02T11:35:17.017Z",
        accounts: [
          {
            schemeName: "UK.OBIE.SortCodeAccountNumber",
            identification: "86856343484438",
            name: "7b78b560-6057-41c5-bf1f-1ed590b1c30b"
          }
        ]
      },
      latestStatementId: "655bc860-dc48-48fc-850e-17e10a55442f",
      created: "2022-04-01T11:35:17.017Z",
      balances: [
        {
          accountId: "8c5676dd-a058-46af-a541-94584ed98dd7",
          creditDebitIndicator: "Debit",
          type: "InterimAvailable",
          dateTime: "2022-04-01T11:35:17.019Z",
          amount: {
            amount: "12032.86",
            currency: "GBP"
          }
        }
      ]
    }
  ],
  paymentReference: "FRESCO-101",
  intentType: "PAYMENT_DOMESTIC_CONSENT"
}
