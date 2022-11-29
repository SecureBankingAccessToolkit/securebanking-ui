module.exports = {
  type: "DomesticVrpPaymentConsentDetails",
  decisionApiUri: "/api/rcs/consent/decision/",
  username: "testUserName",
  userId: "c7303aee-2ff1-44b5-b21f-a7a3aaf39271",
  logo: "https://www.vhv.rs/dpng/d/455-4556963_warner-bros-logo-warner-brothers-logo-png-transparent.png",
  clientId: "8c57af60-39ef-4eec-8309-d17d026843ac",
  clientName: "TPP Test application",
  serviceProviderName: "Forgerock Bank simulation config",
  initiation: {
    type: "FRWriteDomesticVRPDataInitiation",
    debtorAccount: {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "09090021325555",
      name: "ACME Inc",
      secondaryIdentification: "0002"
    },
    creditorAccount: {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "08080021325698",
      name: "ACME Inc",
      secondaryIdentification: "0002"
    },
    remittanceInformation: {
      unstructured: "Internal ops code 5120101",
      reference: "FRESCO-101"
    }
  },
  accounts: [],
  controlParameters: {
    ValidFromDateTime: "2022-11-28T11:35:30.510Z",
    ValidToDateTime: "2022-11-28T11:35:30.510Z",
    MaximumIndividualAmount: {
      Amount: "10.01",
      Currency: "GBP"
    },
    PeriodicLimits: [
      {
        PeriodType: "Month",
        PeriodAlignment: "Calendar",
        Amount: "10.01",
        Currency: "GBP"
      }
    ],
    VRPType: [
      "UK.OBIE.VRPType.Sweeping"
    ],
    PSUAuthenticationMethods: [
      "UK.OBIE.SCANotRequired"
    ]
  },
  intentType: "DOMESTIC_VRP_PAYMENT_CONSENT"
}
