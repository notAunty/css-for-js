import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let styles;
  if (size === "small") {
    styles = {
      "--padding": "4px",
      "--border-thickness": "1px",
      "--text-left-padding": "24px",
    };
  } else if (size === "large") {
    styles = {
      "--padding": "6px",
      "--border-thickness": "2px",
      "--text-left-padding": "36px",
    };
  }

  return <Wrapper style={{width, ...styles}}>
    <VisuallyHidden>
      {label}
    </VisuallyHidden>
    <Icon id={icon} size={size === "small" ? 14 : 18}/>
    <Input placeholder={placeholder}/>
  </Wrapper>;
};

const Wrapper = styled.label`
  display: block;
  isolation: isolate;
  padding: var(--padding) 0;
  border-bottom: var(--border-thickness, 1) solid ${COLORS.black};
  position: relative;

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${24 / 16}rem;
  background-color: transparent;

  color: inherit;
  font-weight: 700;

  border: none;
  padding-left: var(--text-left-padding);

  &:focus {
    outline-offset: 2px;
    /*
    NOT REQUIRED
    outline: 2px dotted black;
    outline: 5px auto -webkit-focus-ring-color; 
    */
  }

  &::placeholder {
    font-weight: 400;
  }
`;

export default IconInput;
