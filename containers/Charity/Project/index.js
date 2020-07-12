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
import { GET_PROJECT } from "../../../lib/queries";

import Skeleton from "@material-ui/lab/Skeleton";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Moment from "moment";

const FundraiserSection = ({ project }) => {
  const { data, loading, error, refetch } = useQuery(GET_PROJECT, {
    variables: { id: project.id },
    skip: !project,
  });

  return (
    <>
      {!data ? (
        <Box width="100%" p={2}>
          <Skeleton variant="rect" width="100%" height="170px" />
          <Skeleton width="100%" />
          <Divider />
          <Skeleton width="50%" />
          <Divider />
          <Skeleton width="70%" />
          <Divider />
          <Skeleton width="30%" />
          <Divider />
          <Skeleton variant="rect" width="100%" height="30px" />
        </Box>
      ) : (
        <Box width="100%" p={2}>
          <Image
            loading="lazy"
            src={`${process.env.PLAIN_URL}${data.project.titleImage.url}`}
            alt="Project Image"
            style={{
              marginBottom: "10px",
              height: "150px",
              objectFit: "cover",
            }}
          />

          <Heading
            as="h4"
            content={data.project.name}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          />

          <Divider style={{ marginBottom: "5px" }} />

          <Text
            content={`Date: ${Moment(data.project.createdAt).format(
              "DD-MM-YYYY"
            )}`}
          />
          <Divider style={{ marginBottom: "5px" }} />
          <Text
            content={`Target Amount: ${data.project.targetAmount} Rupees`}
          />
          <Divider style={{ marginBottom: "5px" }} />
          <Text content={`status: ${data.project.status}`} />
          <Divider style={{ marginBottom: "5px" }} />
          <Link href={`/projects/[project]`} as={`/project/${data.project.id}`}>
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
          </Link>
        </Box>
      )}
    </>
  );
};

export default FundraiserSection;
