// import React, { Fragment } from "react";
// import { Modal } from "@redq/reuse-modal";
// import "@redq/reuse-modal/es/index.css";

// export default ({ Component, pageProps }) => {
//   return (
//     <Fragment>
//       <Modal />
//       <Component {...pageProps} />
//     </Fragment>
//   );
// };

import React from "react";
import App from "next/app";
import Head from "next/head";
import { Modal } from "@redq/reuse-modal";
import {
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import withApollo from "next-with-apollo";
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { RestLink } from "apollo-link-rest";
import Nodefetch from "node-fetch";
import theme from "../theme";
import getToken from "../lib/getToken";
import { UserProvider } from "../lib/userData";
import CookieChecker from "../lib/cookieChecker";

global.Headers = Nodefetch.Headers;

const restLink = new RestLink({
  uri: process.env.PLAIN_URL,
  credentials: "same-origin",
});

const httpLink = new HttpLink({
  uri: process.env.SERVER_URL,
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      accept: "application/json",
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apollo, router } = this.props;

    return (
      <React.Fragment>
        {/* <Head>
          <title>Trilla App</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head> */}

        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <CssBaseline /> */}
          <ApolloProvider client={apollo}>
            <UserProvider>
              <CookieChecker />
              <Modal />
              <Component {...pageProps} />
            </UserProvider>
          </ApolloProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: ApolloLink.from([restLink, authLink, httpLink]),
      cache: new InMemoryCache().restore(initialState || {}),
    }),
  { getDataFromTree }
)(MyApp);
