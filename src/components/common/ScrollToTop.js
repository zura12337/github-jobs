import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import CSSTransition from "react-transition-group/CSSTransition";

export default function ScrollToTop() {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", checkYOffset);
  }, []);

  const checkYOffset = () => {
    if (window.pageYOffset <= 1000) {
      setScrollToTopVisible(false);
    } else {
      setScrollToTopVisible(true);
    }
  };
  return (
    <CSSTransition
      in={scrollToTopVisible}
      timeout={300}
      classNames="scroll"
      unmountOnExit={true}
    >
      <div>
        <button onClick={() => scroll.scrollToTop()} className="scroll-to-top">
          <img
            src={require("../../assets/arrow-up-thick.svg")}
            alt="scroll-to-top"
          />
        </button>
      </div>
    </CSSTransition>
  );
}
