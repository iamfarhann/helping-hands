import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Text from "../../../common/src/components/Text";
import Heading from "../../../common/src/components/Heading";
import Image from "../../../common/src/components/Image";
import Tab, { Panel } from "../../../common/src/components/Tabs";
import SectionWrapper, { ContentWrapper } from "./branchSection.style";

import { branchData } from "../../../common/src/data/Charity";

import { useData, useDispatchUser } from "../../../lib/userData";
import { GET_ORGANIZATIONS } from "../../../lib/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import _ from "lodash";

const BranchSection = () => {
  const { data, loading, error, refetch } = useQuery(GET_ORGANIZATIONS, {
    variables: {
      where: {},
      sort: "createdAt:desc",
      limit: null,
      start: 0,
    },
  });

  const title = (text) => {
    return { __html: text };
  };
  // _.sortBy(data.organizations, [
  //   function(o) {
  //     return o.projects.length;
  //   },
  // ])
  return (
    <SectionWrapper id="branch">
      <Tab active={2}>
        {data
          ? _.take(
              _.orderBy(data.organizations, ["projects"], ["desc"]),
              5
            ).map((item) => {
              return (
                <Panel
                  title={<Text content={item.organizationName} />}
                  key={`tab_key${item.id}`}
                >
                  <ContentWrapper>
                    <Fade>
                      <div className="image">
                        <Image
                          src={`${process.env.PLAIN_URL}${item.coverImage.url}`}
                          alt={`${item.organizationName} cover image`}
                          style={{ height: "500px" }}
                        />
                      </div>
                    </Fade>
                    <div className="content">
                      <Heading as="h4" content="TOP ORGANIZATIONS" />
                      {/* <h2 dangerouslySetInnerHTML={title(item.title)} /> */}
                      <h3>{item.mission}</h3>
                      {/* <Text content={item.description} /> */}
                      <Link
                        href={`/organizations/[organization]`}
                        as={`/organizations/${item.id}`}
                      >
                        <a className="learn__more-btn">
                          <span className="hyphen" />
                          <span className="btn_text">{`SEE MORE OF OUR IMPACT`}</span>
                        </a>
                      </Link>
                    </div>
                  </ContentWrapper>
                </Panel>
              );
            })
          : branchData.map((item) => (
              <Panel
                title={<Text content={item.menuItem} />}
                key={`tab_key${item.id}`}
              >
                <ContentWrapper>
                  <Fade>
                    <div className="image">
                      <Image src={item.image} alt="Charity Landing" />
                    </div>
                  </Fade>
                  <div className="content">
                    <Heading as="h4" content={item.slogan} />
                    <h2 dangerouslySetInnerHTML={title(item.title)} />
                    <Text content={item.description} />
                    <Link href={item.linkUrl}>
                      <a className="learn__more-btn">
                        <span className="hyphen" />
                        <span className="btn_text">{item.linkText}</span>
                      </a>
                    </Link>
                  </div>
                </ContentWrapper>
              </Panel>
            ))}
      </Tab>
    </SectionWrapper>
  );
};

export default BranchSection;
