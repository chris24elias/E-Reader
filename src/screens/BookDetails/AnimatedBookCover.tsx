import { Pressable } from "native-base";
import React from "react";
import { Image, Platform, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export type IAnimatedBookCoverProps = {
  containerHeight;
  size;
  height;
  pageLoaded;
  containerWidth;
  scrollY;
  phase2;
  bookReaderOpacity;
  openBook;
  book;
};

const AnimatedBookCover: React.FC<IAnimatedBookCoverProps> = ({
  children,
  containerHeight,
  size,
  height,
  pageLoaded,
  containerWidth,
  scrollY,
  phase2,
  bookReaderOpacity,
  openBook,
  book,
}) => {
  const perspective = 1000;

  const frontPerspective = Platform.select({
    ios: { perspective: -perspective },
    android: { perspective: 60000 },
    web: { perspective: 60000 }, // same as android
    default: { perspective: 0 },
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
    return {
      height: containerHeight.value,
      width: containerWidth.value,
      flex: 1,
      opacity: 1,
      zIndex: 1000000,
      transform: [
        frontPerspective,
        { translateX: -containerWidth.value / 2 },
        { rotateY: `${rotateY}deg` },
        { translateX: containerWidth.value / 2 },
      ],
    };
  });

  const bookReaderContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: bookReaderOpacity.value,
    };
  });

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
            overflow: "hidden",
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
          <Image
            source={{ uri: book.url }}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 12,
            }}
            resizeMode="stretch"
          />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          {
            position: "absolute",
            zIndex: -100,
            height: "100%",
            width: "100%",
            borderRadius: 12,
            overflow: "hidden",
          },
          bookReaderContainerStyle,
        ]}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export { AnimatedBookCover };
