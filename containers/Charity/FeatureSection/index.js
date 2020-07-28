import React from "react";
import Text from "../../../common/src/components/Text";
import Heading from "../../../common/src/components/Heading";
import BlogPost from "../../../common/src/components/BlogPost";
import Container from "../../../common/src/components/UI/Container";
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from "./featureSection.style";
import Link from "next/link";

const FeatureSection = () => {
  const featureData = {
    title: "  Want to make a difference?  ",
    slogan: "You can choose to donate for a category that you prefer",
    features: [
      {
        id: 1,
        icon: "/image/charity/feature/1.svg",
        title: "Business ",
        description:
          "If you want to change the world, one wish at a time, help kids",
        tag: "5f0d9f1c2227031d88cd0070",
      },
      {
        id: 2,
        icon: "/image/charity/feature/2.svg",
        title: "Art & Culture",
        description: "Make it happen with your donation",
        tag: "5f09fd100c0c7f0af5ac083d",
      },
      {
        id: 3,
        icon: "/image/charity/feature/3.svg",
        title: "Food",
        description: "Feed the needy people who look up to you .",
        tag: "5f1f3cf868205d3c49ac574d",
      },
      {
        id: 4,
        icon: "/image/charity/feature/4.svg",
        title: "Education",
        description: "Support them to fulfil their school dreams",
        tag: "5f09fcf50c0c7f0af5ac083c",
      },
      {
        id: 5,
        icon: "/image/charity/feature/5.svg",
        title: "Health",
        description: "If you want to change the world, one wish at.",
        tag: "5f09fcde0c0c7f0af5ac083b",
      },
      {
        id: 6,
        icon: "/image/charity/feature/6.svg",
        title: "Family",
        description: "If you want to change the world, one wish at a time.",
        tag: "5f1f3ce968205d3c49ac574c",
      },
    ],
  };

  const { title, slogan, features } = featureData;

  return (
    <SectionWrapper id="feature">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <BlogPost
              key={`option_key${item.id}`}
              thumbUrl={item.icon}
              title={item.title}
              excerpt={item.description}
              link={`/explore?tag=${item.tag}`}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureSection;
