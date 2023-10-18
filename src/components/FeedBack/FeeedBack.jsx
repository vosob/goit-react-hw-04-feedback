import React, { Component } from 'react';
import { FeedBackStatistics } from 'components/FeedBackStatistics/FeedBackStatistics';
import { FeedBackOptions } from 'components/FeedBackOptions/FeedBackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export default class FeeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  addFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedBackOptions
            options={Object.keys(this.state)}
            addFeedback={this.addFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification mess="There is no feedback" />
        ) : (
          <>
            <Section title={'Statistics'}>
              <FeedBackStatistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          </>
        )}
      </>
    );
  }
}
