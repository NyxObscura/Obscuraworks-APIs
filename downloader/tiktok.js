/**
 * Downloads TikTok content using the ObscuraWorks API.
 *
 * This script retrieves video data from a specified TikTok URL
 * through the ObscuraWorks downloader endpoint. Ensure that your API key
 * is active and that your current IP address is whitelisted in the dashboard.
 *
 * @note You must whitelist your current IP address in the dashboard at:
 *       https://docs.obscuraworks.com/dashboard/profile
 *       Otherwise, the request may fail due to unauthorized access.
 *
 * @see API documentation: https://docs.obscuraworks.com
 *
 * @constant {string} url - The full API URL including the target TikTok video.
 * @constant {Object} headers - HTTP request headers including your API key.
 *
 * @function fetchTikTokVideo
 * @async
 * @returns {Promise<Object|void>} The parsed JSON response from the API,
 *                                 or logs an error if the request fails.
 *
 * @requires Node.js v18+ for native fetch support
 */
const url = `https://api.obscuraworks.com/api/downloader/tiktok?url=https://vt.tiktok.com/ZSk6WQern/`;

const headers = {
  "Authorization": "Bearer YOUR_API_KEY" // Ganti dengan API key dari docs.obscuraworks.com
};
(async function fetchTikTokVideo() {
  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Request failed:", error.message || error);
  }
})();
