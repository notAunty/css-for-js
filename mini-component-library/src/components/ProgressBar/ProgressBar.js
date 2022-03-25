/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let styleProp;
  switch (size) {
    case "large":
      styleProp = {
        "--height": "24px",
        "--padding": "4px",
      };
      break;
    case "medium":
      styleProp = {
        "--height": "12px",
      };
      break;
    case "small":
      styleProp = {
        "--height": "8px",
      };
      break;
    default:
      styleProp = {
        "--height": "8px",
      };
  }

  return (
    <Wrapper style={styleProp}>
      <RoundedBorder>
        <InnerBar
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </RoundedBorder>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  border-radius: 8px;
  height: var(--height);
  padding: var(--padding, 0);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

const RoundedBorder = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const InnerBar = styled.div`
  width: 0%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
