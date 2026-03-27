export async function onRequestPost(context) {
    const { env, request } = context;
    try {
        const data = await request.json();
        const id = data.id; 

        // 1. Move para o histórico, incluindo a nova coluna estilo_sugerido
        await env.DB.prepare(`
            INSERT INTO historico (
                client_slug, nome, whatsapp, servico, profissional, 
                data, horario, valor, cortesia, estilo_sugerido
            ) 
            SELECT 
                client_slug, nome, whatsapp, servico, profissional, 
                data, horario, valor, cortesia, estilo_sugerido 
            FROM agendamentos WHERE id = ?
        `).bind(id).run();
        
        // 2. Remove da lista de agendamentos pendentes
        await env.DB.prepare("DELETE FROM agendamentos WHERE id = ?").bind(id).run();
        
        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) { 
        return new Response(err.message, { status: 500 }); 
    }
}