import { Btn, List } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, addFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Btn type="button" onClick={() => addFeedback(option)}>
            {option}
          </Btn>
        </li>
      ))}
    </List>
  );
};
