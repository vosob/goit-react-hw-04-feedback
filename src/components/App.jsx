import React, { useState } from 'react';
import { FeedBackStatistics } from 'components/FeedBackStatistics/FeedBackStatistics';
import { FeedBackOptions } from 'components/FeedBackOptions/FeedBackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedbackState;
  const total = good + neutral + bad;
  const options = Object.keys(feedbackState);

  const addFeedback = option => {
    setFeedbackState(prevCounts => ({
      ...prevCounts,
      [option]: prevCounts[option] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((feedbackState.good / total) * 100) : 0;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedBackOptions options={options} addFeedback={addFeedback} />
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
              positiveFeedback={countPositiveFeedbackPercentage()}
            />
          </Section>
        </>
      )}
    </>
  );
};

export default App;
