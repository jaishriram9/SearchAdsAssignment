export const isSubsequence = (str, arr) => {
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) != -1) return true;
  }
  return false;
};
