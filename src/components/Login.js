import React from "react";
import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  const styles = {
    container: {
      width: "100%",
    },
    buttons: {
      primary: {
        backgroundColor: "#4A37BE",
        borderColor: "#4A37BE",
      },
    },
  };
  const config = {
    products: [Products.oauth],
    oauthOptions: {
      providers: [
        { type: "google", one_tap: true, position: "floating" },
        { type: "apple" },
        { type: "facebook" },
        { type: "discord" },
        { type: "twitter" },
      ],
    },
  };

  return <StytchLogin config={config} styles={styles} />;
};

export default Login;
