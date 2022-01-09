import React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Layout } from "../layout";
import { ConnectButton } from "../connect-button";
import { AccountModal } from "../account-modal";

export const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
};
