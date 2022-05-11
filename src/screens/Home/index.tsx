import { RootTabScreenProps } from "@/../types";
import AppHeader from "@/components/AppHeader";
import BookCover from "@/components/BookCover";
import PublisherCover from "@/components/PublisherCover";
import { Section } from "@/theme/baseComponents";
import { books, publishers, topics } from "@/utils";
import { Box, Icon, Text } from "native-base";
import * as React from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import Steve from "react-native-steve";

const Home = ({ navigation }: RootTabScreenProps<"Home">) => {
  const renderTopic = ({ item }) => {
    const { emoji, text } = item;
    return (
      <Box
        style={{
          borderWidth: 1,
          borderColor: "#ecd9d9",
          borderBottomWidth: 2,
          borderRadius: 10,
          paddingHorizontal: 10,
          height: 38,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
        }}
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
    <Box flex={1}>
      {/* <AppHeader title="Library" /> */}
      <ScrollView
        style={{
          paddingHorizontal: 10,
        }}
      >
        {/* <SearchBar /> */}

        <Section>
          <Text variant="subheader">Categories</Text>
        </Section>

        <Steve
          isRTL={false}
          data={topics}
          renderItem={renderTopic}
          itemStyle={{ margin: 5 }}
          containerStyle={{ marginHorizontal: 5 }}
          keyExtractor={(item) => item.text}
        />
        <Section>
          <Text variant="subheader">Popular Books</Text>
          <Text variant="body">See All</Text>
        </Section>

        <FlatList
          horizontal
          data={books}
          keyExtractor={(item, index) => String(index)}
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

        <Section>
          <Text variant="subheader">Top Publishers</Text>
        </Section>
        <FlatList
          horizontal
          data={publishers}
          keyExtractor={(item, index) => String(index)}
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
