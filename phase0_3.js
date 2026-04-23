
async function fetchJson(url) {
  try {
    const res = await fetch(url);

    // Handle bad HTTP status (like 404, 500)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Parse JSON
    const data = await res.json();
    console.log("Fetched data:", data);
    return data;

  } catch (error) {
    // Handle network errors or parsing errors
    console.error("Fetch failed:", error.message);
    throw error; // rethrow so caller can handle it too
  }
}

fetchJson("https://jsonplaceholder.typicode.com/posts/1");