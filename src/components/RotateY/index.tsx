import React, { CSSProperties, FC, ReactNode } from "react";
import "./index.styl";

const RotateY: FC<{
  back?: ReactNode;
  style?: CSSProperties | {};
  width: string;
}> = ({ children, back, style, width }) => {
  return (
    <div className="card" style={{ width, ...style }}>
      <div className="front">{children}</div>
      <div className="back">{back}</div>
    </div>
  );
};

export default RotateY;
