<script setup lang="ts">
const alunos = ['Michael Douglas', 'Noabe da Silva Oliveira', 'Davi Araújo Carvalho']
</script>

<template>
  <div class="container">
    <section class="section">
      <h2 class="section-title">Sobre o projeto</h2>
      <p>
        Este site é um projeto acadêmico explorando o tema
        privacidade vs segurança digital em 2035. 
      </p>

      <h3 class="section-title" style="font-size:18px; margin-top:12px;">Alunos</h3>
      <ul class="list">
        <li v-for="nome in alunos" :key="nome">{{ nome }}</li>
      </ul>

      <p class="note">Discentes</p>
    </section>
  </div>
</template>

<style scoped>
.note { color: #1a3f2e; font-size: 12px; }
</style>