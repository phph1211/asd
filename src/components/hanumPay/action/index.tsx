import React, { useState, useEffect } from "react";
import { HanumPayContainer } from "../container";
import { Animated, Easing } from "react-native";

export const HanumpayAction = () => {
  const [isPressed, setIsPressed] = useState(false);
  const fadeAnim = new Animated.Value(1);

  const handlePress = () => {
    setIsPressed(true);
    Animated.timing(fadeAnim, {
      toValue: 0.1,
      duration: 300,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
        useNativeDriver: false,
      }).start(() => {
        setIsPressed(false);
      });
    });
  };

  useEffect(() => {
    if (!isPressed) {
      fadeAnim.setValue(1);
    }
  }, [isPressed]);

  return { isPressed, handlePress, fadeAnim };
};
