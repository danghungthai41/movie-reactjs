import React from "react";

export default function ScrollToTop() {
  React.useEffect(function () {
    window.scroll(0, 0);
  }, []);
  return null;
}
