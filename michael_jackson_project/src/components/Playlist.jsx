import { useState } from "react";

function Playlist() {
  const songs = [
    {
      name: "Billie Jean",
      videoId: "Zi_XLOBDo_Y",
    },
    {
      name: "Beat It",
      videoId: "oRdxUFDoQe0",
    },
    {
      name: "Thriller (full video)",
      videoId: "sOnqjkJTMaA",
    },
    {
      name: "Thriller",
      videoId: "Z85lxckrtzg",
    },
    {
      name: "Bad",
      videoId: "dsUXAEzaC3Q",
    },
    {
      name: "Smooth Criminal",
      videoId: "sFvENQBc-F8",
    },
    {
      name: "They Don't Care About Us",
      videoId: "QNJL6nfu__Q",
    },
    {
      name: "Earth Song",
      videoId: "XAi3VTSdTxU",
    },
    {
      name: "Blood On The Dance Floor",
      videoId: "c3_NntYhzV4",
    },
    {
      name: "Off the Wall",
      videoId: "g0ViBH7m4XA",
    },
    {
      name: "The Way You Make Me Feel",
      videoId: "uzbnrfd9vLQ",
    },
    {
      name: "Wanna Be Startin' Somethin'",
      videoId: "8KWf_-ofYgI",
    },
  ];

  const [activeEmbed, setActiveEmbed] = useState(songs[0].videoId);
  return (
    <section id="playlist" className="playlist-section">
      <h2>Greatest Hits</h2>

      <div className="playlist-content">
        <div className="song-list">
          {songs.map((song) => (
            <button
              key={song.videoId}
              onClick={() => setActiveEmbed(song.videoId)}
            >
              {song.name}
            </button>
          ))}
        </div>

        <div className="player-wrapper">
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube-nocookie.com/embed/${activeEmbed}`}
            title="Michael Jackson Music Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
export default Playlist;
