import React, { useState } from "react";
import { PartyContainer } from "./container";
import { PartyAction } from "./action";
import { PartyView } from "./view";

export const Party: React.FC = () => {
  const { setIsHover } = PartyContainer();
  const actions = PartyAction({ setIsHover });

  return (
    <>
      <PartyView {...actions} />
    </>
  );
};
