const convertMMDDYYYY = (val) => {
  if (typeof val == "number") {
    return new Date(val).toLocaleDateString("en-US");
  }
  return `${val.toLocaleDateString("en-US")}`;
};

export default convertMMDDYYYY;
