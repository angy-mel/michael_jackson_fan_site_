import { timelineData } from "./data";
import Header from "./components/Header";
import Home from "./components/Home";
import Playlist from "./components/Playlist";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <section id="biography">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              id={
                index === 0
                  ? "childhood"
                  : index === 9
                    ? "peak"
                    : index === 15
                      ? "final-years"
                      : undefined
              }
              className="bio-row"
            >
              <div className="side-column">
                {index % 2 === 0 && <img src={item.image} alt={item.title} />}
              </div>
              <div
                className={`center-column ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <p className="item-title">{item.title}</p>
                <p className="item-description">{item.description}</p>
              </div>
              <div className="side-column">
                {index % 2 !== 0 && <img src={item.image} alt={item.title} />}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Playlist />
    </>
  );
}

export default App;
