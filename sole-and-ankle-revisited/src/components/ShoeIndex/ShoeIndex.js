import React from "react";
import styled from "styled-components/macro";

import { MEDIA_QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const BreadcrumbsComponents = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleWrapper>
            <TabletBreadcrumbsWrapper>
              <BreadcrumbsComponents />
            </TabletBreadcrumbsWrapper>
            <Title>Running</Title>
          </TitleWrapper>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadcrumbsComponents />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media screen and (${MEDIA_QUERIES.maxTablet}) {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (${MEDIA_QUERIES.maxTablet}) {
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const TabletBreadcrumbsWrapper = styled.div`
  display: none;

  @media screen and (${MEDIA_QUERIES.maxTablet}) {
    display: revert;
  }
`;

const SelectWrapper = styled.div`
  @media screen and (${MEDIA_QUERIES.maxPhone}) {
    display: none;
  }
`;

export default ShoeIndex;
