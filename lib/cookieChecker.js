import React, { useEffect, useState } from "react";
import { useDispatchUser, useData } from "./userData.js";
import cookie from "js-cookie";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { INITIALIZATION_QUERY, DONOR_INFO, ORGANIZATION_INFO } from "./queries";
import { useRouter } from "next/router";

export default function CookieChecker(props) {
  const user = useData();
  const dispatch = useDispatchUser();
  const token = cookie.get("token");
  const router = useRouter();
  const [loggedIn, setLoginIn] = useState(false);
  const [getData, { data }] = useLazyQuery(INITIALIZATION_QUERY, {
    fetchPolicy: "no-cache",
  });

  const [getDonor, { data: donorInfo }] = useLazyQuery(DONOR_INFO, {
    fetchPolicy: "no-cache",
  });
  const [getOrganization, { data: organizationInfo }] = useLazyQuery(
    ORGANIZATION_INFO,
    {
      fetchPolicy: "no-cache",
    }
  );
  useEffect(() => {
    console.log("called");

    if (user["id"] && token && data) {
      setLoginIn(true);
      console.log("im hereeeeeee");
      // if (data.me.role.name == "Donor") {
      //   router.push("/account");
      // }
      // if (data.me.role.name == "Organization") {
      //   router.push("/account_o");
      // }
    }
    if (token && !data) {
      console.log("im here");

      getData();
    }
    if (data && (!donorInfo || !organizationInfo) && !user["id"]) {
      console.log("say hello");
      console.log(data, "data");
      // console.log(data.me.id);
      if (data.me.role.name == "Donor") {
        getDonor({
          variables: {
            fields: {
              user: data.me.id,
            },
          },
        });
      }
      if (data.me.role.name == "Organization") {
        getOrganization({
          variables: {
            fields: {
              user: data.me.id,
            },
          },
        });
      }
    }
    if (!user["id"] && !token) {
      setLoginIn(false);
      // router.push("/login");
    }
    if (donorInfo && !user["id"]) {
      console.log(donorInfo);
      //   if (donorInfo["donors"]) {
      //     if (!donorInfo.donors.length) {
      //       router.push("/login");
      //     } else {
      dispatch({
        type: "LOGIN",
        payload: donorInfo.donors[0],
      });
      //router.push("/account");
      //     }
      //   } else {
      //     router.push("/login");
      //   }

      // router.push("/");
    }
    if (organizationInfo && !user["id"]) {
      console.log(organizationInfo);
      //   if (organizationInfo["organizations"]) {
      //     if (!organizationInfo.organizations.length) {
      //       router.push("/login");
      //     } else {
      //       console.log(organizationInfo);
      dispatch({
        type: "LOGIN",
        payload: organizationInfo.organizations[0],
      });
      //router.push("/account_o");
      //     }
      //   } else {
      //     router.push("/login");
      //   }

      // router.push("/");
    }
  }, [user, data, donorInfo, organizationInfo, token]);

  return <div>{props.childeren}</div>;
}
