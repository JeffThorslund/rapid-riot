import React from "react";
import { Box, Text } from "grommet";

interface FormItemWrapperProps {
  label: string;
  children: React.ReactNode;
}

export const FormItemWrapper = (props: FormItemWrapperProps) => {
  return (
    <Box pad="small">
      <Text>{props.label}</Text>
      {props.children}
    </Box>
  );
};
