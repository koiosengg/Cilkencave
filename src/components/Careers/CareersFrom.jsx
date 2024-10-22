import React, { useEffect } from "react";

function CareersFrom() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/242911079305454";
    script.async = true;

    const container = document.getElementById("jotform-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div id="jotform-container" style={{ width: "100%" }}></div>
    </div>
  );
}

export default CareersFrom;
