import React, { useState, useEffect, useRef } from "react";
import {
  FlatList,
  Image,
  InteractionManager,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
// import { SharedElement } from "react-navigation-shared-element";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import AppHeader from "../../components/AppHeader";
import BookCover from "../../components/BookCover";
import { useFocusEffect } from "@react-navigation/core";
import { Box, Icon, Pressable, Text, useTheme } from "native-base";
import { books, generateRandomPics } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import PageFlipper, { PageFlipperInstance } from "react-native-page-flipper";

interface BookDetailsProps {
  navigation: any;
  route: any;
}

const BookDetails: React.FC<BookDetailsProps> = ({ navigation, route }) => {
  const { book, sharedElementId } = route.params || {};
  const { height, width } = useWindowDimensions();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showingBook, setShowingBook] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const coverSize = height * 0.2;
  const topContentSize = height * 0.45;
  const size = {
    height: coverSize * 1.5,
    width: coverSize,
  };

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setPageLoaded(true);
      });

      return () => task.cancel();
    }, [])
  );
  const [showBook, setShowBook] = useState(false);
  const active = useSharedValue(0);
  const phase2 = useSharedValue(0);
  const scrollY = useSharedValue<number>(0);
  const isScrolling = useSharedValue(false);
  const containerHeight = useSharedValue(size.height);
  const containerWidth = useSharedValue(size.width);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  const perspective = 1000;

  const frontPerspective = Platform.select({
    ios: { perspective: -perspective },
    android: { perspective: 60000 },
    web: { perspective: 60000 }, // same as android
    default: { perspective: 0 },
  });

  const onBackPress = () => {
    setPageLoaded(false);
    navigation.goBack();
  };

  const renderRight = () => {
    return (
      <MaterialIcons name="bookmark-outline" color={"#ffffff"} size={24} />
    );
  };

  const openBook = () => {
    const duration = 400;
    scrollViewRef?.current?.scrollTo({ y: 0, animated: true });
    setShowingBook(true);
    active.value = withTiming(1, {
      easing: Easing.inOut(Easing.ease),
      duration: 200,
    });

    phase2.value = withTiming(1, {
      easing: Easing.inOut(Easing.ease),
      duration: duration,
    });
    containerWidth.value = withTiming(width, {
      easing: Easing.inOut(Easing.ease),
      duration: duration,
    });
    containerHeight.value = withTiming(
      height,
      {
        easing: Easing.inOut(Easing.ease),
        duration: duration,
      },
      () => {
        runOnJS(setShowBook)(true);
      }
    );
  };

  const closeBook = () => {
    setShowBook(false);
    const duration = 500;
    active.value = withTiming(0, {
      duration: 400,
    });

    phase2.value = withTiming(
      0,
      {
        duration: duration,
      },
      () => runOnJS(onBookClosed)()
    );

    containerWidth.value = withTiming(size.width, {
      duration: duration,
    });
    containerHeight.value = withTiming(size.height, {
      duration: duration,
    });
  };

  const onBookClosed = () => {
    setShowingBook(false);
  };

  const backdropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(active.value, [0, 1], [0, 1]);
    return {
      opacity: opacity,
    };
  });

  const bookCoverContainerStyle = useAnimatedStyle(() => {
    const top = interpolate(
      containerHeight.value,
      [size.height, height],
      [height * 0.135, 0]
    );
    return {
      height: containerHeight.value,
      width: containerWidth.value,
      top: top,
      backgroundColor: pageLoaded ? "white" : "transparent",
      transform: [{ translateY: -scrollY.value }],
    };
  });

  const bookCoverPageStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(phase2.value, [0, 1], [0, 90]);
    const opacity = interpolate(rotateY, [0, 90], [1, 80, 0]);
    return {
      height: containerHeight.value,
      width: containerWidth.value,
      flex: 1,
      opacity: opacity,
      transform: [
        frontPerspective,
        { translateX: -containerWidth.value / 2 },
        { rotateY: `${rotateY}deg` },
        { translateX: containerWidth.value / 2 },
      ],
    };
  });

  const headerTitleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, topContentSize * 0.8, topContentSize],
      [0, 0, 1]
    );
    return {
      opacity: opacity,
    };
  });

  const bookCoverShadowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(active.value, [0, 1], [0, 1]);
    const rotateY = interpolate(phase2.value, [0, 1], [0, 90]);
    const translateX = interpolate(
      rotateY,
      [0, 45, 60, 80, 90],
      [0, 0, -width / 4, -width / 2, -width],
      Extrapolate.CLAMP
    );
    return {
      position: "absolute",
      height: containerHeight.value,
      width: containerWidth.value,
      backgroundColor: "rgba(0,0,0,0.6)",
      opacity: opacity,
      transform: [{ translateX: translateX }],
    };
  });

  const renderAnimatedBackdrop = () => {
    return (
      <Animated.View
        pointerEvents="none"
        style={[
          {
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 5,
          },
          backdropStyle,
        ]}
      />
    );
  };

  const renderAnimatedBookCover = () => {
    return (
      <Animated.View
        style={[
          {
            position: "absolute",
            alignSelf: "center",
            zIndex: 5,
            borderRadius: 12,
            shadowColor: "#000000",
            shadowOffset: {
              height: 4,
              width: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: 6,
          },
          bookCoverContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              alignSelf: "center",
              zIndex: 1,
            },
            bookCoverPageStyle,
          ]}
        >
          <Pressable
            onPress={() => openBook()}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              flex: 1,
            }}
          >
            {/* <SharedElement
              id={sharedElementId}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 12,
              }}
            > */}
            <Image
              source={{ uri: book.url }}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 12,
              }}
              resizeMode="stretch"
            />
            {/* </SharedElement> */}
          </Pressable>
        </Animated.View>

        {showBook && (
          <Box flex={1}>
            <Pressable
              position={"absolute"}
              zIndex={10000}
              top={25}
              left={25}
              onPress={() => closeBook()}
            >
              <Text>back</Text>
            </Pressable>
            {/* <BookReader
              bookPages={[
                "https://i.picsum.photos/id/960/780/844.jpg?hmac=yi46RPSHaJh3LsOi_4noHPFpgB2pdTiFkfLg0YWANC8",
                "https://i.picsum.photos/id/179/780/844.jpg?hmac=C934STbwY480q05yogaGe9v6jT5pfFxYKhj0dPpe9OE",
                "https://i.picsum.photos/id/70/780/844.jpg?hmac=wFZE1FAacjyxQadjJcSNjDZnqeLrWvjf4t1c4g-oZws",
                "https://i.picsum.photos/id/183/780/844.jpg?hmac=ZKyE-nRYJ4f8UvpjLhWzhNOOpIpqjU0Ve1eNoPpYF-A",
                "https://i.picsum.photos/id/960/780/844.jpg?hmac=yi46RPSHaJh3LsOi_4noHPFpgB2pdTiFkfLg0YWANC8",
                "https://i.picsum.photos/id/179/780/844.jpg?hmac=C934STbwY480q05yogaGe9v6jT5pfFxYKhj0dPpe9OE",
                "https://i.picsum.photos/id/70/780/844.jpg?hmac=wFZE1FAacjyxQadjJcSNjDZnqeLrWvjf4t1c4g-oZws",
                "https://i.picsum.photos/id/183/780/844.jpg?hmac=ZKyE-nRYJ4f8UvpjLhWzhNOOpIpqjU0Ve1eNoPpYF-A",
              ]}
            /> */}

            <PageFlipper
              data={[
                "https://i.picsum.photos/id/960/780/844.jpg?hmac=yi46RPSHaJh3LsOi_4noHPFpgB2pdTiFkfLg0YWANC8",
                "https://i.picsum.photos/id/179/780/844.jpg?hmac=C934STbwY480q05yogaGe9v6jT5pfFxYKhj0dPpe9OE",
                "https://i.picsum.photos/id/70/780/844.jpg?hmac=wFZE1FAacjyxQadjJcSNjDZnqeLrWvjf4t1c4g-oZws",
                "https://i.picsum.photos/id/183/780/844.jpg?hmac=ZKyE-nRYJ4f8UvpjLhWzhNOOpIpqjU0Ve1eNoPpYF-A",
                "https://i.picsum.photos/id/960/780/844.jpg?hmac=yi46RPSHaJh3LsOi_4noHPFpgB2pdTiFkfLg0YWANC8",
                "https://i.picsum.photos/id/179/780/844.jpg?hmac=C934STbwY480q05yogaGe9v6jT5pfFxYKhj0dPpe9OE",
                "https://i.picsum.photos/id/70/780/844.jpg?hmac=wFZE1FAacjyxQadjJcSNjDZnqeLrWvjf4t1c4g-oZws",
                "https://i.picsum.photos/id/183/780/844.jpg?hmac=ZKyE-nRYJ4f8UvpjLhWzhNOOpIpqjU0Ve1eNoPpYF-A",
              ]}
            />
          </Box>
        )}
      </Animated.View>
    );
  };

  const theme = useTheme();

  return (
    <Box flex={1} bg="mainBackground">
      {renderAnimatedBackdrop()}
      {renderAnimatedBookCover()}
      <Animated.View>
        <AppHeader
          title=""
          showBack
          onBackPress={onBackPress}
          renderRight={renderRight}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            zIndex: showingBook ? 0 : 5,
          }}
          renderTitle={() => {
            return (
              <>
                <Animated.View
                  style={[
                    { position: "absolute", zIndex: 5, width: "80%" },
                    headerTitleStyle,
                  ]}
                >
                  <Text variant="subheader" color="white" adjustsFontSizeToFit>
                    Harry Potter and....
                  </Text>
                </Animated.View>
                <Text variant="subheader"></Text>
              </>
            );
          }}
        />
      </Animated.View>

      <Animated.ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingTop: containerSize * 1.1 }}
        onScroll={scrollHandler}
        scrollEnabled={!showingBook}
        style={{
          // zIndex: 5,
          backgroundColor: theme.colors.primary,
          // paddingTop: height * 0.05,
        }}
        contentContainerStyle={{
          backgroundColor: theme.colors.primary,
        }}
      >
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
            <Text
              fontSize={23}
              fontWeight="600"
              textAlign="center"
              color="white"
            >
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </Box>
        <Box height="100%" backgroundColor="mainBackground" />
      </Animated.ScrollView>
    </Box>
  );
};

const BookStat = ({ label, value }) => {
  return (
    <Box justifyContent="center" alignItems="center" mx="m">
      <Text fontWeight="200" fontSize={15} color="white">
        {label}
      </Text>
      <Text fontWeight="600" fontSize={19} marginTop="xs" color="white">
        {value}
      </Text>
    </Box>
  );
};

export { BookDetails };
