import React, {Component} from 'react';
import {connect} from 'react-redux';
import SentenceMaker from './SentenceMaker';
import { selectDisplayed } from '../redux/actions/sentenceActions';

class InitialView extends Component {
  renderComponent = () => {
    switch (this.props.displayed) {
      case 'SentenceMaker':
        return <SentenceMaker />;
      default:
        return <SentenceMaker />;
    }
  };
  render() {
    return <div className='App'>{this.renderComponent()}</div>;

  }
}
const mapStateToProps = (state) => {
  return {
    displayed: state.sentenceReducer.displayed,
  };
};
const mapDispatchToProps = (dispatch) => ({
  selectDisplayed: (displayed) => dispatch(selectDisplayed(displayed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitialView);