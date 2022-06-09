module.exports = {
  type: "DomesticVrpPaymentConsentDetails",
  username: "jsanchez",
  clientId: "448b84ba-d4a0-493b-8adb-6b9c17acdcac",
  merchantName: "Anonymous - 6220eca78f118300163d0e55",
  pispName: "Anonymous - 6220eca78f118300163d0e55",
  aspspName: "Forgerock Financial Sandbox",
  debtorAccount: {
    schemeName: "UK.OBIE.SortCodeAccountNumber",
    identification: "18837042784401",
    name: "Mr Tim Burgess"
  },
  creditorAccount: {
    schemeName: "UK.OBIE.SortCodeAccountNumber",
    identification: "77473822735957",
    name: "myuser"
  },
  paymentReference: "FRESCO-037",
  debtorReference: "Internal ops code 5120103",
  controlParameters: {
    vrpType: [
      "UK.OBIE.VRPType.Sweeping"
    ],
    psuAuthenticationMethods: [
      "UK.OBIE.SCA"
    ],
    validFromDateTime: "2021-12-03T15:18:48.429Z",
    validToDateTime: "2021-12-13T15:18:48.429Z",
    maximumIndividualAmount: {
      amount: "10.01",
      currency: "GBP"
    },
    periodicLimits: [
      {
        amount: "100.01",
        currency: "GBP",
        periodType: "Month",
        periodAlignment: "Calendar"
      }
    ],
    supplementaryData: {
      data: "{\"data\:\"{}\"}"
    }
  },
  intentType: "DOMESTIC_VRP_PAYMENT_CONSENT",
  decisionAPIUri: "/api/rcs/consent/decision/"
}
