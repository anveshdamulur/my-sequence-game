import React from 'react';
import Questions from './Questions';
const QuestionsForm = (props) => {
  console.log(props)
  return (
    <div>
      <form onSubmit={props.submit}>
        <Questions questions={props.questions} change={props.change} />
        <button className='ready__button' type='submit' value='Submit'>
          Ready
        </button>
      </form>
    </div>
  );
};

export default QuestionsForm;