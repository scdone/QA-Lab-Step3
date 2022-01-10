// const { TestWatcher } = require('jest')
const {
    returnTwo,
    greeting,
    add
} = require('./functions')

//example =     test('first name should be Patten', () => {
    //          expect(testData.firstName).toBe('Patten')
    //          })

// describe('returnTwo', () =>{
//     test('this test should return the number two', () => {
//         expect(returnTwo).toEqual(2)
//     })
// })


test('this test should return 2', () => {
    let result = returnTwo()
    expect(result).toEqual(2)
})

test('this test should return proper greeting', () => {
    let testGreeting = greeting('Shelby')
    expect(testGreeting).toEqual('Hello, Shelby')
})

test('this test should add two numbers', () => {
    let testNums = add(2,2)
    expect(testNums).toEqual(4)
})