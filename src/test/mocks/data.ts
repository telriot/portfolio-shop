import {UserAddress} from '../../models/user'

//USER DATA
export const email = 'test@test.com';
export const password = 'password';
export const address : UserAddress = {
    addressLine1:"testAddress line 1",
    addressLine2:"testAddress line 2",
    city:"testCity",
    country:"testCountry",
    zip:"90102",
}
export const firstName = 'testUserFirst'
export const lastName = 'testUserLast'
export const userData = {email, password, address, firstName, lastName}