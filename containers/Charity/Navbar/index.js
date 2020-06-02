import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../../common/src/components/UIElements/Logo";
import Image from "../../../common/src/components/Image";
import Container from "../../../common/src/components/UI/Container";
import NavbarWrapper, { MenuWrapper, Button } from "./navbar.style";

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Logo
          href="/"
          logoSrc="/image/charity/logo.png"
          className="logo"
          title="Charity React Next Landing"
        />
        <MenuWrapper>
          <a
            href="/account_o"
            style={{ marginRight: "10px", color: "#060F1E" }}
          >
            <span className="smooth_scroll">Organize Fundraiser</span>
          </a>
          <a href="/account" style={{ margin: "0px" }}>
            <Button>
              <span className="text">Sign In</span>
              {/* <Image src={heartImage} alt="Charity Landing" /> */}
            </Button>
          </a>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
