/**
 * Converts a timestamp into a human-readable date string
 * @param {number} timestamp - the timestamp to convert
 * @returns {string} - the formatted date string
 */

function parseTimeStamp(timestamp) {
  const currentDate = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const localeDateString = currentDate.toLocaleString("fr-FR", options);
  return localeDateString;
}

export { parseTimeStamp };
