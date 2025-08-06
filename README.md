# Obscuraworks API Examples

This repository contains **example usage code** for the public REST API provided by [ObscuraWorks](https://docs.obscuraworks.com). The API includes a wide variety of powerful endpoints such as:

- 📥  **Downloader** (Instagram, YouTube, TikTok, etc.)
- 🔍  **Search** (Anime, Lyrics, Movies, etc.)
- 🧰  **Tools** (QR Generator, URL Shortener, etc.)
- 🎮  **Fun** (Meme Generator, Text Games, etc.)
- 🤖  **AI** (Image Enhancer, Chatbots, AI Tools, etc.)

> This project is intended to help developers quickly get started with integrating the ObscuraWorks API into their applications.



## 🔧 Getting Started

1. **Sign up** and claim your **free 100 request limit**:

   https://docs.obscuraworks.com/signup

2. **Whitelist your IP address** via the dashboard:

   https://docs.obscuraworks.com/dashboard/profile

3. Replace `YOUR_API_KEY` in the code with your actual API key.

---

## 📦 Example: Instagram Reel Downloader

```js
/**
 * Downloads Instagram content using the ObscuraWorks API.
 *
 * Make sure your API key is active and your IP address is whitelisted.
 */

const url = `https://api.obscuraworks.com/api/downloader/instagram?url=https://www.instagram.com/reel/DKeOUllzvC1/?igsh=Y2MwOWI2NGFocXc3`;

const headers = {
  "Authorization": "Bearer YOUR_API_KEY" // Ganti dengan API key dari docs.obscuraworks.com
};

(async function fetchInstagramReel() {
  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Request failed:", error.message || error);
  }
})();

```


# 📚 Documentation
Complete API docs with request parameters, responses, and endpoint guides:
👉 docs.obscuraworks.com


# 🤝 Contribution
Feel free to fork this repo, add more usage examples, and contribute back to help others in the community!


# 🔗 Official Repository
GitHub: [github.com/NyxObscura/Obscuraworks-APIs](https://github.com/NyxObscura/Obscuraworks-APIs) 


# 💬 Support
For help, contact us via:

Telegram: [@NyxObscura](https://t.me/@nyxobscura)

WhatsApp: [Wa Me](https://wa.me/6285183343636)

Email: [support@obscuraworks.com](mailto:support@obscuraworks.com)

