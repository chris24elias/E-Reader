import { Box, Text } from "native-base";
import React from "react";

export type IBookStatProps = {
  label: string;
  value: string;
};

const BookStat = ({ label, value }) => {
  return (
    <Box justifyContent="center" alignItems="center" mx="m">
      <Text fontWeight="300" fontSize={12} color="white">
        {label}
      </Text>
      <Text fontWeight="600" fontSize={16} marginTop="xs" color="white">
        {value}
      </Text>
    </Box>
  );
};

export { BookStat };
