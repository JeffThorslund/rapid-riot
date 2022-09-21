import React, { ReactNode } from "react";
import { Box, Button, Text } from "grommet";

export const MessageAlert = (props: {
  icon: ReactNode;
  title: string;
  description: string;
  closeModal: () => void;
}) => {
  return (
    <Box
      height={"100%"}
      direction={"column"}
      justify={"around"}
      align={"center"}
      pad={"small"}
    >
      <Box direction={"column"} align={"center"} gap={"small"}>
        {props.icon}
        <Text size={"large"} weight={"bold"}>
          {props.title}
        </Text>
        <Text>{props.description}</Text>
      </Box>
      <Box pad={{ top: "large" }}>
        <Button label="Cancel" onClick={props.closeModal} />
      </Box>
    </Box>
  );
};
