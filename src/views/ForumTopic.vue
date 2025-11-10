<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Topic {
  id: string
  title: string
  content: string
  createdAt: string
}
interface Comment {
  id: string
  author: string
  text: string
  createdAt: string
}

const route = useRoute()
const id = String(route.params.id)
const topic = ref<Topic | null>(null)
const comments = ref<Comment[]>([])

function loadTopic() {
  const raw = localStorage.getItem('forum_topics')
  const list: Topic[] = raw ? JSON.parse(raw) : []
  topic.value = list.find(t => t.id === id) || null
}
function loadComments() {
  const raw = localStorage.getItem(`forum_comments_${id}`)
  comments.value = raw ? JSON.parse(raw) : []
}
function saveComments() {
  localStorage.setItem(`forum_comments_${id}`, JSON.stringify(comments.value))
}

onMounted(() => {
  loadTopic()
  loadComments()
})

const author = ref('')
const text = ref('')
function addComment(e: Event) {
  e.preventDefault()
  if (author.value.trim().length < 2 || text.value.trim().length < 2) return
  const c: Comment = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    author: author.value.trim(),
    text: text.value.trim(),
    createdAt: new Date().toISOString(),
  }
  comments.value.push(c)
  saveComments()
  author.value = ''
  text.value = ''
}
</script>

<template>
  <div class="container">
    <section class="section">
      <router-link to="/forum" class="nav-link">[← VOLTAR AO FÓRUM]</router-link>
      <div v-if="!topic" class="section">
        <h3 class="section-title">Tópico não encontrado</h3>
        <p>O ID informado não existe no armazenamento local.</p>
      </div>

      <div v-else>
        <h2 class="section-title">{{ topic.title }}</h2>
        <p class="topic-content">{{ topic.content }}</p>
        <small class="meta">Criado em {{ new Date(topic.createdAt).toLocaleString() }}</small>

        <div class="divider" aria-hidden="true"></div>
        <h3 class="section-title">Comentários</h3>
        <ul class="comments">
          <li v-if="comments.length === 0" class="comment-empty">Seja o primeiro a comentar.</li>
          <li v-for="c in comments" :key="c.id" class="comment">
            <p class="comment-text">{{ c.text }}</p>
            <small class="comment-meta">por {{ c.author }} • {{ new Date(c.createdAt).toLocaleString() }}</small>
          </li>
        </ul>

        <form class="form" @submit="addComment">
          <div class="form-row">
            <label for="author">Seu nome</label>
            <input id="author" v-model="author" type="text" />
          </div>
          <div class="form-row">
            <label for="text">Comentário</label>
            <textarea id="text" v-model="text" rows="4"></textarea>
          </div>
          <button class="btn">Enviar</button>
          <p class="hint">Os comentários ficam apenas no seu navegador (localStorage).</p>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.topic-content { color: #1aeb9a; margin: 8px 0; white-space: pre-wrap; }
.divider { height: 1px; background: rgba(0,255,127,0.3); margin: 16px 0; }
.comments { list-style: none; padding: 0; }
.comment { border: 1px solid rgba(0,255,127,0.3); background: rgba(0,0,0,0.4); padding: 10px; margin-bottom: 10px; }
.comment-text { color: #00ff7f; }
.comment-meta { color: #1a3f2e; }
.comment-empty { color: #1a3f2e; }
.form { border: 1px solid rgba(0,255,127,0.3); padding: 12px; margin: 12px 0; background: rgba(0,0,0,0.5); }
.form-row { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; }
label { color: #1aeb9a; font-weight: 700; }
input, textarea { background: rgba(0,0,0,0.6); border: 1px solid rgba(0,255,127,0.3); color: #00ff7f; padding: 8px; }
.btn { background: #00ff7f; color: #000; border: none; padding: 8px 12px; font-weight: 800; cursor: pointer; }
.hint { color: #1a3f2e; margin-top: 6px; }
</style>