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
import { Box, Typography, Grid, Paper, Divider } from "@material-ui/core";

const FundraiserSection = () => {
  return (
    <Grid item md={12} style={{ marginTop: "40px", marginRight: "10px" }}>
      <Image src="/image/charity/branch/image2.jpg" alt="Charity" />

      <Heading as="h4" content="Helping Hand For The Homeless" />
      <Divider />

      <Text content="Date: 03/21/2020" />
      <Divider />
      <Text content="Donation Size: PKR. 40.00" />
      <Divider />
      <Text content="Location: Lahore" />
      <Divider />
      <a href="/project">
        <Button
          title="See Details"
          variant="textButton"
          fullWidth
          style={{
            marginTop: "20px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "100%",
            height: "auto",
            border: "0",
            fontSize: "15px",
            fontWeight: "700",
            borderRadius: "10px",
            cursor: "pointer",
            color: "#FFFFFF",
            backgroundColor: "#05B890",
            position: "relative",
            overflow: "hidden",
            zIndex: "1",
          }}
        />
      </a>
    </Grid>
  );
};

export default FundraiserSection;
