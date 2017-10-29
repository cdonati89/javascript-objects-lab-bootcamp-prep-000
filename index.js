var recipes = {

}
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
  }
function destructivelyUpdateObjectWithKeyAndValue(onj, key, value) {
  obj[key] = value;
  return obj;
}