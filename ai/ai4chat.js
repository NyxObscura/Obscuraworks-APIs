/**
 * Sends a prompt to the ObscuraWorks AI Chat API and retrieves a response.
 *
 * This script uses the ObscuraWorks AI endpoint to simulate a conversation
 * or query response using a provided prompt. Ensure your API key is valid
 * and your current IP address is whitelisted.
 *
 * @note You must whitelist your IP address at:
 *       https://docs.obscuraworks.com/dashboard/profile
 *       Unauthorized requests will be rejected.
 *
 * @see API documentation: https://docs.obscuraworks.com
 *
 * @constant {string} url - The full API URL including the chat prompt query.
 * @constant {Object} headers - HTTP request headers including the API key.
 *
 * @function fetchAIChatResponse
 * @async
 * @returns {Promise<Object|void>} The parsed JSON response from the AI API,
 *                                 or logs an error if the request fails.
 *
 * @requires Node.js v18+ for native fetch support
 */
const url = `https://api.obscuraworks.com/api/ai/ai4chat?prompt=halo siapa kamu introduce yourself`;

const headers = {
  "Authorization": "Bearer YOUR_API_KEY" // Ganti dengan API key dari docs.obscuraworks.com
};

(async function fetchAIChatResponse() {
  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Request failed:", error.message || error);
  }
})();
