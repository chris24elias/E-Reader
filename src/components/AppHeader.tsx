import { useNavigation } from "@react-navigation/core";
import { Box, Icon, Text } from "native-base";
import React from "react";
import { StyleSheet, useWindowDimensions, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface AppHeaderProps {
  title: string;
  showBack?: boolean;
  showMenu?: boolean;
  renderRight?: any;
  onBackPress?: any;
  containerStyle?: ViewStyle;
  backIconColor?: string;
  renderTitle?: () => any;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  renderRight,
  showBack,
  showMenu,
  onBackPress,
  containerStyle,
  backIconColor,
  renderTitle,
}) => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const renderLeft = () => {
    if (showBack) {
      return (
        <Icon
          name="chevron-left"
          // type="Feather"
          color={backIconColor || "white"}
          onPress={() => {
            if (onBackPress) {
              onBackPress();
              return;
            }
            navigation.goBack();
          }}
          size={35}
        />
      );
    }
    if (showMenu) {
      return (
        <Icon
          name="menu"
          // type="MaterialIcons"
          size={35}
        />
      );
    }

    return null;
  };

  return (
    <Box
      backgroundColor="mainBackground"
      px="s"
      py="m"
      style={[
        {
          paddingTop: insets.top,
        },
        containerStyle,
      ]}
    >
      <Box
        flexDirection="row"
        height={height * 0.06}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex={1} justifyContent="center" alignItems="flex-start">
          {renderLeft()}
        </Box>
        <Box
          flexDirection="row"
          flex={5}
          justifyContent="center"
          alignItems="center"
        >
          {renderTitle ? (
            renderTitle()
          ) : (
            <Text variant="subheader">{title}</Text>
          )}
        </Box>
        <Box
          flexDirection="row"
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          {renderRight ? renderRight() : null}
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
