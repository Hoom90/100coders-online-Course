import "@/styles/globals.css";
import Layout from "./../Components/layout";
import React from "react";
import { Fragment } from "react";
import {useRouter} from "next/router";
export default function App({ Component, pageProps, ...appProps }) {
  const isLayoutNeeded = [`/404`].includes(appProps.router.pathname);
  const LayoutComponent = isLayoutNeeded ? React.Fragment : Layout;
  const isFooterNeeded = [`/auth/login`, `/auth/signup`, `/auth/forgetpass`].includes(
    appProps.router.pathname
  );
  const footer = isFooterNeeded ? false : true;

  return (
    <LayoutComponent animation={pageProps.animation} footer={footer}>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
