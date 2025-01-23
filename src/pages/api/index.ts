export async function GET() {
  try {
    // Fetch data from the external API
    const response = await fetch("https://dummyjson.com/products");

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the fetched data as the API response
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors (e.g., network issues or invalid responses)
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from the API" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
