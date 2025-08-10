export const uppercase = str =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

export const getBreedName = url => {
  if (!url) return;
  const name = url.slice(30, url.indexOf('/', 30));
  const breedName = name.includes('-') ? name.replace('-', ' ') : name;
  return uppercase(breedName);
};
