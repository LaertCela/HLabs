// Utility function to check if a number is a palindrome
export const isPalindrome = (num: number): boolean => {
    const str = num.toString();
    return str === str.split('').reverse().join('');
};