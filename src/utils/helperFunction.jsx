export function toNaira(amount) {
  // Check if amount is a valid number
  if (isNaN(amount)) {
    throw new Error("Invalid amount");
  }

  // Format the number to Naira currency
  return `₦${Number(amount).toLocaleString("en-NG")}`;
}
