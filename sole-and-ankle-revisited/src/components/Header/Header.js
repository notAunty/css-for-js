import React from "react";
import styled from "styled-components/macro";

import { COLORS, MEDIA_QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side>
          <MobileNav>
            <Icon id="shopping-bag" color="black" />
            <Icon id="search" color="black" />
            <MenuButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" color="black" />
            </MenuButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: max(32px, 4vw);
  margin: 0px 48px;
  margin-left: 48px;

  @media screen and (${MEDIA_QUERIES.maxTablet}) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  align-items: baseline;

  @media screen and (${MEDIA_QUERIES.maxTablet}) {
    display: flex;
    gap: 48px;
    justify-content: flex-end;
  }

  @media screen and (${MEDIA_QUERIES.maxPhone}) {
    gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;
  align-items: baseline;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MenuButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
`;

export default Header;
