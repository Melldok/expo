import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

// acepta props por defecto del componente Text (Puedes pasarle porps originales mediante herencia, como style, numberOfLines, etc)

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

export const Themetext = ({
  children,
  variant = "h1",
  ...restOfPropsSentByParent
}: Props) => {
  return (
    <Text
      {...restOfPropsSentByParent}
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
    >
      {children}
    </Text>
  );
};
