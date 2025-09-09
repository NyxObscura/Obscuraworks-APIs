/**
 * Downloads x content using the ObscuraWorks API.
 *
 * This script fetches media data from a specified x Reel URL
 * through the ObscuraWorks downloader endpoint. Make sure your API key
 * is valid and your IP address has been whitelisted in the dashboard.
 *
 * @note You must whitelist your current IP address in the dashboard at:
 *       https://docs.obscuraworks.com/dashboard/profile
 *       Otherwise, the request may fail due to unauthorized access.
 *
 * @see API documentation: https://docs.obscuraworks.com
 *
 * @constant {string} url - The complete API URL including the target x Reel.
 * @constant {Object} headers - HTTP request headers containing your ObscuraWorks API key.
 *
 * @function fetchxReel
 * @async
 * @returns {Promise<Object|void>} The parsed JSON response from the API,
 *                                 or logs an error if the request fails.
 */
const fetch = require("node-fetch");

const url = "https://api.obscuraworks.com/api/downloader/x?url=https://twitter.com/9GAG/status/1661175429859012608/";

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
