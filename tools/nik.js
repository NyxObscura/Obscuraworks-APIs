√ const fetch = require("node-fetch");

const url = "https://api.obscuraworks.com/api/v2/tools/nik?nik=3517072109020003";

(async () => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer memek",
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
