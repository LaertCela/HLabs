export const validateInput = (minNumber: number, maxNumber: number, feature: string[]): boolean => {
    // Check if minNumber is a positive integer greater than 0
    if (typeof minNumber !== 'number' || minNumber <= 0 || !Number.isInteger(minNumber)) {
        return false;
    }

    // Check if maxNumber is a positive integer and greater than minNumber
    if (typeof maxNumber !== 'number' || maxNumber <= minNumber || !Number.isInteger(maxNumber)) {
        return false;
    }

    // Check if feature is a non-empty array
    if (!Array.isArray(feature) || feature.length === 0) {
        return false;
    }

    // Check if every element in feature is either "palindrome" or "prime"
    const validFeatures = ['palindrome', 'prime'];
    if (!feature.every(f => validFeatures.includes(f))) {
        return false;
    }

    return true;
};
