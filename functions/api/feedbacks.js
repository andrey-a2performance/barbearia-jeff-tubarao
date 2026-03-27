export async function onRequestGet(context) {
  const { env } = context;
  try {
    // Busca todos os feedbacks para o admin
    const { results } = await env.DB.prepare("SELECT * FROM feedbacks ORDER BY id DESC").all();
    return Response.json({ success: true, feedbacks: results });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const body = await request.json();
    const { client_slug, nome, nota, mensagem } = body; // Adicionado client_slug
    if (!nome || !nota || !mensagem) return Response.json({ success: false, error: "Dados incompletos" }, { status: 400 });

    await env.DB.prepare("INSERT INTO feedbacks (client_slug, nome, nota, mensagem) VALUES (?, ?, ?, ?)")
      .bind(client_slug || 'jeff-braga', nome, nota, mensagem).run();

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

// NOVO: Função para deletar avaliação
export async function onRequestDelete(context) {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) return Response.json({ success: false, error: "ID não informado" }, { status: 400 });

    await env.DB.prepare("DELETE FROM feedbacks WHERE id = ?").bind(id).run();
    return Response.json({ success: true, message: "Feedback removido!" });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}