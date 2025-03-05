import { CalculatorButton } from "@/components/CalculatorButton";
import { Themetext } from "@/components/Themetext";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View, Text } from "react-native";

const HapticCalculator = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteNumber,
    add,
    multiPly,
    subtract,
    calculate,
    divide,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View
        style={{
          paddingHorizontal: 30,
          marginBottom: 20,
        }}
      >
        <Themetext numberOfLines={1} adjustsFontSizeToFit variant="h1">
          {formula}
        </Themetext>
        <Themetext variant="h2">{prevNumber}</Themetext>

        {/* Filas de botones */}

        <View style={globalStyles.row}>
          <CalculatorButton
            onPress={clean}
            textBlack
            color={Colors.lightGray}
            label="C"
          />
          <CalculatorButton
            onPress={toggleSign}
            textBlack
            color={Colors.lightGray}
            label="+/-"
          />
          <CalculatorButton
            onPress={deleteNumber}
            textBlack
            color={Colors.lightGray}
            label="del"
          />
          <CalculatorButton onPress={divide} color={Colors.orange} label="÷" />
        </View>

        <View style={globalStyles.row}>
          <CalculatorButton onPress={() => buildNumber("7")} label="7" />
          <CalculatorButton onPress={() => buildNumber("8")} label="8" />
          <CalculatorButton onPress={() => buildNumber("9")} label="9" />
          <CalculatorButton
            onPress={multiPly}
            color={Colors.orange}
            label="X"
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton onPress={() => buildNumber("4")} label="4" />
          <CalculatorButton onPress={() => buildNumber("5")} label="5" />
          <CalculatorButton onPress={() => buildNumber("6")} label="6" />
          <CalculatorButton
            onPress={subtract}
            color={Colors.orange}
            label="-"
          />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton onPress={() => buildNumber("1")} label="1" />
          <CalculatorButton onPress={() => buildNumber("2")} label="2" />
          <CalculatorButton onPress={() => buildNumber("3")} label="3" />
          <CalculatorButton onPress={add} color={Colors.orange} label="+" />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton
            doubleSize
            onPress={() => buildNumber("0")}
            label="0"
          />
          <CalculatorButton onPress={() => buildNumber(".")} label="." />
          <CalculatorButton onPress={calculate} label="=" />
        </View>
      </View>
    </View>
  );
};

// Cuando definimos rutas, es importante exportar el componente en default

export default HapticCalculator;
