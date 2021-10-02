export const getTwoDigitStr = num => {
  const str = String(num);
  return str.length === 1 ? `${"0" + str}` : str; 
};

export const getDateStr = () => {
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return `${getTwoDigitStr(d)}.${getTwoDigitStr(m)}.${y}.`;
};