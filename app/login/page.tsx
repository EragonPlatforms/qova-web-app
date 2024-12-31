import React from "react";
import LoginComponent from "./components/LoginComponent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login ",
};

const page = () => {
  return (
    <>
      <LoginComponent />
    </>
  );
};

export default page;
