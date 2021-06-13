import React from 'react';
import Question from './Question/Questions';

const Questions = (props) =>
  props.questions.map((question) => {
    return (
      <Question
        questionName={question.questionName}
        change={(e) => props.change(e)}
        key={question.id}
      />
    );
  });

export default Questions;