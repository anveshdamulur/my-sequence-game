import { ActionTypes } from "../constants/actionTypes";

export const handleQuestionsSubmit = (data) => ({
    type: ActionTypes.HANDLE_QUESTIONS_SUBMIT,
    data,
    });

export const handleQuestionsChange = ({name, value}) => ({
    type: ActionTypes.HANDLE_QUESTIONS_CHANGE,
    name,
    value,
    });
  
export const selectDisplayed = (displayed) => {
    return {
      type: ActionTypes.SELECT_DISPLAYED,
      displayed,
    }};
  
export const resetApp = () => ({
    type:ActionTypes.RESET_APP,
    });