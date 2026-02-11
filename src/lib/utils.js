// Util untuk task 6
export const isPalindrome = (str) => {
  const lower = str.toLowerCase();
  const reversed = lower.split('').reverse().join('');
  return lower === reversed;
};

// Util untuk task 7
export const isEven = (num) => num % 2 === 0;

// Util untuk task 8
export const isAnagram = (str1, str2) => {
  const formatStr = (str) =>
    str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  return formatStr(str1) === formatStr(str2);
};
