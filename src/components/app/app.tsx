import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../layout";
import { ConnectButton } from "../connect-button";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton />
      </Layout>
    </ChakraProvider>
  );
};
