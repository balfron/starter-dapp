import React from "react";
import "./app.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../layout";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Layout>
        <p style={{ color: "white" }}>Hello, world!</p>
      </Layout>
    </ChakraProvider>
  );
};
