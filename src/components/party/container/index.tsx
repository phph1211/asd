import React, { useState } from "react";

export const PartyContainer = () => {
  const [isHover, setIsHover] = useState(false);
  return { isHover, setIsHover };
};
