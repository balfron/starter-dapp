import React from "react";
import { ChakraProvider, useDisclosure, Text } from "@chakra-ui/react";
import { Layout } from "../layout";
import { ConnectButton } from "../connect-button";
import { AccountModal } from "../account-modal";
import { Count } from "../count";
import { useEthers } from "@usedapp/core";

export const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { chainId } = useEthers();
  console.log(chainId);
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
        {chainId !== 4 ? (
          <Text color="white" fontSize="1xl" style={{ marginTop: 20 }}>
            Connect to Rinkeby to see test contract
          </Text>
        ) : (
          <Count />
        )}
      </Layout>
    </ChakraProvider>
  );
};
