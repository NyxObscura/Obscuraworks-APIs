/**
 * Downloads soundcloud content using the ObscuraWorks API.
 *
 * This script fetches media data from a specified soundcloud Reel URL
 * through the ObscuraWorks downloader endpoint. Make sure your API key
 * is valid and your IP address has been whitelisted in the dashboard.
 *
 * @note You must whitelist your current IP address in the dashboard at:
 *       https://docs.obscuraworks.com/dashboard/profile
 *       Otherwise, the request may fail due to unauthorized access.
 *
 * @see API documentation: https://docs.obscuraworks.com
 *
 * @constant {string} url - The complete API URL including the target soundcloud Reel.
 * @constant {Object} headers - HTTP request headers containing your ObscuraWorks API key.
 *
 * @function fetchsoundcloudReel
 * @async
 * @returns {Promise<Object|void>} The parsed JSON response from the API,
 *                                 or logs an error if the request fails.
 */
const fetch = require("node-fetch");

const url = "https://api.obscuraworks.com/api/downloader/soundcloud?url=https://m.soundcloud.com/teguh-hariyadi-652597010/anji-dia";

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
