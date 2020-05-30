import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Masonry from 'react-masonry-component';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';
import Link from 'common/src/components/Link';
import SectionHeading from '../SectionHeading';
import Section, { ContentWrapper, BlogPost } from './news.style';

import { data } from 'common/src/data/AgencyDigital';

const masonryOptions = {
  originTop: false,
};

const News = () => {
  return (
    <Section id="blog">
      <Container>
        <Zoom>
          <SectionHeading
            slogan="Ideal solutions for you"
            title="Go beyond ultimate features"
          />
        </Zoom>
        <ContentWrapper>
          <Masonry className="masonryGrid" options={masonryOptions}>
            {data.newsFeed.map((news, i) => {
              return (
                <Fade key={news.id} up delay={100 * news.id}>
                  <BlogPost>
                    <figure>
                      <Image src={news.image} alt={news.title} />
                    </figure>
                    <h4>{news.title}</h4>
                    {news.desc && <p>{news.desc}</p>}
                    {news.link && (
                      <Link href={news.link} className="learnMore">
                        Learn More <Icon icon={chevronRight} />
                      </Link>
                    )}
                  </BlogPost>
                </Fade>
              );
            })}
          </Masonry>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default News;
