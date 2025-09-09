/**
 * Downloads videy content using the ObscuraWorks API.
 *
 * This script fetches media data from a specified videy Reel URL
 * through the ObscuraWorks downloader endpoint. Make sure your API key
 * is valid and your IP address has been whitelisted in the dashboard.
 *
 * @note You must whitelist your current IP address in the dashboard at:
 *       https://docs.obscuraworks.com/dashboard/profile
 *       Otherwise, the request may fail due to unauthorized access.
 *
 * @see API documentation: https://docs.obscuraworks.com
 *
 * @constant {string} url - The complete API URL including the target videy Reel.
 * @constant {Object} headers - HTTP request headers containing your ObscuraWorks API key.
 *
 * @function fetchvideyReel
 * @async
 * @returns {Promise<Object|void>} The parsed JSON response from the API,
 *                                 or logs an error if the request fails.
 */
const fetch = require("node-fetch");

const url = "https://api.obscuraworks.com/api/downloader/videy?url=https://videy.co/v/?id=bn8O8snt";

(async () => {
  try {
    const res = await fetch(url, {
      headers: {
        "Authorization": "Bearer YOUR_APIKEY",
        "Accept": "application/json"
      }
    });

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Request failed:", err.message);
  }
})();
