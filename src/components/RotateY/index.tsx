import React, { CSSProperties, FC, ReactNode } from "react";
import "./index.styl";

const RotateY: FC<{
  back: ReactNode;
  style?: CSSProperties | {};
}> = ({ children, back, style }) => {
  return (
    <div className="card" style={{ ...style }}>
      <div className="front">{children}</div>
      <div className="back">{back}</div>
    </div>
  );
};

export default RotateY;
