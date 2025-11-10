<script setup lang="ts">
</script>

<template>
  <div class="site">
    <div class="scanline" aria-hidden="true"></div>

    <header class="header">
      <div class="brand">
        <span class="terminal">▮</span>
        <h1 class="glitch-text" data-text="PRIVACIDADE x SEGURANÇA">PRIVACIDADE x SEGURANÇA</h1>
        <p class="subtitle"> </p>
      </div>
      <nav class="nav">
        <router-link to="/" class="nav-link">[HOME]</router-link>
        <router-link to="/artigos" class="nav-link">[ARTIGOS]</router-link>
        <router-link to="/forum" class="nav-link">[FÓRUM]</router-link>
        <router-link to="/sobre" class="nav-link">[SOBRE]</router-link>
      </nav>
    </header>

    <main class="container">
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2035 • Projeto acadêmico • UNIFAN - Centro Universitário Nobre</p>
    </footer>
  </div>
</template>

<style>
.site { position: relative; min-height: 100vh; background: #000; color: #00ff7f; }
.header { position: sticky; top: 0; background: rgba(0,0,0,0.85); border-bottom: 1px solid rgba(0,255,127,0.3); backdrop-filter: blur(6px); }
.brand { display: flex; align-items: center; gap: 12px; padding: 16px; }
.terminal { color: #00ff7f; }
.subtitle { color: #1a3f2e; font-size: 12px; }
.nav { display: flex; flex-wrap: wrap; gap: 8px; padding: 8px 16px 16px; }
.nav-link { color: #00ff7f; text-decoration: none; border: 1px solid rgba(0,255,127,0.3); padding: 6px 10px; font-weight: 700; }
.nav-link:hover { background: #00ff7f; color: #000; }

.container { max-width: 980px; margin: 0 auto; padding: 24px; }
.section { border: 1px solid rgba(0,255,127,0.3); background: rgba(0,0,0,0.6); padding: 20px; margin-bottom: 16px; }
.section-title { color: #fff; font-size: 20px; margin-bottom: 8px; }
.list { padding-left: 18px; }
.list li { margin: 6px 0; color: #1aeb9a; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; padding-left: 0; list-style: none; }
.grid li { border: 1px solid rgba(0,255,127,0.3); padding: 10px; background: rgba(0,0,0,0.5); }
.refs { padding-left: 18px; }
.refs a { color: #00ff7f; text-decoration: underline; }
.refs a:hover { color: #fff; }

.footer { border-top: 1px solid rgba(0,255,127,0.3); background: rgba(0,0,0,0.85); color: #1a3f2e; text-align: center; padding: 16px; }

.glitch-text { position: relative; font-size: 24px; font-weight: 800; color: #00ff7f; text-transform: uppercase; }
.glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; left: 0; top: 0; }
.glitch-text::before { color: #ff2d2d; transform: translate(1px, -1px); opacity: 0.5; }
.glitch-text::after { color: #00aaff; transform: translate(-1px, 1px); opacity: 0.5; }

.scanline { pointer-events: none; position: fixed; inset: 0; background: repeating-linear-gradient(180deg, rgba(0,255,127,0.03), rgba(0,255,127,0.03) 1px, transparent 2px, transparent 4px); mix-blend-mode: screen; }
</style>
