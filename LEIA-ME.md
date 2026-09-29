# Painel de Cotações — Dynamic Services

Ficheiros: `index.html` (login), `app.html` (painel), `style.css`, `config.js`, `schema.sql`.

## Passo 1 — Criar a base de dados (Supabase, gratuito)
1. Vá a supabase.com e crie uma conta gratuita.
2. Crie um novo projecto (escolha uma senha forte para a base de dados e guarde-a).
3. No menu à esquerda, abra **SQL Editor** → **New query**.
4. Abra o ficheiro `schema.sql` desta pasta, copie todo o conteúdo, cole no editor e clique **Run**.
   Isto cria as tabelas `clients` e `quotes`.

## Passo 2 — Criar o seu utilizador de acesso
1. No menu à esquerda, abra **Authentication** → **Users** → **Add user**.
2. Crie um utilizador com o seu email e uma senha. Marque a opção para confirmar o email automaticamente, se aparecer.
3. Esse é o email/senha que vai usar para entrar no painel.

## Passo 3 — Ligar o site à Supabase
1. No menu à esquerda, abra **Project Settings** → **API**.
2. Copie o valor **Project URL** e cole no ficheiro `config.js`, no lugar de `COLE_AQUI_A_SUA_PROJECT_URL`.
3. Copie o valor **anon public** (chave) e cole no lugar de `COLE_AQUI_A_SUA_ANON_PUBLIC_KEY`.
4. Guarde o ficheiro.

## Passo 4 — Publicar no Vercel
1. Crie um repositório (por exemplo no GitHub) com estes ficheiros, ou arraste a pasta directamente para vercel.com/new (a Vercel aceita upload directo de uma pasta).
2. Não é preciso nenhuma configuração especial — são ficheiros estáticos.
3. Depois de publicado, vá a **Settings → Domains** no projecto da Vercel e adicione `dynamicserviceslda.com` (ou um subdomínio, como `cotacoes.dynamicserviceslda.com`).
4. Siga as instruções da Vercel para apontar o domínio (normalmente um registo DNS tipo CNAME ou A, feito onde comprou o domínio).

## Passo 5 — Usar
1. Abra `https://cotacoes.dynamicserviceslda.com` (ou o domínio que escolheu).
2. Entre com o email e senha criados no Passo 2.
3. Cadastre clientes, crie cotações e envie pelo botão do WhatsApp.

## Segurança
- Os dados só podem ser lidos/gravados por quem tiver sessão iniciada (regras já vêm no `schema.sql`).
- A chave em `config.js` (anon public) é segura de ficar visível no site — é feita para isso; quem protege os dados são as regras da base de dados, não o segredo da chave.
- Se quiser dar acesso a um funcionário, crie outro utilizador em **Authentication → Users**.
- Nunca partilhe a **service_role key** da Supabase (essa sim é secreta); este projecto não a usa.

## Se algo não gravar
Abra o painel, tente guardar e veja a mensagem de erro exacta. As causas mais comuns:
- `config.js` ainda com os valores de exemplo por preencher.
- O SQL do Passo 1 não foi executado.
- Nenhum utilizador foi criado no Passo 2.
