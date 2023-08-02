module.exports = {
    type: 'FundsConfirmationConsentDetails',
    decisionApiUri: "/rcs/api/consent/decision/",
    username: "psu4test",
    userId: "fc99f546-8507-428b-88f2-1d78860a0881",
    logo: 'https://www.getpostman.com/img/logos/postman/header-treatment.svg',
    clientId: "225ca346-85b0-43cf-91e5-e59c67619c65",
    clientName: "TPP Test application",
    serviceProviderName: "Forgerock Bank simulation config",
    debtorAccount:
        {
            schemeName: "UK.OBIE.SortCodeAccountNumber",
            identification: "08080021325698",
            name: "ACME Inc",
            secondaryIdentification: "0002"
        },
    expirationDateTime: '2019-05-02T01:00:00+01:00',
    intentType: 'FUNDS_CONFIRMATION_CONSENT'
};
