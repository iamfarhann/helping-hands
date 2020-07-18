import React from "react";
import Link from "next/link";
import Container from "../../../common/src/components/UI/Container";
import Heading from "../../../common/src/components/Heading";
import BlogPost from "../../../common/src/components/BlogPost";
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from "./blogSection.style";

import { posts } from "../../../common/src/data/Charity";

const BlogSection = () => {
  return (
    <SectionWrapper id="blog">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content="Blog & News Updates" />
            <Text>
              Organizations accross Pakistan are raising money for what they are
              passionate about. To get the latest updates
              <Link href="#1">
                <a className="link">Join our Facebook Community</a>
              </Link>
            </Text>
          </TitleArea>
          <LinkArea>
            <Link href="#1">
              <a className="text__btn">
                <span className="text">View all blog posts</span>
                <span className="arrow" />
              </a>
            </Link>
          </LinkArea>
        </SectionHeader>
        <PostArea>
          <BlogPost
            thumbUrl="./image/charity/banner/slide1.jpg"
            title="Where to Find Financial Help During the Coronavirus"
            excerpt="The coronavirus pandemic has touched nearly every part of our daily lives, but much of the collective fear and anxiety…. "
            link={
              <a className="learn__more-btn" href="https://www.google.com">
                <span className="hyphen"></span>
                <span className="btn_text">Read More</span>
              </a>
            }
          />
          <BlogPost
            thumbUrl="./image/charity/banner/slide2.png"
            title="Learn How and When to Ask for Help with These Tips"
            excerpt="Asking for help isn’t easy. It’s sometimes common for feelings like shame or embarrassment to arise from asking for something"
            link={
              <a className="learn__more-btn" href="https://www.google.com">
                <span className="hyphen"></span>
                <span className="btn_text">Read More</span>
              </a>
            }
          />
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default BlogSection;
