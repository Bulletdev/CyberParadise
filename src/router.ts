import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import ArticleDetail from './views/ArticleDetail.vue'
import About from './views/About.vue'
import Forum from './views/Forum.vue'
import ForumTopic from './views/ForumTopic.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/artigos', name: 'articles', component: Articles },
    { path: '/artigos/:slug', name: 'article', component: ArticleDetail },
    { path: '/sobre', name: 'about', component: About },
    { path: '/forum', name: 'forum', component: Forum },
    { path: '/forum/:id', name: 'forum-topic', component: ForumTopic },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router