export default function hasValuesFromArray(Set, array) {
  return array.every((element) => Set.has(element));
}
