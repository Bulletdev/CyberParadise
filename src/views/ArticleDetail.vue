<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { FullArticle } from '../types/article'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const fallbackArticle: FullArticle = { title: 'Artigo não encontrado', body: ['Verifique o link.'] }
const fullArticle = computed<FullArticle>(() => content[slug.value] ?? moreContent[slug.value] ?? fallbackArticle)

const content: Record<string, FullArticle> = {
  'snowden-licoes-2035': {
    title: 'Snowden: lições para 2035',
    body: [
      'Vigilância em massa acelerou a adoção de criptografia ponta-a-ponta.',
      'O debate entre segurança nacional e direitos civis segue central, com revelações de Snowden servindo como catalisador para desafios legais contra programas de vigilância.',
      'Em 2035, esperamos padrões de privacidade por design e auditoria contínua, impulsionados por reformas em leis como a Seção 702 do FISA, que continua sendo renovada com salvaguardas adicionais.',
      'Aumento na conscientização sobre parcerias entre agências como a NSA e empresas de tecnologia, levando a maior transparência e criptografia padrão em comunicações.',
      'Lições incluem a necessidade de equilibrar vigilância com proteções constitucionais, evitando circunvenção de leis.',
      'Projeções para 2035 indicam melhorias limitadas em espaços digitais devido a fraquezas humanas e falhas em reformas corporativas e governamentais.'
    ]
  },
  'vazamentos-supply-chain': {
    title: 'Vazamentos recentes e supply chain',
    body: [
      'Incidentes como MOVEit e Okta mostram o impacto em cadeia, com ataques em supply chain dobrando em 2025.',
      'Gestão de identidade, tokens e configurações minimizam superfícies de ataque.',
      'Resposta ágil e playbooks são vitais para reduzir danos.',
      'Ataques de supply chain custarão ao mundo US$60 bilhões até 2025, com aumento de 45% das organizações afetadas.',
      'Lições incluem defesa contra exploits zero-day e gerenciamento de riscos de terceiros.',
      'Incidentes recentes destacam a necessidade de SBOM (Software Bill of Materials) para identificar vulnerabilidades.'
    ]
  },
  'prevencao-pratica': {
    title: 'Prevenção prática para pessoas e empresas',
    body: [
      'MFA/Passkeys, gerenciadores de senha e criptografia em trânsito/repouso.',
      'Backups testados, minimização de dados e monitoramento com alertas úteis.',
      'Treinamento contra phishing e engenharia social continua essencial.',
      'Mantenha software atualizado e use antivírus com scans regulares.',
      'Implemente estratégias de cibersegurança com foco em pessoas, políticas adaptáveis e backups de dados.',
      'Use soluções seguras de compartilhamento de arquivos e autenticação multifator em todos os acessos.',
      'Proteja redes com firewalls e Wi-Fi seguro, e treine funcionários em princípios de segurança.'
    ]
  },
  'joao-nazareno-roque-ataque-financeiro-2025': {
    title: 'Prisão de João Nazareno Roque por ataque ao sistema financeiro',
    date: '2025-07-04',
    body: [
      'A Polícia Civil de São Paulo prendeu João Nazareno Roque (48) sob suspeita de facilitar um ataque ao ecossistema financeiro brasileiro por meio de integração tecnológica de terceiros (PSTI).',
      'De acordo com autoridades, credenciais e acesso indevido teriam sido usados para movimentar valores via infraestrutura que interliga instituições financeiras ao SPB/Pix, afetando contas de liquidação e gerando impacto em cadeia.',
      'O caso evidencia riscos de insider/terceiros, menor privilégio insuficiente, sanitização de artefatos de suporte e governança fraca de credenciais. Investigações seguem conduzidas por órgãos estaduais e federais, com o Banco Central supervisionando medidas de segurança dos participantes.',
      'Até a conclusão das investigações, recomenda-se: comunicação transparente aos clientes impactados, rotação de segredos, auditoria forense de acessos, revisão de trilhas de auditoria e implementação de token binding e segregação de ambientes pessoais/corporativos.',
      'Para usuários: desconfiar de phishing que explore dados cadastrais, verificar comunicações oficiais do banco, e monitorar transações; não há indicação de exposição de saldos/senhas quando incidentes ocorrem via integrações de terceiros, mas medidas preventivas são prudentes.'
    ],
    sources: [
      { label: 'Banco Central — Notícias e Comunicados', url: 'https://www.bcb.gov.br/noticias' },
      { label: 'Polícia Federal — Notícias', url: 'https://www.gov.br/pf/pt-br/assuntos/noticias' },
      { label: 'Polícia Civil SP — DEIC', url: 'https://www.policiacivil.sp.gov.br' }
    ]
  }
}

