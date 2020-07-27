import React, { Fragment } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import Text from "../../../common/src/components/Text";
import Heading from "../../../common/src/components/Heading";
import Image from "../../../common/src/components/Image";
import GlideCarousel from "../../../common/src/components/GlideCarousel";
import GlideSlide from "../../../common/src/components/GlideCarousel/glideSlide";
import LeftBar from "./leftBar";
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from "./bannerSection.style";

import { bannerSlides } from "../../../common/src/data/Charity";

import { useData, useDispatchUser } from "../../../lib/userData";

const BannerSection = () => {
  const glideOptions = {
    type: "carousel",
    perView: 1,
    gap: 0,
  };
  const user = useData();
  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          {user["id"] ? (
            user.user.role.name == "Donor" ? (
              <Link href="/recommended">
                <HighlightedText className="highlighted_text">
                  <strong>Recommended</strong> Explore projects which matter to
                  you!
                  <Icon icon={chevronRight} />
                </HighlightedText>
              </Link>
            ) : (
              <Link href="/explore">
                <HighlightedText className="highlighted_text">
                  <strong>Recommended</strong> Explore projects which matter to
                  you!
                  <Icon icon={chevronRight} />
                </HighlightedText>
              </Link>
            )
          ) : (
            <Link href="/explore">
              <HighlightedText className="highlighted_text">
                <strong>Recommended</strong> Explore projects which matter to
                you!
                <Icon icon={chevronRight} />
              </HighlightedText>
            </Link>
          )}
          <Heading
            content="Bring a smile to
          their faces."
          />
          <Heading
            as="h4"
            content="A new way of giving back to 
            your loved charities."
          />
          <Text content="   Explore projects, view rankings of charity organizations, donate with just a click; all in all, in one place" />

          <Link href="/explore">
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">Explore Our Project</span>
            </a>
          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {bannerSlides.map((slide) => (
                <GlideSlide key={slide.id}>
                  <Image src={slide.thumb_url} alt="Charity Landing" />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
