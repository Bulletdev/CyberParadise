<script setup lang="ts">
</script>

<template>
  <div class="container">
    <section class="section">
      <h2 class="section-title">Missão Futuro 35 — Brasil 2035</h2>
      <p>
        Comitê Brasil 2035: proposta integrada para equilibrar <strong>privacidade</strong>,
        <strong>segurança</strong> e <strong>prosperidade</strong> em uma sociedade hiperconectada.
      </p>



      <h3 id="dilema" class="section-title" style="font-size:18px; margin-top:12px;">Dilema</h3>
      <p class="body">Como garantir segurança pública, continuidade econômica e inovação sem sacrificar direitos fundamentais e autonomia individual em um mundo de vigilância algorítmica, dados ubíquos e ameaças persistentes?</p>

      <h3 id="causas" class="section-title" style="font-size:18px; margin-top:12px;">Causas e dinâmicas</h3>
      <ul class="list">
        <li>Expansão de dados e sensores (IoT, biometrias, logs) com acoplamento em cadeia.</li>
        <li>Dependência de plataformas e terceiros; risco sistêmico por falhas de governança.</li>
        <li>Assimetria de informação entre Estado/empresas e cidadãos; opacidade decisória.</li>
        <li>Novas capacidades ofensivas (ransomware, supply chain, engenharia social dirigida).</li>
        <li>Pressões legais e regulatórias assimétricas; lacunas em transparência e auditoria.</li>
      </ul>

      <h3 id="cenarios" class="section-title" style="font-size:18px; margin-top:12px;">Cenários 2035</h3>
      <ul class="list">
        <li><strong>Status quo algorítmico</strong>: eficiência com perda gradual de direitos.</li>
        <li><strong>Segurança autoritária</strong>: vigilância massiva, baixo controle social.</li>
        <li><strong>Privacidade por design</strong>: criptografia padrão, minimização de dados, auditoria contínua.</li>
      </ul>

      <h3 id="solucoes" class="section-title" style="font-size:18px; margin-top:12px;">Soluções propostas</h3>
      <ul class="list">
        <li><strong>Infraestrutura de confiança</strong>: E2EE, ML‑KEM/ML‑DSA, rotação de segredos, token binding.</li>
        <li><strong>Governança de dados</strong>: minimização, retenção limitada, rastreabilidade e SBOM.</li>
        <li><strong>Auditoria e transparência</strong>: relatórios públicos, trilhas imutáveis, verificabilidade de acesso.</li>
        <li><strong>Segurança adaptativa</strong>: autenticação forte, detecção de anomalias, resposta orquestrada.</li>
        <li><strong>Educação e capacitação</strong>: campanhas, currículos e incentivos para práticas seguras.</li>
      </ul>

      <h3 id="impactos" class="section-title" style="font-size:18px; margin-top:12px;">Impactos sociais, econômicos e ambientais</h3>
      <ul class="list">
        <li>Redução de fraudes e incidentes; confiança em serviços digitais críticos (Pix/SPB).</li>
        <li>Competitividade e atração de investimentos com conformidade e resiliência.</li>
        <li>Menor consumo e descarte de dados; eficiência energética por otimização de processamento.</li>
      </ul>

      <h3 id="viabilidade" class="section-title" style="font-size:18px; margin-top:12px;">Viabilidade técnica e ética</h3>
      <ul class="list">
        <li>Padronização NIST (PQC), protocolos auditáveis, implementação incremental e híbrida.</li>
        <li>Princípios: necessidade, proporcionalidade, finalidade legítima, accountability.</li>
        <li>Órgãos independentes para revisão de abusos e governança multi‑stakeholder.</li>
      </ul>

      <h3 id="plano" class="section-title" style="font-size:18px; margin-top:12px;">Plano de execução (2025–2035)</h3>
      <ol class="list">
        <li>Inventário e classificação de dados/sistemas; priorização de alto impacto.</li>
        <li>Criptografia híbrida e hardening; segregação de ambientes e credenciais.</li>
        <li>Auditoria contínua e publicação de relatórios; mecanismos de denúncia e correção.</li>
        <li>Formação/certificação; incentivos e regulação clara para fornecedores e órgãos públicos.</li>
      </ol>

      <h3 id="indicadores" class="section-title" style="font-size:18px; margin-top:12px;">Indicadores de sucesso</h3>
      <ul class="list">
        <li>Tempo de detecção e resposta (MTTD/MTTR) e queda de incidentes.</li>
        <li>Adesão a E2EE/PQC e publicação de SBOM por fornecedores críticos.</li>
        <li>Satisfação dos cidadãos e redução de solicitações de dados sensíveis.</li>
      </ul>

      <h3 id="riscos" class="section-title" style="font-size:18px; margin-top:12px;">Riscos e mitigação</h3>
      <ul class="list">
        <li>Resistência organizacional: programas de mudança e incentivos.</li>
        <li>Custos: implementação faseada e priorização por impacto.</li>
        <li>Abusos: controles independentes, logs verificáveis e sanções efetivas.</li>
      </ul>

      <div class="grid" style="margin-top:12px;">
        <router-link class="nav-link" to="/artigos">[CONSULTAR ARTIGOS]</router-link>
        <router-link class="nav-link" :to="{ path: '/forum', query: { tag: 'Missão Futuro 35' } }">[DEBATER NO FÓRUM]</router-link>
      </div>

      <h3 class="section-title" style="font-size:18px; margin-top:16px;">Leituras relacionadas</h3>
      <ul class="list">
        <li>
          <router-link class="title" to="/artigos/snowden-prism">PRISM: o programa secreto da NSA</router-link>
        </li>
        <li>
          <router-link class="title" to="/artigos/moveit-breach-2023">MOVEit 2023: o mega incidente de supply chain</router-link>
        </li>
        <li>
          <router-link class="title" to="/artigos/okta-2023-support-breach">Okta 2023: tokens de sessão e suporte</router-link>
        </li>
        <li>
          <router-link class="title" to="/artigos/pqc-nist-standards-2024">Criptografia pós‑quântica: padrões NIST</router-link>
        </li>
        <li>
          <router-link class="title" to="/artigos/bacen-pix-incidente-2024">Bacen/Pix 2024: incidente com dados de chaves</router-link>
        </li>
        <li>
          <router-link class="title" to="/artigos/joao-nazareno-roque-ataque-financeiro-2025">Prisão por ataque ao sistema financeiro (João Nazareno Roque)</router-link>
        </li>
      </ul>

      <h3 class="section-title" style="font-size:18px; margin-top:16px;">Referências</h3>
      <ul class="list">
        <li>
          <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener">NIST — Projeto PQC</a>
        </li>
        <li>
          <a href="https://www.cisa.gov/news-events/alerts" target="_blank" rel="noopener">CISA — Alertas e Orientações</a>
        </li>
        <li>
          <a href="https://www.intelligence.gov/ic-on-the-record/section-702" target="_blank" rel="noopener">ODNI — Section 702 (IC on the Record)</a>
        </li>
        <li>
          <a href="https://www.pclob.gov/" target="_blank" rel="noopener">PCLOB — Privacy & Civil Liberties Oversight Board</a>
        </li>
        <li>
          <a href="https://www.bcb.gov.br/estabilidadefinanceira/pix" target="_blank" rel="noopener">Banco Central — Pix (segurança)</a>
        </li>
        <li>
          <a href="https://www.gov.br/anpd" target="_blank" rel="noopener">ANPD — Autoridade Nacional de Proteção de Dados</a>
        </li>
      </ul>

      <div class="cta">
        <p>
          Pronto para contribuir? Compartilhe sua proposta no fórum com a tag
          <strong>“Missão Futuro 35”</strong> e envolva outros participantes.
        </p>
        <router-link class="btn" :to="{ path: '/forum', query: { tag: 'Missão Futuro 35' } }">Enviar proposta ao comitê</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.body { color: #1aeb9a; }
/* Ajuste de rolagem para títulos ao usar âncoras, considerando header sticky */
.section-title { scroll-margin-top: 96px; }

/* TOC não fixo: segue o fluxo da página */

.title { color: #00ff7f; text-decoration: none; font-weight: 700; }
.title:hover { color: #fff; }
.cta { border: 1px solid rgba(0,255,127,0.2); padding: 12px; margin-top: 16px; background: rgba(0,0,0,0.35); }
.btn { display: inline-block; margin-top: 8px; padding: 8px 12px; border: 1px solid #00ff7f; color: #00ff7f; text-decoration: none; }
.btn:hover { background: #00ff7f; color: #000; }
</style>