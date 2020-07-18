import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "../../../common/src/components/Box";
import Image from "../../../common/src/components/Image";
import Text from "../../../common/src/components/Text";
import Heading from "../../../common/src/components/Heading";
import Container from "../../../common/src/components/UI/Container";
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from "./humanityBlock.style";

import { humanityData } from "../../../common/src/data/Charity";

const HumanityBlock = ({ row, col }) => {
  const { slogan, title, text, lists, image } = humanityData;
  return (
    <BlockWrapper id="socialFundraising">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content="CHOOSE THE RIGHT ORGANIZATIONS" />
              <Heading content="Get regular updates from the organizations you donate" />
              <Text content="We have all the scattered information aggregated on one platform so you can see and compare the performance of different organization " />
              <Text content="We keep records of every project that you donate to, so you get notifications as soon as an update is posted which helps you to decide whether to continue donating or shift the organization preference." />
              <Link href="#1">
                <a className="learn__more-btn">
                  <span className="hyphen" />
                  <span className="btn_text">Learn More </span>
                </a>
              </Link>
            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// HumanityBlock style props
HumanityBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // HumanityBlock col default style
  col: {
    width: ["100%", "50%", "50%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
};

export default HumanityBlock;
