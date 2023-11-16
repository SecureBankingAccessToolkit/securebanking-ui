import {Charges, Rate} from "rcs/src/app/types/api";
import {OBActiveOrHistoricCurrencyAndAmount} from "rcs/src/app/types/ob";

/*
International payments util functions
 */
/**
 * Checks if the amount needs to be converted to another the currency provided in the exchange rate data
 * @param rate
 * @param currencyOfTransfer
 * @param instructedAmount
 */
export function isExchangeCurrency(rate: Rate, currencyOfTransfer: string, instructedAmount: OBActiveOrHistoricCurrencyAndAmount): boolean {
    if((instructedAmount.currency == currencyOfTransfer) && (currencyOfTransfer != rate.unitCurrency)) {
        return true
    }
    return false
}

/**
 * Calculate the amount conversion to the currency provided in the exchange rate data
 * @param rate
 * @param currencyOfTransfer
 * @param instructedAmount
 */
export function calculateAmountConversion(rate: Rate, currencyOfTransfer: string, instructedAmount: OBActiveOrHistoricCurrencyAndAmount): OBActiveOrHistoricCurrencyAndAmount {
    console.log(`instructed currency ${rate.unitCurrency}, currency of transfer ${currencyOfTransfer}`)
    if(isExchangeCurrency(rate, currencyOfTransfer, instructedAmount)) {
        return {
            amount: (Number(instructedAmount.amount) * Number(rate.exchangeRate)),
            currency: rate.unitCurrency
        }
    }
}

/**
 * Calculate the total amount to be paid after apply the payment charges
 * @param charges
 * @param amountConverted
 */
export function calculateTotalAmount(charges: Charges, amountConverted: OBActiveOrHistoricCurrencyAndAmount): OBActiveOrHistoricCurrencyAndAmount {
    if(amountConverted) {
        return {
            amount: (Number(amountConverted.amount) + Number(charges.amount)),
            currency: amountConverted.currency
        }
    }
}