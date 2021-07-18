import stdErrorHandler from "./stdErrorHandler";

test('Returns an object with a standard error message and success: false', ()=>{
    const returnValue = stdErrorHandler(new Error('Something went wrong with our server'))
    expect(returnValue).toEqual({error: 'Something went wrong with our server', success: false })
})