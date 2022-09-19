import React, { useState } from "react";
import { Box, Button, Spinner, Text } from "grommet";

export interface SubmissionButtonProps {
  onClick: () => void;
  areAllFieldsValid: boolean;
}

export const SubmissionButton = (props: SubmissionButtonProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const label = (
    <Box direction={"row"}>
      <Text>Submit</Text>
      {isButtonLoading ? (
        <Spinner color={"black"} size={"xsmall"} margin={{ left: "small" }} />
      ) : null}
    </Box>
  );

  return (
    <Button
      type="submit"
      primary
      label={label}
      disabled={!props.areAllFieldsValid || isButtonLoading}
      onClick={async () => {
        setIsButtonLoading(true);
        await props.onClick();
        setIsButtonLoading(false);
      }}
    />
  );
};
