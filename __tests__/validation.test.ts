import { validateInput } from '../src/validation';

describe('Input Validation Tests', () => {
    test('should validate minNumber and maxNumber correctly', () => {
        expect(validateInput(1, 10, ['palindrome', 'prime'])).toBe(true);
        expect(validateInput(0, 10, ['palindrome', 'prime'])).toBe(false); 
        expect(validateInput(11, 10, ['palindrome', 'prime'])).toBe(false); 
    });

    test('should validate feature array correctly', () => {
        expect(validateInput(1, 10, ['palindrome', 'prime'])).toBe(true);
        expect(validateInput(1, 10, ['invalid', 'prime'])).toBe(false);
        expect(validateInput(1, 10, [])).toBe(false); 
    });
    
    test('should return false for non-integer minNumber or maxNumber', () => {
        expect(validateInput(1.5, 10, ['palindrome'])).toBe(false);
        expect(validateInput(1, 10.5, ['prime'])).toBe(false);
    });

    test('should return false for negative minNumber or maxNumber', () => {
        expect(validateInput(-1, 10, ['palindrome'])).toBe(false);
        expect(validateInput(1, -10, ['prime'])).toBe(false);
    });
});
