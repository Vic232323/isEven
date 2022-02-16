const isEven = (num) => {
  const parsed = parseInt(num, 10);
  if (isNaN(parsed)) return `${num} is not a number`;
  return parsed % 2 === 0;
};

console.log(isEven(""));
