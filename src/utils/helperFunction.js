export function toNaira(amount) {
  // Check if amount is a valid number
  if (isNaN(amount)) {
    throw new Error("Invalid amount");
  }

  // Format the number to Naira currency
  return `₦${Number(amount).toLocaleString("en-NG")}`;
}

export const capitalizeFirstLetter = (str) => {
  if (!str) return ""; // Handle empty or undefined strings
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export function timeAgo(dateString) {
  const now = new Date();
  const commentDate = new Date(dateString);

  // Calculate the difference in seconds
  const diffInSeconds = Math.floor((now - commentDate) / 1000);

  // Time intervals in seconds
  const intervals = {
    year: 31536000, // 60 * 60 * 24 * 365
    month: 2592000, // 60 * 60 * 24 * 30
    week: 604800, // 60 * 60 * 24 * 7
    day: 86400, // 60 * 60 * 24
    hour: 3600, // 60 * 60
    minute: 60,
    second: 1,
  };

  // Determine the appropriate interval
  for (const key in intervals) {
    const intervalValue = Math.floor(diffInSeconds / intervals[key]);
    if (intervalValue >= 1) {
      return `${intervalValue} ${key}${intervalValue > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}
