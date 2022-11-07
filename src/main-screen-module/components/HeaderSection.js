import React from "react";
import styled from "styled-components";
import { Button, Container, OutlineButton } from "../../assets/styles/globalStyles";
import { Heading, FontWeight, FontStyle, Text } from "styled-typography";

function HeaderSection() {
  const HeaderWrapper = styled.header`
    width: 100%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  `;
  const BreadcrumbsNav = styled.div`
    display: flex;
    width: 15%;
    padding-top:10px;
  `;
  const OrderTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top:10px;
    padding-bottom:15px;
`;
  return (
    <HeaderWrapper>
      <Container>
        <BreadcrumbsNav>
          <Text level={2} fontWeight={FontWeight.Light} lineHeight={1.3}>
            Order {">"}
          </Text>
          <Text level={2} fontWeight={FontWeight.Light} lineHeight={1.3} style={{textDecoration:"underline",paddingLeft:"7px"}}>
            Order 32457ABC
          </Text>
        </BreadcrumbsNav>
        <OrderTitleWrapper>
          <Heading
            level={6}
            displayLevel={6} 
            fontWeight={FontWeight.Bold}
            fontStyle={FontStyle.Normal}
            lineHeight={1}
          >
            Order 32457ABC
          </Heading>
          <div>
            <Button button={"secondary"}>Back</Button>
            <Button button={"primary"}>Approve Order</Button>
          </div>
        </OrderTitleWrapper>
      </Container>
    </HeaderWrapper>
  );
}

export default HeaderSection;
