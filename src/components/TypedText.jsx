import React from "react";
import Typed from 'typed.js';

export function TypedText({text}) {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
	React.useEffect(() => {
		const typed = new Typed(el.current, {
		  strings: [text],
		  typeSpeed: 50,
		  startDelay: 600
		});
	
		return () => {
		  // Destroy Typed instance during cleanup to stop animation
		  typed.destroy();
		};
	  }, []);
	
	  return (
	  	<span className="inline-block min-w-[20px]">
		  <span className="typed-text" ref={el} />
	    </span>
	  );
}
