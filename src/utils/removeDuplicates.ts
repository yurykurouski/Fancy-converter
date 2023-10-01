export const removeDuplicates = <T>(arr1: T[], arr2: T[]) => {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
};
