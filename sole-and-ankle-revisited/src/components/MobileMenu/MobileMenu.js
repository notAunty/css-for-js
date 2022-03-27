/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close">
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </Icon>
        </CloseButton>
        <MobileNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MobileNav>
        <MobileFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MobileFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  position: relative;
  width: 85%;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  > a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${18 / 16}rem;
    color: black;
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
      color: ${COLORS.secondary};
    }
  }
`;

const MobileFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > a {
    font-size: ${12 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    text-decoration: none;
    color: hsl(210 5% 40%);
  }
`;

export default MobileMenu;
