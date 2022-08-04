import BookCover from "@/components/BookCover";
import { books } from "@/utils";
import { Box, FlatList, Pressable, Text } from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { BookStat } from "./BookStat";

export type IBookInfoProps = {
  openBook;
  book;
  navigation;
  topContentSize;
  size;
};

const BookInfo: React.FC<IBookInfoProps> = ({
  openBook,
  book,
  navigation,
  topContentSize,
  size,
}) => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Box
        minHeight={topContentSize}
        width={"100%"}
        // zIndex={5}
        backgroundColor="primary"
        paddingBottom="xl"
      >
        <Box
          height={size.height}
          width={size.width}
          // ref={viewRef}
        />
        <Box marginTop="xl" justifyContent="center" alignItems="center">
          <Text fontSize={23} fontWeight="600" textAlign="center" color="white">
            Harry Potter and the Philosopher's Stone
          </Text>
          <Text marginTop="s" color="white">
            by J. K. Rowling
          </Text>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          marginTop="xl"
        >
          <BookStat label="Rating" value={4.7} />
          <BookStat label="Pages" value={240} />
          <BookStat label="Language" value={"English"} />
          <BookStat label="Age Range" value={"10+"} />
        </Box>
      </Box>

      <Box
        flex={1}
        marginTop="l"
        paddingTop="xl"
        px="m"
        backgroundColor="mainBackground"
      >
        <Box
          backgroundColor="secondary"
          flexDirection="row"
          height={65}
          width={"80%"}
          borderRadius={17}
          style={{
            position: "absolute",
            marginTop: "-7.5%",
            alignSelf: "center",
          }}
        >
          <Pressable
            flex={1}
            justifyContent="center"
            alignItems="center"
            onPress={() => openBook()}
          >
            <Text color="white" fontWeight="600" fontSize={16}>
              Read Alone
            </Text>
          </Pressable>
          <Box height="100%" width={0.5} backgroundColor="white" />
          <Pressable flex={1} justifyContent="center" alignItems="center">
            <Text color="white" fontSize={16} fontWeight="600">
              Read Together
            </Text>
          </Pressable>
        </Box>
        <Text variant="subheader">Description</Text>
        <Text marginTop="s" variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>

        <Text variant="subheader" marginTop="l" marginBottom="m">
          Suggestions
        </Text>
        <FlatList
          horizontal
          data={books.filter((b) => b !== book.url)}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item, index }) => {
            const sharedElementId = `item.${item + index}.suggestion`;
            return (
              // <SharedElement id={sharedElementId}>
              <BookCover
                url={item}
                size={height * 0.12}
                onPress={() =>
                  navigation.push("bookDetails", {
                    book: {
                      url: item,
                    },
                    sharedElementId,
                  })
                }
              />
              // </SharedElement>
            );
          }}
        />
        <Text variant="subheader" marginTop="l" marginBottom="m">
          Reviews
        </Text>
        <Text marginTop="s" variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </Box>
    </>
  );
};

export { BookInfo };
