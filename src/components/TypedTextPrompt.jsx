import React from "react";
import Typed from "typed.js";

export function TypedTextPrompt({ text }) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 50,
      startDelay: 600,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <span className="typed-text-prompt">
      <span className="prompt">$ </span>
      <span className="inline-block min-w-[21px] accent-text-gradient">
        <span className="typed-text" ref={el} />
      </span>
    </span>
  );
}
