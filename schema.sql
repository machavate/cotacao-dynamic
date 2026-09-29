-- Cole este código no SQL Editor da Supabase e clique em "Run".

create table clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  notas text,
  created_at timestamptz default now()
);

create table quotes (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete set null,
  items jsonb not null default '[]',
  paid numeric default 0,
  status text default 'rascunho',
  date text,
  created_at timestamptz default now()
);

alter table clients enable row level security;
alter table quotes enable row level security;

-- Só quem tiver sessão iniciada (você) pode ler e escrever.
create policy "clientes: só utilizadores autenticados" on clients
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "cotacoes: só utilizadores autenticados" on quotes
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
