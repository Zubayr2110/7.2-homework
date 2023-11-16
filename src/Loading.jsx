import React, { useState, useEffect } from "react";
import "./Loading.css";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="loadingcontainer">
      {loading && (
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
      )}

      <img
        style={{ display: loading ? "none" : "block" }}
        width="100%"
        src="https://unsplash.it/3000/3000/?random"
        alt="Random Image"
      />
    </div>
  );
}
