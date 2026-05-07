export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>欢迎来到 crystalSite</h1>
      <p>这是一个使用 Next.js 构建的前端，搭配 Go 后端和 MySQL 数据库。</p>
      <ul>
        <li>前端目录：<code>frontend/</code></li>
        <li>后端目录：<code>backend/</code></li>
        <li>数据库结构：<code>backend/db/schema.sql</code></li>
      </ul>
    </main>
  );
}
