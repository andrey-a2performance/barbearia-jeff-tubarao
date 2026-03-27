export async function onRequestPost(context) {
    const { env, request } = context;
    try {
        const data = await request.json();
        
        // Preparamos o comando para salvar nas colunas certas, incluindo o novo estilo_sugerido
        await env.DB.prepare(
            "INSERT INTO agendamentos (client_slug, nome, whatsapp, servico, profissional, data, horario, valor, cortesia, estilo_sugerido) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        ).bind(
            data.client_slug, 
            data.nome, 
            data.whatsapp, 
            data.servico, 
            data.profissional, 
            data.data, 
            data.horario, 
            data.valor, 
            data.cortesia || 'Nenhuma',
            data.estilo_sugerido || 'Não informado'
        ).run();
        
        return new Response(JSON.stringify({ success: true }), { 
            headers: { "Content-Type": "application/json" } 
        });
    } catch (err) { 
        return new Response(err.message, { status: 500 }); 
    }
}

export async function onRequestGet(context) {
    const { env } = context;
    const { results } = await env.DB.prepare("SELECT * FROM agendamentos ORDER BY id DESC").all();
    return new Response(JSON.stringify(results), { 
        headers: { "Content-Type": "application/json" } 
    });
}

export async function onRequestDelete(context) {
    const { env, request } = context;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return new Response("ID não fornecido", { status: 400 });
    }

    try {
        await env.DB.prepare("DELETE FROM agendamentos WHERE id = ?").bind(id).run();
        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(err.message, { status: 500 });
    }
}