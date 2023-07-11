module.exports = {
  intentType: "CUSTOMER_INFO_CONSENT",
  type: "CustomerInfoConsentDetails",
  decisionApiUri: "/rcs/api/consent/decision/",
  username: "psu4test",
  userId: "fc99f546-8507-428b-88f2-1d78860a0881",
  logo: "https://forgerock.com",
  clientId: "225ca346-85b0-43cf-91e5-e59c67619c65",
  clientName: "TPP Test application",
  serviceProviderName: "Forgerock Bank simulation config",
  customerInfo: {
    familyName: "Doe",
    givenName: "Joe",
    email: "Joe.doe@acme.com",
    phoneNumber: "07743 233223",
    birthdate: "16/02/1987",
    address: {
      streetAddress: [
        "999",
        "River Side",
        "Bradford",
        "Wiltshire"
      ],
      postalCode: "BA10 5BW",
      country: "UK"
    }
  }
};
