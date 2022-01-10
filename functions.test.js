// const { TestWatcher } = require('jest')
const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

//example =     test('first name should be Patten', () => {
    //          expect(testData.firstName).toBe('Patten')
    //          })

// describe('returnTwo', () =>{
//     test('this test should return the number two', () => {
//         expect(returnTwo).toEqual(2)
//     })
// })


// test('this test should return 2', () => {
//     let result = returnTwo()
//     expect(result).toEqual(2)
// })

// test('this test should return proper greeting', () => {
//     let testGreeting = greeting('Shelby')
//     expect(testGreeting).toEqual('Hello, Shelby')
// })

// test('this test should add two numbers', () => {
//     let testNums = add(2,2)
//     expect(testNums).toEqual(4)
// })

describe (`Math functions tests`, () => {

    test('This test should add two numbers', () => {
        let testAdd = add(2,2)
        expect(testAdd).toEqual(4)
    }),

    test(`This test should multiply two numbers`, () => {
        let testMultiply = multiply(2,3)
        expect(testMultiply).toEqual(6)
    }),

    test(`This test should divide two numbers`, () => {
        let testDivide = divide(10,5)
        expect(testDivide).toEqual(2)
    }),

    test('This test should subtract two numbers', () => {
        let testSubtract = subtract(100,50)
        expect(testSubtract).toEqual(50)
    })
})