export default (value) => {
  const currency = '$';
  let string = `${value}`;

  const arr = string.split('.');

  if (arr[0].length >= 4) {
    string = `${currency} ${arr[0].slice(0, -3)} ${arr[0].slice(-3)}`;

    if (arr[1]) {
      string += `.${arr[1]}`;
    }
  } else {
    string = `${currency} ${string}`;
  }

  return string;
}
