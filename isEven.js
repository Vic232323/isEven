const isEven = (num) => {
  const parsed = parseFloat(num, 10);
  if (isNaN(parsed)) return `${num} is not a number`;
  return parsed % 2 === 0;
};
