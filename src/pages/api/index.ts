export async function GET() {
  return new Response(JSON.stringify({ message: "(Hello world api)" }), {
    headers: { "Content-Type": "application/json" },
  });
}
