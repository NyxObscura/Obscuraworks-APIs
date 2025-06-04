/**
 * Downloads YouTube video content using the ObscuraWorks API.
 *
 * This script retrieves MP4 download links from a specified YouTube URL
 * through the ObscuraWorks downloader endpoint. Make sure your API key
 * is valid and your current IP address is whitelisted in the dashboard.
 *
 * @note You must whitelist your IP at:
 *       https://docs.obscuraworks.com/dashboard/profile
 *       Otherwise, access may be denied.
 *
 * @see API documentation: https://docs.obscuraworks.com
 *
 * @constant {string} url - The full API URL including the YouTube video link.
 * @constant {Object} headers - HTTP request headers with the API key.
 *
 * @function fetchYouTubeVideo
 * @async
 * @returns {Promise<Object|void>} The parsed JSON response from the API,
 *                                 or logs an error if the request fails.
 *
 * @requires Node.js v18+ for native fetch support
 */
const url = `https://api.obscuraworks.com/api/downloader/ytmp4?url=https://youtu.be/D-Vr8QIPffo?si=CXiFDeSxc7LY_8jY`;

const headers = {
  "x-api-key": "YOUR_API_KEY" // Replace with your actual API key
};

(async function fetchYouTubeVideo() {
  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Request failed:", error.message || error);
  }
})();
