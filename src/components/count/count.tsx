import { Flex, Text, Button } from "@chakra-ui/react";
import { useCount, useIncrement } from "../../hooks";

export const Count = () => {
  const count = useCount();
  const { state, send: incrementCount } = useIncrement();

  function handleIncrement() {
    console.log("send");
    incrementCount();
  }

  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="8xl">
        {count ? count.toNumber() : 0}
      </Text>
      <Button colorScheme="teal" size="lg" onClick={handleIncrement}>
        Increment
      </Button>
    </Flex>
  );
};
