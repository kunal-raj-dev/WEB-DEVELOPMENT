// concatenate all string in a aaray
function concatination(arr, i = 0) {
  if (i >= arr.length) {
    return "";
  }

  return arr[i] + concatination(arr, i + 1);
}

console.log(concatination(["java", "script"]));
