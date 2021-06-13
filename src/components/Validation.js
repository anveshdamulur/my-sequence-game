import React from 'react';
import './Validation.css';
const Validation = (props) => {
  return (
    <h2
      className={
        props.sentence === "Mark is coding on his computer today"
          ? 'validation__text__green'
          : 'validation__text__red'
      }>
      {props.sentence === "Mark is coding on his computer today" ? 'You nailed it!' : 'Sorry, Better luck next time !'}
    </h2>
  );
};

export default Validation;