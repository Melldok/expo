import { useEffect, useRef, useState } from "react";

enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      setFormula(`${prevNumber} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {}, [number]);

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
      // Evitar 0000.0
      if (numberString === "0" && !number.includes(".")) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };

  const deleteNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes("-"))) {
      setNumber("0");
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const setLastNumber = () => {
    if (number.endsWith(".")) {
      setNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const multiPly = () => {
    setLastNumber();
    lastOperation.current = Operator.MULTIPLY;
  };

  const divide = () => {
    setLastNumber();
    lastOperation.current = Operator.DIVIDE;
  };

  const subtract = () => {
    setLastNumber();
    lastOperation.current = Operator.SUBTRACT;
  };

  const add = () => {
    setLastNumber();
    lastOperation.current = Operator.ADD;
  };

  const calculate = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.ADD:
        return setNumber(`${num1 + num2}`);
      case Operator.SUBTRACT:
        return setNumber(`${num1 - num2}`);
      case Operator.MULTIPLY:
        return setNumber(`${num1 * num2}`);
      case Operator.DIVIDE:
        return setNumber(`${num1 / num2}`);
      default:
        throw new Error(`Unknown operation '${operation}'`);
    }
  };

  return {
    // Properties

    formula,
    number,
    prevNumber,

    // Methods

    buildNumber,
    setLastNumber,
    clean,
    toggleSign,
    deleteNumber,
    multiPly,
    divide,
    subtract,
    add,
    calculate,
  };
};
