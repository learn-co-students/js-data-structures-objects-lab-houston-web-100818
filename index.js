// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  let copy = Object.assign({}, obj);
  copy[key] = value;
  return copy;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  let copy = Object.assign({}, obj);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
