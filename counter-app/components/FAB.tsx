import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface Props {
  label: string;

  position?: "left" | "right";
  // Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === "left" ? styles.positionLeft : styles.positionRight,
        pressed && { backgroundColor: "darkblue", opacity: 0.7 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    // Sombreado en Ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  positionRight: {
    right: 20,
  },

  positionLeft: {
    left: 20,
  },
});
