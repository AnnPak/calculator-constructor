import styles from "./calculator.module.scss";
import classnames from "classnames";
import { OPERATIONS, CALCULATOR_VALUES } from "../../utils/constants";
import { useEffect, useState } from "react";
const Calculator = () => {
  const calculatorValuesReverse = !!CALCULATOR_VALUES.length ? [...CALCULATOR_VALUES]?.reverse() : undefined;
  const [calculatorValue, setCalculatorValue] = useState<string>('');
  const [currentNumber, setCurrentNumber] = useState<string>('');
  const [currentOperation, setCurrentOperation] = useState<string|null>(null);

  const clickOnValue = (value:string) => {
    setCalculatorValue(calculatorValue.concat(value));
    setCurrentNumber(currentNumber.concat(value))
  }

  useEffect(() => {
    console.log(calculatorValue)
  }, [calculatorValue])
    
    return (
        <>
            <div className={classnames(styles.calculatorWrapper, "p-4")}>
                <p className={styles.calculatorDisplay}>{calculatorValue ? calculatorValue : 0}</p>
            </div>
            <div className={classnames(styles.calculatorWrapper, styles.operationsBlock, "p-4")}>
                {Object.entries(OPERATIONS).map(([key, value]) => (
                    <button
                        className={classnames(styles.operationsButton, styles.grayButton)}
                        key={key}
                        data-event={key}
                    >
                        {value}
                    </button>
                ))}
            </div>

            <div className={classnames(styles.calculatorWrapper, styles.calculatorValues, "p-4")}>
                {!!calculatorValuesReverse?.length &&
                    calculatorValuesReverse.map((value, index) => {
                        return (
                            <button
                                className={classnames(styles.operationsButton, styles.grayButton)}
                                key={index}
                                onClick ={() => clickOnValue(`${value}`)}
                            >
                                {value}
                            </button>
                        );
                    })}
            </div>
            <div className={classnames(styles.calculatorWrapper, "p-4")}>
                <button className={styles.resultBtn}>=</button>
            </div>
        </>
    );
};

export default Calculator;
