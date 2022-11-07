import React from "react";
import styled from "styled-components";

function NavBar() {
  const NavBarWrapper = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    background-color: #1e633f;
    position: sticky;
    top: 0;
    z-index: 100;
  `;
  const NavImg = styled.img`
    width: auto;
    object-fit: contain;
    margin: 0 20px;
  `;
  const ProfileButton = styled.img`
  width: auto;
  object-fit: contain;
  margin: 0 20px;
`;
  const NavOptionsWrapper = styled.div`
        display: flex;
    align-items: center;
    justify-content: center;
  `;
  const NavOption = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
  `;
  const CheckoutButton = styled.img``

  return (
    <>
      <NavBarWrapper>
        <NavOptionsWrapper>
        <NavImg src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667388846/reeco/61d55f72e02791825a9a1232_reeco-logo-white_m6fyuw.svg" />
        <NavOptionsWrapper>
          <NavOption>Store</NavOption>
          <NavOption>Order</NavOption>
          <NavOption>Analytics</NavOption>
        </NavOptionsWrapper>
        </NavOptionsWrapper>
        <NavOptionsWrapper>
        <NavImg src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667400559/reeco/icons8-checkout-30_nadj56.png"/>
        <NavOption>
            Hello, James
            </NavOption>
            <ProfileButton src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667401694/reeco/icons8-expand-arrow-24_1_np3fgd.png"></ProfileButton>
        </NavOptionsWrapper>
      </NavBarWrapper>
    </>
  );
}

export default NavBar;
