import {
  normalise,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from "@/config/normalize";
import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Modal from "react-native-modal";

export interface modalProps {
  active: boolean;
  closeModal: () => void;
  onModalClose?: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

function AppModal({
  active = false,
  children,
  closeModal,
  onModalClose,
  contentContainerStyle,
}: modalProps & { children: React.ReactNode }) {
  return (
    <View style={modalStyles.container}>
      <Modal
        isVisible={active}
        style={modalStyles.modal}
        onSwipeComplete={closeModal}
        swipeDirection={["down"]}
        onBackdropPress={closeModal}
        onModalHide={onModalClose}
        backdropColor="black"
        backdropOpacity={0.55}
      >
        <View style={[modalStyles.screen, contentContainerStyle]}>
          <View style={modalStyles.border} />
          {children}
        </View>
      </Modal>
    </View>
  );
}

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  screen: {
    backgroundColor: "white",
    borderTopRightRadius: normalise(20),
    borderTopLeftRadius: normalise(20),
    paddingTop: pixelSizeVertical(16),
    maxHeight: "95%",
  },
  border: {
    width: pixelSizeHorizontal(36),
    backgroundColor: "#A7A3B3",
    height: pixelSizeVertical(6),
    alignSelf: "center",
    borderRadius: normalise(15),
  },
});

export default AppModal;
