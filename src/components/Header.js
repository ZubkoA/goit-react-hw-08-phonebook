import PropTypes from 'prop-types';
import { Container, Text } from '@chakra-ui/react';

function Header({ title, titleContacts }) {
  return (
    <Container>
      {title && (
        <Text
          fontSize="24px"
          color="black"
          as="abbr"
          fontWeight="semibold"
          textAlign="center"
        >
          {title}
        </Text>
      )}
      {titleContacts && (
        <Text
          fontSize="24px"
          color="black"
          as="abbr"
          fontWeight="semibold"
          textAlign="center"
        >
          {titleContacts}
        </Text>
      )}
    </Container>
  );
}
Header.propTypes = {
  title: PropTypes.string,
  titleContacts: PropTypes.string,
};
export default Header;
