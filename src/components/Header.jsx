import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside() {
      setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header>
      <div className="logo">
        <h1>Michael Jackson</h1>
      </div>
      <nav>
        <div className="biography-menu">
          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            Biography
          </button>

          {isOpen && (
            <div
              className="biography-dropdown"
              onClick={(event) => event.stopPropagation()}
            >
              <a href="#childhood">Childhood</a>
              <a href="#peak">Peak of Fame</a>
              <a href="#final-years">Final Years</a>
            </div>
          )}
        </div>
        <a href="#playlist">Playlist</a>
      </nav>
    </header>
  );
}

export default Header;
