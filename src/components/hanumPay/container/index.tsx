import React, { useState } from "react";

export const HanumPayContainer = () => {
  const [isPressed, setIsPressed] = useState(false);
  return { isPressed, setIsPressed };
};
