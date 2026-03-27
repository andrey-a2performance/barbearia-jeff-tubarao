CREATE TABLE IF NOT EXISTS configuracao_agenda (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_slug TEXT NOT NULL,
    dia_semana INTEGER NOT NULL,
    horario TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS agendamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_slug TEXT NOT NULL,
    data TEXT NOT NULL,
    horario TEXT NOT NULL,
    profissional TEXT NOT NULL,
    cliente TEXT,
    telefone TEXT,
    servico TEXT,
    valor REAL,
    status TEXT DEFAULT 'pendente',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS feedbacks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_slug TEXT NOT NULL,
    nome TEXT NOT NULL,
    nota INTEGER NOT NULL,
    mensagem TEXT,
    aprovado INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS historico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_slug TEXT NOT NULL,
    nome TEXT NOT NULL,
    whatsapp TEXT,
    servico TEXT,
    profissional TEXT,
    data TEXT,
    horario TEXT,
    valor REAL,
    cortesia TEXT,
    estilo_sugerido TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);