import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InnerSelect id="inner" value={value} onChange={onChange}>
        {children}
      </InnerSelect>
      <SelectedItemText>{displayedValue}</SelectedItemText>
      <SelectIcon>
        <Icon size={22.5} id="chevron-down" />
      </SelectIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  padding: 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  position: relative;
`;

const InnerSelect = styled.select`
  opacity: 0;
  appearance: none; /* Hide select default appearance */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`;

const SelectedItemText = styled.span``;

const SelectIcon = styled.span`
  width: fit-content;
  display: inline-block;
  vertical-align: middle;
  margin-left: 24px;
`;

export default Select;
