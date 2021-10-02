export const findBy = (data, searchTerm, key) => {
  if (searchTerm === "") return data;
  const found = [];
  const query = searchTerm.toLowercase();
  data.forEach(el => {
    const str = el[key].toLowercase();
    if (str.includes(query)) found.push(el);
  });
  return found;
};