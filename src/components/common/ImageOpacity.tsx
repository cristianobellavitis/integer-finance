import React from "react";

const ImageOpacity = ({ opacity }: { opacity: number }) => {
  return (
    <div
      className="absolute inset-0 bg-black"
      style={{ opacity: Number(opacity) / 100 }}
    />
  );
};

export default ImageOpacity;
