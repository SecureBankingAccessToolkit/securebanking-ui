module.exports = {
  type: "CustomerInfoConsentDetails",
  "consentId": "CIC_a337e1a0-53ab-478b-b59a-1d68d5f07244",
  decisionApiUri: "/rcs/api/consent/decision/",
  username: "bab001",
  userId: "61d9f601-4003-44b6-ab47-5b5eb83f85fb",
  clientId: "5f996ff6-1b44-47a3-9651-0cc5946aeca7",
  clientName: "Automating-testing",
  serviceProviderName: "Test Bank",
  permissions: [
    "ReadCustomerInfoPSU"
  ],
  customerInfo: {
    id: "64b908af2b21e25541392293",
    userID: "61d9f601-4003-44b6-ab47-5b5eb83f85fb",
    partyId: "32432-3242",
    title: "Mr",
    initials: "F",
    familyName: "Titmus",
    givenName: "Fred",
    email: "fred.titmus@acme.com",
    phoneNumber: "07743 234323",
    birthdate: "16/02/2001",
    address: {
      addressType: "Residential",
      streetAddress: [
        "999",
        "letsbe avenue",
        "colchester",
        "essex"
      ],
      postalCode: "CO8 3JJ",
      country: "UK"
    }
  },
  intentType: "CUSTOMER_INFO_CONSENT"
}
