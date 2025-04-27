export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }

  const filteredValues = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  }

  return filteredValues.join('-');
}
