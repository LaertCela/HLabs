import { isPalindrome } from '../src/isPalindrome';

describe('Palindrome Tests', () => {
    test('should correctly identify palindromes', () => {
        expect(isPalindrome(121)).toBe(true);
        expect(isPalindrome(12321)).toBe(true);
    });

    test('should correctly identify non-palindromes', () => {
        expect(isPalindrome(123)).toBe(false);
        expect(isPalindrome(1232)).toBe(false);
    });

    test('should treat single digit numbers as palindromes', () => {
        for (let i = 0; i <= 9; i++) {
            expect(isPalindrome(i)).toBe(true);
        }
    });
});
