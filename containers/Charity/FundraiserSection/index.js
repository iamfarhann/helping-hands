import React from "react";
import Link from "next/link";
import Container from "../../../common/src/components/UI/Container";
import Heading from "../../../common/src/components/Heading";
import Button from "../../../common/src/components/Button";
import Text from "../../../common/src/components/Text";
import Image from "../../../common/src/components/Image";
import { Icon } from "react-icons-kit";
import { twitter } from "react-icons-kit/fa/twitter";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
  DonationProgressbar,
  BarArea,
  CurrentStatus,
  ShareArea,
  DonateButton,
  ShareList,
  Item,
} from "./fundraiserSection.style";

const FundraiserSection = () => {
  return (
    <SectionWrapper id="fundraisers">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="Browse Fundraisers" />
          <Text content="People around the world are raising money for what they are passionate about. " />
        </SectionHeader>
        <ContentArea>
          <ImageWrapper>
            <Image src="/image/charity/fundraisers.png" alt="Charity" />
          </ImageWrapper>
          <TextWrapper>
            <TextAndLink>
              <Heading as="h4" content="START FUNDRAISING" />
              <Link href="#1">
                <a className="text_btn">
                  SEE ALL <i className="flaticon-next" />
                </a>
              </Link>
            </TextAndLink>
            <Heading as="h3" content="Helping Hand For The Homeless" />
            <Text
              content="We are organizing a program on January 20, 2019 to help the homeless people. Our aim is to provide them a 
            specific place to live.
            "
            />
            <DonationProgressbar>
              <BarArea>
                <CurrentStatus>
                  <strong>$95</strong> of $2,000 goal
                </CurrentStatus>
                <Text content="Last donation 9m ago" />
              </BarArea>
              <Heading as="h5" content="Raised by 10 people in 1 month" />
            </DonationProgressbar>

            <ShareArea>
              <a href="/project">
                <Button
                  title="DONATE NOW"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "230px",
                    height: "65px",
                    border: "0",
                    fontSize: "15px",
                    fontWeight: "700",
                    borderRadius: "10px",
                    cursor: "pointer",
                    color: "#060F1E",
                    backgroundColor: "#C3EEE4",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: "1",
                  }}
                />
              </a>
              {/* <Image src="/image/charity/heart.svg" alt="Charity Landing" /> */}
              <ShareList>
                <Item>Share on</Item>
                <Item>
                  <Link href="#1">
                    <a
                      target="_blank"
                      className="twitter"
                      aria-label="social share link"
                    >
                      <Icon icon={twitter} />
                    </a>
                  </Link>
                </Item>
                <Item>
                  <Link href="#1">
                    <a
                      target="_blank"
                      className="facebook"
                      aria-label="social share link"
                    >
                      <Icon icon={facebookSquare} />
                    </a>
                  </Link>
                </Item>
              </ShareList>
            </ShareArea>
          </TextWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default FundraiserSection;
