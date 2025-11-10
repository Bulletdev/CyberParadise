<script setup lang="ts">
import { ref } from 'vue'

type Article = { title: string; slug: string; summary: string; date: string }
const articles = ref<Article[]>([
  {
    title: 'PRISM: o programa secreto da NSA',
    slug: 'snowden-prism',
    summary: 'Cobertura completa: origem (FISA 702), empresas envolvidas, mecanismos “downstream” vs “upstream”, impactos legais e reformas pós‑Snowden com fontes técnicas e imagens.',
    date: '2013-06-06'
  },
  {
    title: 'MOVEit 2023: o mega incidente de supply chain',
    slug: 'moveit-breach-2023',
    summary: 'Análise detalhada: CVE‑2023‑34362 (injeção SQL), LEMURLOOT, escala (2.700+ organizações; 93,3M pessoas), cadeia de terceiros e mitigação CISA.',
    date: '2023-05-31'
  },
  {
    title: 'Okta 2023: tokens de sessão e suporte',
    slug: 'okta-2023-support-breach',
    summary: 'Cronologia completa, causa raiz (credenciais em perfil pessoal Google), escopo (134 clientes), medidas de remediação (revogação, token binding).',
    date: '2023-10-19'
  },
  {
    title: 'Criptografia pós‑quântica: padrões NIST',
    slug: 'pqc-nist-standards-2024',
    summary: 'Guia prático dos FIPS 203/204/205, renomeações (ML‑KEM/ML‑DSA/SLH‑DSA), recomendações e roadmap de migração.',
    date: '2024-08-13'
  },
  {
    title: 'Bacen/Pix 2024: incidente com dados de chaves',
    slug: 'bacen-pix-incidente-2024',
    summary: 'Entenda o incidente recente com chaves Pix: escopo, causas prováveis (acesso indevido), medidas de resposta e recomendações para usuários e instituições.',
    date: '2024-11-01'
  },
  {
    title: 'Prisão por ataque ao sistema financeiro (João Nazareno Roque)',
    slug: 'joao-nazareno-roque-ataque-financeiro-2025',
    summary: 'Suspeita de facilitação de ataque via integração PSTI; riscos de insider, credenciais e impacto em cadeia no SPB/Pix.',
    date: '2025-07-04'
  }
])
</script>

<template>
  <div class="container">
    <section class="section">
      <h2 class="section-title">Artigos</h2>
      <p>Conteúdos de segurança e privacidade.</p>

      <ul class="list">
        <li v-for="a in articles" :key="a.slug" class="item">
          <router-link class="title" :to="`/artigos/${a.slug}`">{{ a.title }}</router-link>
          <p class="meta">{{ a.date }}</p>
          <p class="summary">{{ a.summary }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.item { border-bottom: 1px solid rgba(0,255,127,0.2); padding: 10px 0; }
.title { color: #00ff7f; font-weight: 800; text-decoration: none; }
.title:hover { color: #fff; }
.meta { color: #1a3f2e; font-size: 12px; }
.summary { color: #1aeb9a; }
</style>