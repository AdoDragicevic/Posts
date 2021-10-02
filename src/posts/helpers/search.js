export const findBy = (data, searchTerm, key) => {
  if (searchTerm === "") return data;
  const found = [];
  console.log(searchTerm);
  const query = searchTerm.toLowerCase();
  data.forEach(el => {
    const str = el[key].toLowerCase();
    if (str.includes(query)) found.push(el);
  });
  return found;
};