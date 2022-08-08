import React, { useState, useRef } from "react";
import {
  Image,
  InteractionManager,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
// import { SharedElement } from "react-navigation-shared-element";
import Animated, {
  Easing,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import AppHeader from "../../components/AppHeader";
import { useFocusEffect } from "@react-navigation/core";
import {
  Box,
  Pressable,
  Text,
  useBreakpointValue,
  useTheme,
} from "native-base";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import PageFlipper, { PageFlipperInstance } from "react-native-page-flipper";
import { BookInfo } from "./BookInfo";
import { BOOK_PAGES } from "@/utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedBookCover } from "./AnimatedBookCover";

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
  const coverSize = height * 0.16;
  const topContentSize = height * 0.45;
  const size = {
    height: coverSize * 1.5,
    width: coverSize,
  };
  const safeInsets = useSafeAreaInsets();
  const theme = useTheme();

  const deviceType = useBreakpointValue({
    base: "phone",
    md: "tablet",
  });
  const isTablet = deviceType !== "phone";

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setPageLoaded(true);
      });

      return () => task.cancel();
    }, [])
  );

  const active = useSharedValue(0);
  const phase2 = useSharedValue(0);
  const scrollY = useSharedValue<number>(0);
  const isScrolling = useSharedValue(false);
  const containerHeight = useSharedValue(size.height);
  const containerWidth = useSharedValue(size.width);
  const bookReaderOpacity = useSharedValue(0);

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

  const onBackPress = () => {
    setPageLoaded(false);
    navigation.goBack();
  };

  const renderRight = () => {
    return (
      <MaterialIcons name="bookmark-outline" color={"#ffffff"} size={34} />
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
        bookReaderOpacity.value = withTiming(1, { duration: 300 });
      }
    );
  };

  const closeBook = () => {
    console.log("close book");
    setShowingBook(false);
    const duration = 500;
    active.value = withTiming(0, {
      duration: 400,
    });
    bookReaderOpacity.value = withTiming(0, { duration: 300 });

    setTimeout(() => {
      phase2.value = withTiming(0, {
        duration: duration,
      });

      containerWidth.value = withTiming(size.width, {
        duration: duration,
      });
      containerHeight.value = withTiming(size.height, {
        duration: duration,
      });
    }, 180);
  };

  const backdropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(active.value, [0, 1], [0, 1]);
    return {
      opacity: opacity,
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

  const renderAnimatedBookCover = () => {
    return (
      <AnimatedBookCover
        {...{
          book,
          bookReaderOpacity,
          containerHeight,
          containerWidth,
          height,
          openBook,
          pageLoaded,
          phase2,
          scrollY,
          size,
        }}
      >
        <Pressable
          pl="xs"
          pt="xs"
          style={{
            zIndex: 10000,
            position: "absolute",
            top: safeInsets.top,
          }}
          onPress={() => closeBook()}
        >
          <Feather
            name="chevron-left"
            // type="Feather"
            color={"black"}
            size={35}
          />
        </Pressable>
        <PageFlipper
          portrait
          // portrait={!isTablet}
          data={BOOK_PAGES}
        />
      </AnimatedBookCover>
    );
  };

  return (
    <Box flex={1} bg="mainBackground" overflow="hidden">
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
              <Animated.View
                style={[
                  { position: "absolute", zIndex: 5, width: "80%" },
                  headerTitleStyle,
                ]}
              >
                <Text variant="titleMedium" color="white" noOfLines={1}>
                  Harry Potter and the Philosopher's Stone
                </Text>
              </Animated.View>
            );
          }}
        />
      </Animated.View>

      <Animated.ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEnabled={!showingBook}
        style={{
          backgroundColor: theme.colors.primary,
        }}
        contentContainerStyle={{
          backgroundColor: theme.colors.primary,
          paddingBottom: safeInsets.bottom,
        }}
      >
        <BookInfo {...{ book, openBook, navigation, size, topContentSize }} />
        <Box height="100%" mt={-1} backgroundColor="mainBackground" />
      </Animated.ScrollView>
    </Box>
  );
};

export { BookDetails };
