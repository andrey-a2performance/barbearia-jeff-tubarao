export async function onRequestPost(context) {
    const { env, params } = context;
    const id = params.id;
    try {
        // 1. Copia o agendamento para o histórico (INCLUINDO O ESTILO)
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
        
        // 2. Apaga da lista de agendamentos pendentes
        await env.DB.prepare("DELETE FROM agendamentos WHERE id = ?").bind(id).run();
        
        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) { 
        return new Response(err.message, { status: 500 }); 
    }
}