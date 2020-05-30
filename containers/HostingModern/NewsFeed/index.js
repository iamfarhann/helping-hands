import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { angleRight } from 'react-icons-kit/fa/angleRight';
import Container from 'common/src/components/UI/Container';
import BlogPost from 'common/src/components/BlogPost';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { ContentWrapper } from './newsFeed.style';
import { newsFeed } from 'common/src/data/HostingModern';

const NewsFeed = () => {
  return (
    <SectionWrapper id="news">
      <Container>
        <Zoom>
          <SectionHeading
            slogan="Latest newsfeed"
            title="Our recent blog post that updated"
          />
        </Zoom>
        <ContentWrapper>
          {newsFeed.map(news => (
            <Fade key={news.id} up delay={100 * news.id}>
              <BlogPost
                thumbUrl={news.image}
                title={news.title}
                excerpt={news.excerpt}
                link={
                  <Link href={news.link}>
                    <a className="excerptLink">
                      Learn More <Icon icon={angleRight} />
                    </a>
                  </Link>
                }
              />
            </Fade>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default NewsFeed;
