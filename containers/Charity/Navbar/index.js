import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../../common/src/components/UIElements/Logo";
import Image from "../../../common/src/components/Image";
import Container from "../../../common/src/components/UI/Container";
import NavbarWrapper, { MenuWrapper, Button } from "./navbar.style";
import Link from "next/link";
import { useData, useDispatchUser } from "../../../lib/userData";

const Navbar = () => {
  const user = useData();

  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link href="/">
          <Logo
            logoSrc="/image/charity/logo.png"
            className="logo"
            title="Charity React Next Landing"
          />
        </Link>
        <MenuWrapper>
          <a
            href="/account_o"
            style={{ marginRight: "10px", color: "#060F1E" }}
          >
            <span className="smooth_scroll">Organize Fundraiser</span>
          </a>
          {user["id"] ? (
            user.user.role.name == "Donor" ? (
              <Link href="/account">
                <Button>
                  <span className="text">My Account</span>
                  {/* <Image src={heartImage} alt="Charity Landing" /> */}
                </Button>
              </Link>
            ) : (
              <Link href="/account_o">
                <Button>
                  <span className="text">My Account</span>
                  {/* <Image src={heartImage} alt="Charity Landing" /> */}
                </Button>
              </Link>
            )
          ) : (
            <Link href="/signin">
              <Button>
                <span className="text">Sign In</span>
                {/* <Image src={heartImage} alt="Charity Landing" /> */}
              </Button>
            </Link>
          )}
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
