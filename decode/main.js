var encoded = null;
var decoded = null;

window.onload = function() {
  encoded = document.getElementById("encoded");
  decoded = document.getElementById("decoded");
};

function encode() {
  if (encoded == document.activeElement)
    return;

  console.log("encode")
  var array = decoded.value.split("\n");
  var result = [];
  for (var i = 0, len = array.length; i < len; i++) {
    result.push(encodeURI(array[i]));
  };
  encoded.value = result.join("\n");
}

function decode() {
  if (decoded == document.activeElement)
    return;

  console.log("decode")
  var array = encoded.value.split("\n");
  var result = [];
  for (var i = 0, len = array.length; i < len; i++) {
    result.push(decodeURI(array[i]));
  };
  decoded.value = result.join("\n");
}
