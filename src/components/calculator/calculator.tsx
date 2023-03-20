import styles from "./calculator.module.scss";
import classnames from "classnames";
import { OPERATIONS, CALCULATOR_VALUES } from "../../utils/constants";
import { changeCalcValue, getAnswer } from "../../redux/calculator";
import { useAppSelector, useAppDispatch } from "../../redux/store";
const Calculator = () => {
    const { currentValue, isAnswer } = useAppSelector((store) => store.calculatorReducer);
    const dispatch = useAppDispatch();

    const calculatorValuesReverse = !!CALCULATOR_VALUES.length
        ? [...CALCULATOR_VALUES]?.reverse()
        : undefined;
   
    const buttonValueOnClick = (value: string) => {
        dispatch(changeCalcValue(value));
    };

    const buttonResult = () => {
        dispatch(getAnswer());
    };

    const lengthCurrentValue = currentValue.length;
    return (
        <section>
            <div className={classnames(styles.calculatorWrapper, "p-4")}>
                <p className={classnames(styles.calculatorDisplay, lengthCurrentValue >= 10  && isAnswer && styles.calculatorDisplayAnswer)}>{currentValue ? currentValue : 0}</p>
            </div>
            <div className={classnames(styles.calculatorWrapper, styles.operationsBlock, "p-4")}>
                {Object.entries(OPERATIONS).map(([key, value]) => (
                    <button
                        className={classnames(styles.operationsButton, styles.grayButton)}
                        key={key}
                        onClick={() => buttonValueOnClick(value)}
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
                                onClick={() => buttonValueOnClick(`${value}`)}
                            >
                                {value}
                            </button>
                        );
                    })}
            </div>
            <div className={classnames(styles.calculatorWrapper, "p-4")}>
                <button className={styles.resultBtn} onClick={() => buttonResult()}>
                    =
                </button>
            </div>
        </section>
    );
};

export default Calculator;
