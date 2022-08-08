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
        paddingBottom={{ base: "l", md: "xl" }}
        justifyContent="flex-end"
      >
        {/* <Box
          height={size.height}
          width={size.width}
          // ref={viewRef}
        /> */}
        <Box marginTop="l" justifyContent="center" alignItems="center">
          <Text fontSize={18} fontWeight="600" textAlign="center" color="white">
            Harry Potter and the Philosopher's Stone
          </Text>
          <Text marginTop="s" variant="bodySmall" color="white">
            by J. K. Rowling
          </Text>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          marginTop="l"
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
          width={"80%"}
          borderRadius={17}
          style={{
            height: 55,
            position: "absolute",
            marginTop: -55 / 2,
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
              Read Book
            </Text>
          </Pressable>
          <Box height="100%" width={0.5} backgroundColor="white" />
          <Pressable flex={1} justifyContent="center" alignItems="center">
            <Text color="white" fontSize={16} fontWeight="600">
              Play Book
            </Text>
          </Pressable>
        </Box>
        <Text variant="titleLarge" fontWeight="semibold" marginTop="m">
          Description
        </Text>
        <Text
          marginTop="s"
          variant="bodyMedium"
          color="gray.500"
          lineHeight="lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>

        <Text variant="titleLarge" fontWeight="semibold" marginTop="m">
          Reviews
        </Text>
        <Text
          marginTop="s"
          variant="bodyMedium"
          color="gray.500"
          lineHeight="lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Text
          variant="titleLarge"
          fontWeight="semibold"
          marginTop="m"
          marginBottom="m"
        >
          Suggestions
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
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
                  navigation.push("BookDetails", {
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
      </Box>
    </>
  );
};

export { BookInfo };
