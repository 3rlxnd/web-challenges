import { add, divide, multiply, subtract } from './index.js'

// Add Function

test('Check if returns 5', () => {
    const result = add(2, 3)
    expect(result).toBe(5)
})

test('Return a negative value', () => {
    const result = add(2, -3)
    expect(result).toBeLessThan(0)
})

test('Return a close to 0.3 value', () => {
    const result = add(0.1, 0.2)
    expect(result).toBeCloseTo(0.3)
})

// Substract Function

test('Check if returns 10', () => {
    const result = subtract(15, 5)
    expect(result).toBe(10)
})

test('Return a negative value', () => {
    const result = subtract(2, 5)
    expect(result).toBeLessThan(0)
})

// Multiply Function

test('Check if returns 8', () => {
    const result = multiply(2, 4)
    expect(result).toBe(8)
})

test('Return a negative value', () => {
    const result = multiply(2, -3)
    expect(result).toBeLessThan(0)
})

test('Return a negative value', () => {
    const result = multiply(2, -4)
    expect(result).toBeLessThan(0)
})

test('Return a positive value', () => {
    const result = multiply(-2, -5)
    expect(result).toBeGreaterThanOrEqual(0)
})

// Divide Function

test('Check if returns 3', () => {
    const result = divide(9, 3)
    expect(result).toBe(3)
})

test('Returns a string', () => {
    const result = divide(2, 0)
    expect(result).toBe("You should not do this!")
})