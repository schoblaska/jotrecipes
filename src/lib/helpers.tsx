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

// TODO
export const slugify = (str: string) => {
  return "slug";
};
