import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/filter/filterReducer';
import { Container, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value;
    dispatch(filterValue(value));
  };
  return (
    <Container mt={5}>
      <FormControl>
        <FormLabel as="i">
          Find contact by name
          <Input
            mt={2}
            type="text"
            placeholder="Enter name of your contact"
            name="filter"
            onChange={onChange}
          />
        </FormLabel>
      </FormControl>
    </Container>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
