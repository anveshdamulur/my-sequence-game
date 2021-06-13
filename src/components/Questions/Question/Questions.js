import React from 'react';
import './Question.css';
const Question = (props) => {
  return (
    <div className='question'>
      <label className='question__label' htmlFor={props.questionName}>
        {props.questionName}
      </label>
      <input
        className='question_input'
        type='text'
        name={props.questionName}
        onChange={props.change}
        required
      />
    </div>
  );
};

export default Question;