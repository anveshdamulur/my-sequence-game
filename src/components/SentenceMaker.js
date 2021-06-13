import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  handleQuestionsSubmit,
  handleQuestionsChange,
  resetApp,
} from '../redux/actions/sentenceActions';
import './SentenceMaker.css';
import Sentence from './Sentence';
import QuestionsForm from './Questions/QuestionsForm';
class SentenceMaker extends Component {
  handleChange = (e) => {
    this.props.onQuestionsChange(e.target.name, e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitAnswers({
      isSubmitted: !this.props.isSubmitted,
      disabled: !this.props.disabled,
    });
  };

  pageRefresh = () => {
    this.props.resetApp();
  };

  render() {
    const state = this.props.sentences;
    const {Who, What, Where, When} = state.answers;

    return (
      <div className='sentence__maker__container'>
        {!state.isSubmitted ? (
          <QuestionsForm
            
            submit={this.handleSubmit}
            questions={state.questions}
            change={this.handleChange}
          />
        ) : (
          <Sentence
            sentence={Who + ' ' + What + ' ' + Where + ' ' + When}
            refresh={this.pageRefresh}
          />
        )}

        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    sentences: state.sentenceReducer,
  });
const mapDispatchToProps = (dispatch) => ({
  submitAnswers: (data) =>
    dispatch(
      handleQuestionsSubmit({
        isSubmitted: data.isSubmitted,
        disabled: data.disabled,
      })
    ),
  onQuestionsChange: (name, value) =>
    dispatch(
      handleQuestionsChange({
        name,
        value,
      })
    ),
  resetApp: () => dispatch(resetApp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceMaker);