// Conteúdos completos por slug (PRISM, MOVEit, Okta, PQC)
const moreContent: Record<string, FullArticle> = {
  'snowden-prism': {
    title: 'PRISM: o programa secreto da NSA',
    date: '2013-06-06',
    body: [
      'PRISM foi um programa de coleta de inteligência eletrônica operado pela NSA e revelado em 2013 por Edward Snowden.',
      'Baseado na Seção 702 do FISA Amendments Act, o PRISM permitia coletar comunicações de alvos estrangeiros fora dos EUA.',
      'Dois mecanismos eram citados: “downstream” (requisições a provedores) e “upstream” (coleta em backbone).',
      'Empresas de tecnologia negaram acesso irrestrito, mas confirmaram cumprimento de ordens — gerando debate sobre transparência e limites.',
      'Críticos apontaram riscos à privacidade e coleta incidental de dados de cidadãos americanos.',
      'Depois das revelações, houve aumento de relatórios de transparência, ajustes em políticas e maior escrutínio legislativo.',
      'O caso impulsionou criptografia de ponta a ponta e práticas de retenção mínima de dados.',
      'Internacionalmente, gerou revisões de transferência de dados e acordos transatlânticos (Privacy Shield e revisões).',
      'A Seção 702 segue debatida e renovada com salvaguardas adicionais, focando proporcionalidade e controle de abusos. Em 2025, uma corte federal determinou que buscas em dados da Seção 702 requerem mandado sob a Quarta Emenda.',
      'Para usuários e empresas: adotar E2EE, reduzir metadados e monitorar legislação de vigilância.'
    ],
    sources: [
      { label: 'ODNI — IC on the Record: Section 702', url: 'https://www.intelligence.gov/ic-on-the-record/section-702' },
      { label: 'DOJ — National Security Division (Seção 702)', url: 'https://www.justice.gov/nsd' },
      { label: 'PCLOB — Privacy & Civil Liberties Oversight Board', url: 'https://www.pclob.gov/' },
      { label: 'Wikipedia - PRISM', url: 'https://en.wikipedia.org/wiki/PRISM' },
      { label: 'ACLU - Five Things to Know About NSA Mass Surveillance', url: 'https://www.aclu.org/news/national-security/five-things-to-know-about-nsa-mass-surveillance-and-the-coming-fight-in-congress' }
    ]
  },
  'moveit-breach-2023': {
    title: 'MOVEit 2023: o mega incidente de supply chain',
    date: '2023-05-31',
    body: [
      'Em 2023, MOVEit Transfer sofreu exploração da falha crítica CVE‑2023‑34362 por atores ligados ao CL0P.',
      'A vulnerabilidade de injeção SQL possibilitou execução não autorizada e exfiltração de dados. Exploração ocorreu via HTTP/HTTPS em sistemas não patchados.',
      'O loader LEMURLOOT foi observado em campanhas, ampliando automação dos ataques.',
      'Impacto: 2.700+ organizações e 93,3 milhões de indivíduos, efeito cascata na cadeia de terceiros. Até outubro 2023, 2.559 organizações e 66 milhões de indivíduos confirmados.',
      'CISA e parceiros emitiram orientações de resposta e mitigação.',
      'Práticas: inventário de uso, patching imediato, rotação de segredos e revisão de logs.',
      'Fornecedores: SDL robusto; Clientes: avaliação de riscos de terceiros e segmentação.',
      'Caso consolidou lições de supply chain e menor privilégio. Em 2025, lições continuam relevantes com aumento de ataques semelhantes.'
    ],
    sources: [
      { label: 'Progress — MOVEit Transfer Security Advisory', url: 'https://www.progress.com/security' },
      { label: 'NVD — CVE-2023-34362', url: 'https://nvd.nist.gov/vuln/detail/CVE-2023-34362' },
      { label: 'CISA — Alertas e Orientações', url: 'https://www.cisa.gov/news-events/alerts' },
      { label: 'CISA #StopRansomware Alert', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a' },
      { label: 'Wikipedia - 2023 MOVEit data breach', url: 'https://en.wikipedia.org/wiki/2023_MOVEit_data_breach' }
    ]
  },
  'okta-2023-support-breach': {
    title: 'Okta 2023: tokens de sessão e suporte',
    date: '2023-10-19',
    body: [
      'Comprometimento do sistema de suporte da Okta após uso de credenciais de conta pessoal Google de funcionário.',
      'Acesso a arquivos HAR enviados por clientes, contendo cookies e tokens de sessão.',
      'Cerca de 134 clientes impactados (< 1%), com risco de hijacking de sessões. Dados de todos os usuários do suporte foram expostos, incluindo nomes e emails.',
      'Lições: separar ambientes pessoais/corporativos e sanitizar HAR automaticamente.',
      'Recomendações: token binding, revogação rápida, alertas de anomalias e fortalecimento do suporte.',
      'Cloudflare e BeyondTrust relataram detecções e mitigaram impactos.',
      'Resposta incluiu comunicação ativa, rotação de segredos e endurecimento de controles. Investigação independente concluída em 2024.',
      'Tratar artefatos de suporte como dados altamente sensíveis é essencial. Em 2025, impactos persistem com riscos de phishing aumentados.'
    ],
    sources: [
      { label: 'Okta — Security Updates', url: 'https://security.okta.com' },
      { label: 'Okta October 2023 Security Incident', url: 'https://sec.okta.com/articles/october-security-incident-recommended-actions/' },
      { label: 'Beyond Identity Report', url: 'https://www.beyondidentity.com/resource/okta-cyber-trust-report-2' }
    ]
  },
  'pqc-nist-standards-2024': {
    title: 'Criptografia pós‑quântica: padrões NIST',
    date: '2024-08-13',
    body: [
      'Computadores quânticos ameaçam RSA/ECC; NIST conduziu competição para padronização.',
      'FIPS publicados em 2024: 203 (ML‑KEM), 204 (ML‑DSA) e 205 (SLH‑DSA); FALCON segue em draft. FIPS 203 para encapsulamento de chaves, 204 para assinaturas digitais lattice-based, 205 para assinaturas hash-based.',
      'Migração: inventariar criptografia, priorizar dados de longo prazo e planejar modo híbrido.',
      'Avaliar performance e tamanhos de chaves/assinaturas e impactos em protocolos.',
      'Risco de “harvest now, decrypt later” exige ação antecipada em dados sensíveis.',
      'Adotar padrões e bibliotecas confiáveis; evitar algoritmos não revisados.',
      'Governança de chaves e coordenação com parceiros são cruciais na transição.',
      'Monitorar atualizações do NIST e de vendors para compatibilidade segura. Em 2025, HQC foi selecionado para padronização adicional. Draft de FIPS 206 esperado para FALCON.'
    ],
    sources: [
      { label: 'NIST — PQC Project', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
      { label: 'FIPS 203 — ML-KEM', url: 'https://csrc.nist.gov/pubs/fips/203/final' },
      { label: 'FIPS 204 — ML-DSA', url: 'https://csrc.nist.gov/pubs/fips/204/final' },
      { label: 'FIPS 205 — SLH-DSA', url: 'https://csrc.nist.gov/pubs/fips/205/final' },
      { label: 'NIST News - First 3 Standards', url: 'https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards' }
    ]
  }
  ,
  'bacen-pix-incidente-2024': {
    title: 'Bacen/Pix 2024: incidente com dados de chaves',
    date: '2024-11-01',
    body: [
      'O Banco Central reportou incidente envolvendo dados cadastrais de chaves Pix de um participante do arranjo. Não houve exposição de senhas, saldos, nem valores de transações.',
      'Os dados expostos se referem às chaves cadastradas (como nome, CPF/CNPJ, telefone e e‑mail vinculados), conforme registros mantidos pelos participantes do Pix.',
      'A causa provável foi acesso indevido por credenciais/contas de suporte e controles insuficientes de privilégios, um padrão recorrente em incidentes de terceiros.',
      'Medidas típicas incluem: revogação e rotação de credenciais, auditoria de acessos, comunicação aos titulares das chaves, e reporte às autoridades competentes.',
      'Para usuários: não compartilhar códigos; monitorar comunicações oficiais do banco; desconfiar de phishing usando dados cadastrais; avaliar trocar a chave se necessário.',
      'Para instituições: implementar menor privilégio, token binding, sanitização de artefatos de suporte (HAR), dupla revisão em acessos administrativos, e trilhas de auditoria efetivas.',
      'O Bacen reforça que os incidentes são de responsabilidade dos participantes, e que o arranjo Pix mantém exigências de segurança e reporte de eventos, com supervisão contínua.'
    ],
    sources: [
      { label: 'Banco Central — Pix (visão geral e segurança)', url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix' },
      { label: 'ANPD — Autoridade Nacional de Proteção de Dados', url: 'https://www.gov.br/anpd' }
    ]
  }
}
</script>

<template>
  <div class="container">
    <section class="section">
      <h2 class="section-title">{{ fullArticle.title }}</h2>
      <p v-if="fullArticle.date" class="muted">{{ fullArticle.date }}</p>

      <!-- Imagens removidas para evitar hotlinking e fontes não oficiais; focamos em texto e fontes oficiais. -->

      <div class="body" v-if="fullArticle.sections">
        <div v-for="(sec, i) in fullArticle.sections" :key="i" class="subsection">
          <h3>{{ sec.title }}</h3>
          <p v-for="(p, j) in sec.paragraphs" :key="j">{{ p }}</p>
          <ul v-if="sec.items">
            <li v-for="(li, k) in sec.items" :key="k">{{ li }}</li>
          </ul>
        </div>
      </div>

      <div class="body" v-else>
        <p v-for="(p, i) in fullArticle.body" :key="i">{{ p }}</p>
      </div>

      <div v-if="fullArticle.sources?.length" class="sources">
        <h3>Fontes e leitura adicional</h3>
        <ul>
          <li v-for="(s, i) in fullArticle.sources" :key="i">
            <a :href="s.url" target="_blank" rel="noopener">{{ s.label }}</a>
          </li>
        </ul>
      </div>

      <router-link class="nav-link" to="/artigos">[← Voltar para artigos]</router-link>
    </section>
  </div>
</template>

<style scoped>
.body p { margin-bottom: 10px; color: #1aeb9a; }
.muted { color: #7aa; }
.subsection h3 { margin-top: 1rem; }
.sources { margin-top: 1.5rem; }
.sources a { color: #0f0; }
</style>