import { RootTabScreenProps } from "@/../types";
import AppHeader from "@/components/AppHeader";
import BookCover from "@/components/BookCover";
import PublisherCover from "@/components/PublisherCover";
import { SearchBar } from "@/components/SearchBar";
import { Section } from "@/theme/baseComponents";
import { books, publishers, topics } from "@/utils";
import { Box, Icon, Text, useTheme, Image } from "native-base";
import * as React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Steve from "react-native-steve";

const Home = ({ navigation }: RootTabScreenProps<"Home">) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const renderTopic = ({ item }) => {
    const { emoji, text } = item;
    return (
      <Box
        style={{
          borderWidth: 1,
          borderBottomWidth: 2,
          borderRadius: 10,
          paddingHorizontal: 10,
          height: 38,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
        borderColor="gray.300"
        backgroundColor="muted.100"
      >
        <Text>{emoji}</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            marginLeft: 5,
          }}
        >
          {text}
        </Text>
      </Box>
    );
  };

  return (
    <Box flex={1} bg="mainBackground">
      <AppHeader
        title="Home"
        showMenu
        renderRight={() => (
          <Box style={{ height: 40, width: 40 }} borderRadius="full">
            <Image
              borderRadius="full"
              source={{ uri: `https://picsum.photos/${200}/${200}` }}
              style={{ height: "100%", width: "100%" }}
              alt="profilepic"
            />
          </Box>
        )}
      />
      <ScrollView>
        <Box mx="m">
          <SearchBar />
        </Box>

        <Section mb="m">
          <Text variant="titleLarge" fontWeight="semibold">
            Categories
          </Text>
        </Section>

        <Steve
          isRTL={false}
          data={topics}
          renderItem={renderTopic}
          itemStyle={{ margin: 5 }}
          containerStyle={{
            marginHorizontal: theme.space.m,
            maxWidth: width * 1.4,
          }}
          keyExtractor={(item) => item.text}
        />
        <Section mb="m">
          <Text variant="titleLarge" fontWeight="semibold">
            Popular Books
          </Text>
          <Text variant="bodyLarge" fontWeight="semibold" color="gray.500">
            See All
          </Text>
        </Section>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={books}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{
            paddingLeft: theme.space.m,
            paddingBottom: 10,
          }}
          renderItem={({ item, index }) => {
            // const sharedElementId = `item.${item + index}.photo`;
            return (
              // <SharedElement id={sharedElementId}>
              <BookCover
                url={item}
                onPress={() =>
                  navigation.navigate("BookDetails", {
                    book: {
                      url: item,
                    },
                    // sharedElementId,
                  })
                }
              />
              // </SharedElement>
            );
          }}
        />

        <Section mb="s">
          <Text variant="subheader">Top Publishers</Text>
        </Section>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={publishers}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{
            paddingLeft: theme.space.m,
          }}
          renderItem={({ item }) => {
            return (
              <PublisherCover
                url={item}
                onPress={() => navigation.navigate("categoryDetails", {})}
              />
            );
          }}
        />
      </ScrollView>
    </Box>
  );
};

export { Home };
