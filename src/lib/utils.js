// Util untuk task 6
export const isPalindrome = (str) => {
  const lower = str.toLowerCase();
  const reversed = lower.split('').reverse().join('');
  return lower === reversed;
};

// Util untuk task 7
export const isEven = (num) => num % 2 === 0;
