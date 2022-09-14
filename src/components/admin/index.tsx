import React from "react";
import { Box, List } from "grommet";

export const Admin: React.FC = () => {
  return (
    <Box>
      <List
        data={[
          { name: "Alan", percent: 20 },
          { name: "Bryan", percent: 30 },
          { name: "Chris", percent: 40 },
          { name: "Eric", percent: 80 },
        ]}
      >
        {/* https://github.com/grommet/grommet/issues/5853 */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {(datum) => (
          <Box>
            {datum.name} + {datum.percent}
          </Box>
        )}
      </List>
    </Box>
  );
};
