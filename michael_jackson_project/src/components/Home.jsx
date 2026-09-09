function Home() {
  return (
    <section id="home">
      <div className="hero-image">
        <img src="/preview.home.png" alt="Michael Jackson sihouette" />
      </div>
      <div className="hero-content">
        <p>The voice.</p>
        <p>The movement.</p>
        <p>The legend.</p>
        <p>The story of one man</p>
        <p>who changed the world…</p>

        <div className="hero-buttons">
          <a href="#childhood">Biography</a>
          <a href="#playlist">Playlist</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
