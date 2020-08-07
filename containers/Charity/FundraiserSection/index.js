import React, { useEffect, useState } from "react";
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
import { useData, useDispatchUser } from "../../../lib/userData";
import { GET_PROJECTS } from "../../../lib/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import _ from "lodash";
import moment from "moment";

const FundraiserSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { data, loading, error, refetch } = useQuery(GET_PROJECTS, {
    variables: {
      where: {},
      start: 0,
      limit: null,
      sort: "createdAt:desc",
    },
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      setSelectedProject(data.projects[_.random(0, data.projects.length - 1)]);
    }
  }, [data]);
  return (
    <SectionWrapper id="fundraisers">
      {!selectedProject ? (
        <Container width="1260px">
          <SectionHeader>
            <Heading content="Browse Fundraisers" />
            <Text content="People around the world are raising money for what they are passionate about. " />
          </SectionHeader>
          <ContentArea>
            <ImageWrapper>
              <Image src="./image/charity/banner/slide2.png" alt="Charity" />
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
                    <strong>PKR 950</strong> of 20,000 goal
                  </CurrentStatus>
                  <Text content="Last donation 9m ago" />
                </BarArea>
                <Heading as="h5" content="Raised by 10 people in 1 month" />
              </DonationProgressbar>

              <ShareArea>
                <Link
                  href={`/projects/[project]`}
                  as={`/projects/5f0b4ddaa9568904e4b6088a`}
                >
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
                </Link>
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
      ) : (
        <Container width="1260px">
          <SectionHeader>
            <Heading content="Browse Fundraisers" />
            <Text content="People around the world are raising money for what they are passionate about. " />
          </SectionHeader>
          <ContentArea>
            <ImageWrapper>
              <Image
                src={`${process.env.PLAIN_URL}${selectedProject.titleImage.url}`}
                alt={`${selectedProject.name}`}
              />
            </ImageWrapper>
            <TextWrapper>
              <TextAndLink>
                <Heading as="h4" content="START FUNDRAISING" />
                <Link href="/explore">
                  <a className="text_btn">
                    SEE ALL <i className="flaticon-next" />
                  </a>
                </Link>
              </TextAndLink>
              <Heading as="h3" content={selectedProject.name} />
              <Text
                content={selectedProject.shortDescription}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              />
              <DonationProgressbar>
                <BarArea>
                  <CurrentStatus>
                    <strong>{`Rs. ${selectedProject.totalDonations}`}</strong>{" "}
                    {`of ${selectedProject.targetAmount} goal`}
                  </CurrentStatus>
                  {selectedProject.donations.length ? (
                    <Text
                      content={`Last donation ${moment(
                        selectedProject.donations[0].createdAt
                      ).fromNow()}`}
                    />
                  ) : null}
                </BarArea>
                <Heading
                  as="h5"
                  content={`Raised by ${
                    selectedProject.donations.length
                  } people since ${moment(selectedProject.createdAt).format(
                    "MMMM Do"
                  )}`}
                />
              </DonationProgressbar>

              <ShareArea>
                <Link
                  href={`/projects/[project]`}
                  as={`/projects/${selectedProject.id}`}
                >
                  <Button
                    title="See Details"
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
                </Link>
                {/* <Image src="/image/charity/heart.svg" alt="Charity Landing" /> */}
              </ShareArea>
            </TextWrapper>
          </ContentArea>
        </Container>
      )}
    </SectionWrapper>
  );
};

export default FundraiserSection;
