const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  const newDriver = { ...object};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromDriverByKey(object, key) {
  const newO = Object.assign({}, object);
  delete newO.name;
  return newO;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object.name;
  return object;
}
