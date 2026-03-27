export async function onRequestGet(context) {
    const { env, request } = context;
    const { searchParams } = new URL(request.url);
    const client_slug = searchParams.get('client_slug');
    if (!client_slug) return new Response("Slug faltando", { status: 400 });

    const { results } = await env.DB.prepare(
        "SELECT dia_semana, horario FROM configuracao_agenda WHERE client_slug = ?"
    ).bind(client_slug).all();
    return new Response(JSON.stringify(results), { headers: { "Content-Type": "application/json" } });
}

export async function onRequestPost(context) {
    const { env, request } = context;
    try {
        const { client_slug, slots } = await request.json();
        await env.DB.prepare("DELETE FROM configuracao_agenda WHERE client_slug = ?").bind(client_slug).run();
        if (slots.length > 0) {
            const statements = slots.map(slot => 
                env.DB.prepare("INSERT INTO configuracao_agenda (client_slug, dia_semana, horario) VALUES (?, ?, ?)")
                .bind(client_slug, slot.dia_semana, slot.horario)
            );
            await env.DB.batch(statements);
        }
        return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    } catch (err) { return new Response(err.message, { status: 500 }); }
}