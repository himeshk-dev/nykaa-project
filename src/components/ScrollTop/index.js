import React, { useEffect, useState } from "react";
import upIcon from "../../assets/up-arrow.svg";

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollhandler);
    return () => {
      window.removeEventListener("scroll", scrollhandler);
    };
  }, []);
  const scrollhandler = () => {
    window.pageYOffset > 100 ? setShow(true) : setShow(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return show ? (
    <button className="Scroll-container" onClick={scrollToTop}>
      <img src={upIcon} alt="scroll_to_top" />
    </button>
  ) : null;
}

export default ScrollTop;
