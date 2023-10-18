import { Text } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Text>{title}</Text>
      {children}
    </>
  );
};
