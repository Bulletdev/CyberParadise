# Cyber Paradise

Portal de artigos com estética hacker focado em privacidade e segurança digital.

Este projeto é um site simples em Vue 3 que organiza conteúdos didáticos sobre casos emblemáticos (PRISM, MOVEit, Okta) e padrões modernos de criptografia (PQC/NIST).

 O objetivo é servir como referência acadêmica com foco em fontes oficiais e visual cyberpunk.

## Stack

- Vue 3 + TypeScript
- Vite (Rolldown Vite)
- Vue Router v4

## Estrutura

- `src/App.vue` — layout principal (header, navegação e footer)
- `src/main.ts` — bootstrap da aplicação
- `src/router.ts` — rotas do site
- `src/views/Home.vue` — página inicial com ASCII art e navegação
- `src/views/Articles.vue` — lista de artigos
- `src/views/ArticleDetail.vue` — detalhe do artigo por `slug`
- `src/views/About.vue` — informações do projeto e alunos
- `src/style.css` — estilos globais simples (tema hacker)

## Rotas

- `/` — Home
- `/artigos` — Lista de artigos
- `/artigos/:slug` — Detalhe do artigo
- `/sobre` — Sobre o projeto

Observação: o link “Participar do fórum” na Home (`/forum`) é um placeholder e ainda não possui rota implementada.

## Conteúdo e Fontes

- Os artigos são redigidos com base em fontes oficiais (governo, fornecedores, NIST). Exemplos:
  - PRISM: ODNI (IC on the Record), DOJ/NSD, PCLOB
  - MOVEit: Progress (Security Advisory), NVD (CVE), CISA (Alerts)
  - Okta: Okta Security Updates
  - PQC: NIST PQC Project, FIPS 203/204/205
- Imagens externas (hotlink) foram removidas para evitar bloqueios e priorizar material oficial. Se necessário, inclua logos e gráficos localmente em `public/` com licença apropriada.

## Como rodar

Pré-requisitos:
- Node.js 18+

Instalação e desenvolvimento:
```
npm install
npm run dev
```

O servidor inicia na porta disponível (5173 por padrão; se ocupada, usa 5174). Acesse:
- `http://localhost:5173/` ou `http://localhost:5174/`

Build e preview:
```
npm run build
npm run preview
```

## Personalização rápida

- Edite a lista de artigos em `src/views/Articles.vue` (título, resumo, data, slug)
- Amplie conteúdos em `src/views/ArticleDetail.vue` (parágrafos, seções, fontes)
- Ajuste navegação em `src/App.vue` e `src/router.ts`
- Atualize nomes dos alunos em `src/views/About.vue`

## Boas práticas e compliance

- Preferir fontes oficiais e publicações com autoridade
- Evitar hotlink de imagens; usar arquivos locais com licença
- Indicar claramente quando o conteúdo é didático/educacional
- Adotar linguagem neutra e objetiva

## Roadmap sugerido

- Implementar `/forum` com tópicos e comentários
- Adicionar busca e categorias nos artigos
- Suporte a Markdown para edição dos textos
- Paginação e filtros por tema

## Licença

Projeto acadêmico — conteúdo didático. 