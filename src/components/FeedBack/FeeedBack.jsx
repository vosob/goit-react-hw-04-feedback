import React, { Component } from 'react';
import { FeedBackStatistics } from 'components/FeedBackStatistics/FeedBackStatistics';
import { Notification } from 'components/Notification/Notification';
import { Title, Btn, BtnContainer } from './FeedBack.styled';

export default class FeeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  get countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback;
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  addFeedback = feedbackType => {
    this.setState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    return (
      <div>
        <Title>Please leave feedback</Title>
        <BtnContainer>
          <Btn onClick={() => this.addFeedback('good')}>Good</Btn>
          <Btn onClick={() => this.addFeedback('neutral')}>Neutral</Btn>
          <Btn onClick={() => this.addFeedback('bad')}>Bad</Btn>
        </BtnContainer>
        <Title>Statistics</Title>
        {total === 0 ? (
          <Notification mess={'No feedback given'} />
        ) : (
          <FeedBackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
