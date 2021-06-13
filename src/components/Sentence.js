import React from 'react';
import './Sentence.css';
import Validation from './Validation';

const Sentence = (props) => {
  return (
    <div className='sentence__container'>
      <div
        className={
          props.sentence !== "Mark is coding on his computer today"
            ? 'sentence__loose'
            : 'sentence__win'
        }></div>
      <Validation sentence={props.sentence} />
      <p className="result">{props.sentence}</p>
      {props.sentence !== "Mark is coding on his computer today" ? (
        <button className='failure__btn' type='button' onClick={props.refresh}>
          Try again?
        </button>
      ) : (
        <button className='success__btn' type='button' onClick={props.refresh}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default Sentence;