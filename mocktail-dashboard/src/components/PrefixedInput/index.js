import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import { API_MOCKTAIL_URL } from '../../utils/paths';
import PropTypes from 'prop-types';

const PrefixedInput = (props) => {
  const { HTTP_METHODS, selectedMethod, setSelectedMethod } = props;
  return (
    <Col>
      <label htmlFor="basic-url">Your Mock Endpoint</label>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title={selectedMethod || 'GET'}
          id="input-group-dropdown-2"
          align="end"
          onSelect={(key) => setSelectedMethod(key)}>
          <Dropdown.Item eventKey={HTTP_METHODS?.GET}>{HTTP_METHODS?.GET}</Dropdown.Item>
          <Dropdown.Item eventKey={HTTP_METHODS?.POST}>{HTTP_METHODS?.POST}</Dropdown.Item>
          <Dropdown.Item eventKey={HTTP_METHODS?.PUT}>{HTTP_METHODS?.PUT}</Dropdown.Item>
          <Dropdown.Item eventKey={HTTP_METHODS?.DELETE}>{HTTP_METHODS?.DELETE}</Dropdown.Item>
        </DropdownButton>
        <InputGroup.Text id="basic-addon3">{API_MOCKTAIL_URL}</InputGroup.Text>
        <FormControl
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={props.onChange}
          autoComplete="off"
        />
      </InputGroup>
    </Col>
  );
};

export default PrefixedInput;

PrefixedInput.propTypes = {
  onChange: PropTypes.func,
  setSelectedMethod: PropTypes.func,
  HTTP_METHODS: PropTypes.object,
  selectedMethod: PropTypes.string
};
