<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface Topic {
  id: string
  title: string
  content: string
  createdAt: string
  tags?: string[]
}

const router = useRouter()
const route = useRoute()
const topics = ref<Topic[]>([])

function loadTopics() {
  const raw = localStorage.getItem('forum_topics')
  topics.value = raw ? JSON.parse(raw) : []
}
function saveTopics() {
  localStorage.setItem('forum_topics', JSON.stringify(topics.value))
}

onMounted(loadTopics)

const title = ref('')
const content = ref('')
const canSubmit = computed(() => title.value.trim().length >= 3 && content.value.trim().length >= 10)
const markMF35 = ref(false)
const selectedTag = ref('')

onMounted(() => {
  // Se vier da página Desafio com ?tag=Missão Futuro 35
  if (typeof route.query.tag === 'string' && route.query.tag === 'Missão Futuro 35') {
    markMF35.value = true
    selectedTag.value = 'Missão Futuro 35'
  }
})

function createTopic(e: Event) {
  e.preventDefault()
  if (!canSubmit.value) return
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
  const t: Topic = {
    id,
    title: title.value.trim(),
    content: content.value.trim(),
    createdAt: new Date().toISOString(),
    tags: markMF35.value ? ['Missão Futuro 35'] : undefined,
  }
  topics.value.unshift(t)
  saveTopics()
  title.value = ''
  content.value = ''
  router.push(`/forum/${id}`)
}

const filteredTopics = computed(() => {
  if (!selectedTag.value) return topics.value
  return topics.value.filter(t => (t.tags || []).includes(selectedTag.value))
})
</script>

<template>
  <div class="container">
    <section class="section">
      <h2 class="section-title">Fórum</h2>
      <p>Troque ideias sobre privacidade, segurança e ferramentas.</p>

      <div class="filters">
        <label for="tagFilter">Filtrar por tag:</label>
        <select id="tagFilter" v-model="selectedTag">
          <option value="">Todos</option>
          <option value="Missão Futuro 35">Missão Futuro 35</option>
        </select>
      </div>

      <form class="form" @submit="createTopic">
        <div class="form-row">
          <label for="title">Título do tópico</label>
          <input id="title" v-model="title" type="text" placeholder="Ex.: Melhor VPN para 2035?" />
        </div>
        <div class="form-row">
          <label for="content">Conteúdo</label>
          <textarea id="content" v-model="content" rows="5" placeholder="Descreva dúvidas, contexto e o que já testou"></textarea>
        </div>
        <div class="form-row form-inline">
          <input id="mf35" type="checkbox" v-model="markMF35" />
          <label for="mf35">Marcar com a tag “Missão Futuro 35”</label>
        </div>
        <button class="btn" :disabled="!canSubmit">Criar tópico</button>
        <p class="hint">Os tópicos ficam apenas no seu navegador (localStorage).</p>
      </form>

      <div class="divider" aria-hidden="true"></div>

      <h3 class="section-title">Tópicos recentes</h3>
      <ul class="grid">
        <li v-if="filteredTopics.length === 0">Nenhum tópico no filtro selecionado.</li>
        <li v-for="t in filteredTopics" :key="t.id">
          <router-link :to="`/forum/${t.id}`" class="topic-link">{{ t.title }}</router-link>
          <p class="excerpt">{{ t.content.slice(0, 140) }}<span v-if="t.content.length > 140">…</span></p>
          <div class="tags" v-if="t.tags?.length">
            <span class="tag" v-for="tg in t.tags" :key="tg">{{ tg }}</span>
          </div>
          <small class="meta">Criado em {{ new Date(t.createdAt).toLocaleString() }}</small>
        </li>
      </ul>
    </section>
  </div>
  
</template>

<style scoped>
.form { border: 1px solid rgba(0,255,127,0.3); padding: 12px; margin: 12px 0; background: rgba(0,0,0,0.5); }
.form-row { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; }
label { color: #1aeb9a; font-weight: 700; }
input, textarea { background: rgba(0,0,0,0.6); border: 1px solid rgba(0,255,127,0.3); color: #00ff7f; padding: 8px; }
.btn { background: #00ff7f; color: #000; border: none; padding: 8px 12px; font-weight: 800; cursor: pointer; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.hint { color: #1a3f2e; margin-top: 6px; }
.divider { height: 1px; background: rgba(0,255,127,0.3); margin: 16px 0; }
.topic-link { color: #00ff7f; text-decoration: underline; font-weight: 700; }
.excerpt { color: #1aeb9a; margin: 6px 0; }
.meta { color: #1a3f2e; }
.filters { display: flex; gap: 8px; align-items: center; margin: 8px 0 12px; }
.filters label { color: #1aeb9a; font-weight: 700; }
.filters select { background: rgba(0,0,0,0.6); border: 1px solid rgba(0,255,127,0.3); color: #00ff7f; padding: 6px; }
.form-inline { flex-direction: row; align-items: center; gap: 8px; }
.tags { display: flex; gap: 6px; margin: 4px 0; }
.tag { display: inline-block; padding: 2px 6px; border: 1px solid rgba(0,255,127,0.4); color: #00ff7f; font-size: 12px; }
</style>