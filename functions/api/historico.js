export async function onRequestGet(context) {
    const { env } = context;
    try {
        const { results } = await env.DB.prepare("SELECT * FROM historico ORDER BY id DESC").all();
        return new Response(JSON.stringify(results), { headers: { "Content-Type": "application/json" } });
    } catch (err) {
        return new Response(err.message, { status: 500 });
    }
}