module.exports = {
  "type": "DomesticVrpPaymentConsentDetails",
  "consentId": "DVRP_9dd1fd32-0152-4250-a91f-462520d69b9",
  "decisionApiUri": "/rcs/api/consent/decision",
  "username": "psu4test",
  "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
  "clientId": "c4bc928e-f316-4191-8616-a89fbc3677c8",
  "clientName": "SAPIG automating-testing",
  "serviceProviderName": "Test Bank",
  "accounts": [
    {
      "id": "01233243245676",
      "userId": "4737f9f9-fa0a-4159-bc61-7da31542e624",
      "account": {
        "accountId": "01233243245676",
        "status": "Enabled",
        "statusUpdateDateTime": "2023-11-16T06:00:09.173Z",
        "currency": "GBP",
        "accountType": "Personal",
        "accountSubType": "CurrentAccount",
        "nickname": "UK Bills",
        "openingDate": "2023-11-15T06:00:09.173Z",
        "maturityDate": "2023-11-17T06:00:09.174Z",
        "accounts": [
          {
            "schemeName": "UK.OBIE.SortCodeAccountNumber",
            "identification": "01233243245676",
            "name": "psu4test",
            "secondaryIdentification": "86898014"
          }
        ]
      },
      "latestStatementId": "6da2ce77-e518-410f-9bfb-49ae8c093973",
      "created": "2023-11-16T06:00:09.157Z",
      "updated": "2023-11-16T06:00:12.623Z",
      "balances": [
        {
          "accountId": "01233243245676",
          "creditDebitIndicator": "Debit",
          "type": "InterimAvailable",
          "dateTime": "2023-11-16T06:00:09.897Z",
          "amount": {
            "amount": "2605.96",
            "currency": "GBP"
          }
        }
      ]
    }
  ],
  "initiation": {
    "type": "FRWriteDomesticVRPDataInitiation",
    "debtorAccount": {
      "schemeName": "UK.OBIE.SortCodeAccountNumber",
      "identification": "01233243245676",
      "name": "psu4test",
      "accountId": "01233243245676"
    },
    "creditorAccount": {
      "schemeName": "UK.OBIE.SortCodeAccountNumber",
      "identification": "08080021325698",
      "name": "Mr Tim Burgess",
      "secondaryIdentification": "11"
    },
    "creditorPostalAddress": {
      "addressType": "RESIDENTIAL",
      "streetName": "The Mall",
      "buildingNumber": "1",
      "postCode": "WC1 1AB",
      "townName": "London",
      "country": "UK"
    },
    "remittanceInformation": {
      "unstructured": "Internal ops code 5120103",
      "reference": "FRESCO-037"
    }
  },
  "controlParameters": {
    "vrpType": [
      "UK.OBIE.VRPType.Sweeping"
    ],
    "psuAuthenticationMethods": [
      "UK.OBIE.SCANotRequired"
    ],
    "validFromDateTime": "2022-11-09T08:17:08.000Z",
    "validToDateTime": "2022-11-19T08:17:08.000Z",
    "maximumIndividualAmount": {
      "amount": "10.01",
      "currency": "GBP"
    },
    "periodicLimits": [
      {
        "amount": "10.01",
        "currency": "GBP",
        "periodType": "Month",
        "periodAlignment": "Calendar"
      }
    ],
    "supplementaryData": {
      "data": "{}"
    },
    "psUInteractionTypes": [
      "InSession"
    ]
  },
  "intentType": "DOMESTIC_VRP_PAYMENT_CONSENT"
}
