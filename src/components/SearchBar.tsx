import { Feather } from "@expo/vector-icons";
import { Box, Icon, Input } from "native-base";
import React from "react";
import { TextInput, View } from "react-native";

export type ISearchBarProps = {};

const SearchBar: React.FC<ISearchBarProps> = ({}) => {
  return (
    <Box
      //   height={"12"}
      width="100%"
      alignSelf="center"
      style={{
        padding: 13,
      }}
      borderColor="gray.300"
      bg="muted.100"
      borderWidth="1"
      borderRadius="12"
      alignItems="center"
      flexDirection="row"
    >
      <Feather name="search" size={18} style={{ marginRight: 10 }} />
      <TextInput
        placeholder="Titles, authors, or topics"
        placeholderTextColor="#aaa"
        style={{
          fontSize: 16,
        }}
      />
    </Box>
  );
};

export { SearchBar };
