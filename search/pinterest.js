/**
 * @note You must whitelist your current IP address in the dashboard at:
 *       https://docs.obscuraworks.com/dashboard/profile
 *       Otherwise, the request may fail due to unauthorized access.
 *
 * @see API documentation: https://docs.obscuraworks.com
 *
 * @async
 * @returns {Promise<Object|void>} The parsed JSON response from the API,
 *                                 or logs an error if the request fails.
 */
const fetch = require("node-fetch");

const url = "https://api.obscuraworks.com/api/v2/search/pinterest?q=sky";

(async () => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer YOUR_APIKEY",
        "Accept": "application/json"
      },
      timeout: 20000
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Request failed:", err.message);
  }
})();
