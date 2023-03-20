import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  currentValue: string,
  isAnswer: boolean,
}
const initialState:TInitialState = {
  currentValue: '',
  isAnswer: false,
}
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    changeCalcValue: (state, action) => {
      state.currentValue = state.currentValue.concat(action.payload)
      state.isAnswer = false;
    },
    getAnswer: (state) => {
      let currentValue = state.currentValue;
      currentValue = currentValue.replaceAll(',', ".");
      currentValue = currentValue.replaceAll("X", "*");

      state.isAnswer = true;

      const answer = eval(currentValue);
      state.currentValue = `${answer}`;
      if(!Number.isInteger(answer) && Number.isFinite(answer)){
        state.currentValue = `${parseFloat(answer.toFixed(3))}`;
      }else{
        state.currentValue = `${answer}`;
      }
    },
  },
 
})

const { reducer, actions } = calculatorSlice;

export default reducer;
export const {changeCalcValue, getAnswer} = actions
export {reducer as calculatorReducer};