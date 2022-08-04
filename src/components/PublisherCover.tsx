import { Pressable } from "native-base";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

interface PublisherCoverProps {
  url: string;
  onPress: () => void;
}

const size = 80;

const PublisherCover: React.FC<PublisherCoverProps> = ({ url, onPress }) => {
  return (
    <Pressable shadow="2" onPress={onPress}>
      <Image
        source={{ uri: url }}
        style={{
          height: size,
          width: size,
          borderRadius: size / 2,
          margin: 10,
          borderWidth: 2,
          borderColor: "white",
        }}
      />
    </Pressable>
  );
};

export default PublisherCover;
