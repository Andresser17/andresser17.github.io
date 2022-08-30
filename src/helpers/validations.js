// only accept letters
const onlyLetters = /^[a-zA-Z\s]*$/g;
// email
const email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// password, 10 char minimum, a special char, a Uppercase, and a number
const password =
  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

// validate http urls
const url = new RegExp(
  "^(https?:\\/\\/)?" + // validate protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // validate fragment locator

const validate = { onlyLetters, email, password, url };

export default validate;
