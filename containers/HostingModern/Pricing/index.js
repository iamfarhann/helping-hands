import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Icon from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';

import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Text from 'common/src/components/Text';
import List from 'common/src/components/List';
import SectionHeading from '../SectionHeading';
import SectionWrapper, {
  ContentWrapper,
  PriceTable,
  Price,
} from './pricing.style';
import { pricingInfo } from 'common/src/data/HostingModern';

const Pricing = () => {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <Zoom>
          <SectionHeading
            slogan="Deal for your business"
            title="Meet our pricing plan that suit you"
          />
        </Zoom>
        <ContentWrapper>
          {pricingInfo.map(pricing => (
            <Fade key={pricing.id} up delay={100 * pricing.id}>
              <PriceTable className={pricing.isRecommended && 'recommended'}>
                <Text
                  as="div"
                  className="rec-label"
                  content={pricing.isRecommended ? 'Highly Recommended' : ''}
                />
                <Heading as="h4" content={pricing.title} />
                <Text className="desc" content={pricing.desc} />
                <Price>
                  ${pricing.price}/<span>per mo.</span>
                </Price>
                <Button
                  className={`start-trial ${!pricing.isRecommended &&
                    'outlined'}`}
                  title={pricing.buttonText}
                />
                {pricing.features.map(feature => (
                  <List
                    className={`listItem ${feature.isDisabled && 'disabled'}`}
                    key={feature.id}
                    text={feature.name}
                    icon={
                      <Icon
                        style={{
                          color: feature.isDisabled ? '#CED7E1' : '#E9C46A',
                        }}
                        icon={
                          feature.isDisabled ? closeCircled : checkmarkCircled
                        }
                        size="18"
                      />
                    }
                  />
                ))}
              </PriceTable>
            </Fade>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
