import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
interface Props {
  label: string;
  color?: string;
  textBlack?: boolean;
  onPress: () => void;
  doubleSize?: boolean;
}

export const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  textBlack = false,
  onPress,
  doubleSize = false,
}: Props) => {


    
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 170 : 80,
      })}
      onPress={() => {
        // Haptics
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: textBlack ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
