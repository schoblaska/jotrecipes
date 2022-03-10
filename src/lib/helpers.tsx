export const padding = (n: number) => {
  // alternate letters and numbers to reduce likelihood of generating actual
  // words in the padding
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  var result = "";

  for (var i = 0; i < n; ++i)
    if (i % 2 == 0) {
      result += letters[Math.floor(Math.random() * letters.length)];
    } else {
      result += numbers[Math.floor(Math.random() * numbers.length)];
    }

  return result;
};

export const sluggify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s/g, "-")
    .substring(0, 32);
};
