import React from "react";
import { Image, TouchableOpacity } from "react-native";

interface PublisherCoverProps {
  url: string;
  onPress: () => void;
}

const size = 100;

const PublisherCover: React.FC<PublisherCoverProps> = ({ url, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{ uri: url }}
        style={{
          height: size,
          width: size,
          borderRadius: size / 2,
          margin: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default PublisherCover;
