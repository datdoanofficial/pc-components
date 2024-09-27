import React, { useEffect } from "react";

const injectCursorPosition = ({ x, y }: { x: number; y: number }) => {
  document.documentElement.style.setProperty("--x", Math.round(x).toString());
  document.documentElement.style.setProperty("--y", Math.round(y).toString());
};

const MouseMoveHandler: React.FC = () => {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      injectCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return null;
};

export default MouseMoveHandler;
