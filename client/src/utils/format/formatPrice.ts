
/**
 * 
 * @param price A price integer
 * @param currency Defaults to USD, a currency to format the price into
 * @returns A formatted price string
 */
export const formatPrice = (price:number, currency='USD') : string => {
    switch(currency){
        case 'USD':
            return `$${(price/100).toFixed(2)}`
        default:
            return `${(price/100).toFixed(2)}`
    }
}