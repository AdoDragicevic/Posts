export const findBy = (data, searchTerm, key) => {
  if (searchTerm === "") return data;
  const found = [];
  const query = searchTerm.toLowerCase();
  data.forEach(el => {
    const str = el[key].toLowerCase();
    if (str.includes(query)) found.push(el);
  });
  return found;
};