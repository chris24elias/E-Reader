import { Box, Pressable, Text } from "native-base";
import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  ImageStyle,
} from "react-native";

interface BookCoverProps {
  url: string;
  onPress: () => void;
  size?: number;
  containerStyle?: ViewStyle;
  imageStyle?: StyleProp<ImageStyle>;
}

const BookCover: React.FC<BookCoverProps> = ({
  url,
  onPress,
  size = 100,
  containerStyle,
  imageStyle,
}) => {
  return (
    <Box>
      <Pressable
        onPress={onPress}
        style={[
          {
            height: size * 1.5,
            borderRadius: 12,
            // overflow: "hidden",
            marginRight: 20,
            width: size,
          },
          containerStyle,
        ]}
        shadow="2"
      >
        <Image
          source={{ uri: url }}
          style={[
            {
              height: "100%",
              width: "100%",
              borderRadius: 12,
            },
            imageStyle,
          ]}
        />
      </Pressable>
      <Text mt="s" ml="xs" variant="labelLarge">
        Book Title
      </Text>
    </Box>
  );
};

export default BookCover;
