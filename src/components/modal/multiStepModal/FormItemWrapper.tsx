import React from "react";
import { Box, Text } from "grommet";

interface FormItemWrapperProps {
  label: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export const FormItemWrapper = (props: FormItemWrapperProps) => {
  return (
    <Box pad="small">
      <Text>{props.label}</Text>
      {props.children}
      {props.description}
    </Box>
  );
};
