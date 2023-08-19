export const ConvertPrice = (price) => {
  const rupiah = price * 15000;
  const IDN = rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDN",
  });
  const arr = IDN.split("N");
  return arr[1];
};
