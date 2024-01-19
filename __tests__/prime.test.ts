import { isPrime } from '../src/isPrime';


describe('Prime Number Tests', () => {
    test('should correctly identify prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(17)).toBe(true);
    });

    test('should correctly identify non-prime numbers', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(15)).toBe(false);
    });

    test('should handle edge cases', () => {
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(-10)).toBe(false);
    });
});
