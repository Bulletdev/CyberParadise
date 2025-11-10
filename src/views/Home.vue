<script setup lang="ts">
</script>

<template>
  <div class="container">
    <section class="section">
      <h2 class="section-title">Home</h2>
      <p>Bem-vindo ao Portal Hacker de Privacidade e Segurança Digital.</p>

  <div class="ascii-art mb-6"><pre>
   ___
  /   \
 |     |    _   _   _   _   _   _   _   _   _    _   _   
 |  C  |   | |_| | | |_| | | |_| | | |_| |_|  | | | | | |
 |  y  |   | |_| | | |_| | | |_| | | |_| |_|  |_| |_| |_|
 |  B  |   
 |  E  |   ___   ___   ___   ___   ___   ___   ___   ___
 |  R  |  |   | |   | |   | |   | |   | |   | |   | |   |
 |  S  |  | P | | A | | R | | A | | D | | I | | S | | E |
 |  E  |  |___| |___| |___| |___| |___| |___| |___| |___| 
 |  C  |   
 |  U  |   ___   ___   ___   ___   ___   ___   ___   ___   
 |  R  |  |   | |   | |   | |   | |   | |   | |   | |   | 
 |  I  |  | - | | - | | - | | - | | - | | - | | - | | - | 
 |  T  |  | - | | - | | - | | - | | - | | - | | - | | - | 
 |  Y  |  | - | | - | | - | | - | | - | | - | | - | | - |
  \___/   |___| |___| |___| |___| |___| |___| |___| |___| 

</pre>
  </div>

  <p>
    Aqui você encontra recursos essenciais para proteger sua vida digital. 

    Explore guias práticos, análises de ferramentas, discussões sobre leis de privacidade e dicas contra ameaças cibernéticas. 
    
    Nosso foco é empoderar você com conhecimento para navegar no mundo online de forma segura e anônima.

  </p>

  <div class="grid">
    <router-link class="nav-link" to="/artigos">[VER ARTIGOS E GUIAS]</router-link>
    <router-link class="nav-link" to="/desafio">[MISSÃO FUTURO 35]</router-link>
    <router-link class="nav-link" to="/forum">[PARTICIPE DO FÓRUM]</router-link>
    <router-link class="nav-link" to="/sobre">[SOBRE O PROJETO]</router-link>
  </div>

  <div class="featured mt-8">
    <h3 class="featured-title">Destaques Recentes</h3>
    <ul class="featured-list">
      <li>
        <router-link to="/desafio">Missão Futuro 35 — Brasil 2035</router-link>
      </li>
      <li>
        <router-link to="/artigos/snowden-prism">PRISM: o programa secreto da NSA</router-link>
      </li>
      <li>
        <router-link to="/artigos/moveit-breach-2023">MOVEit 2023: o mega incidente de supply chain</router-link>
      </li>
      <li>
        <router-link to="/artigos/okta-2023-support-breach">Okta 2023: tokens de sessão e suporte</router-link>
      </li>
      <li>
        <router-link to="/artigos/pqc-nist-standards-2024">Criptografia pós‑quântica: padrões NIST</router-link>
      </li>
    </ul>
  </div>
</section>  </div>
</template>

<style scoped>
.mb-6 { margin-bottom: 16px; }
.mt-8 { margin-top: 32px; }
.ascii-art pre { 
  color: #00ff7f; 
  background: rgba(0,0,0,0.4); 
  padding: 12px; 
  border: 1px solid rgba(0,255,127,0.3); 
  overflow: auto; 
  font-size: 0.8rem; 
  line-height: 1.1; 
}
.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
  gap: 8px; 
  margin-top: 12px; 
}
.featured-title { 
  font-size: 1.25rem; 
  margin-bottom: 8px; 
  color: #00ff7f; 
}
.featured-list { 
  list-style-type: disc; 
  padding-left: 20px; 
}
.featured-list li { 
  margin-bottom: 4px; 
}
.featured-list a { 
  color: #00ff7f; 
  text-decoration: underline; 
}
</style>

