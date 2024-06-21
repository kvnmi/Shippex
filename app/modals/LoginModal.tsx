import AppModal, { modalProps } from "@/components/AppModal";
import LoginPage from "@/screens/LoginPage";
import React from "react";

interface props extends modalProps {
  onLogin: () => void;
}

export default function LoginModal({ active, closeModal, onLogin }: props) {
  return (
    <AppModal
      active={active}
      closeModal={closeModal}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LoginPage
        closeModal={closeModal}
        onLogin={() => {
          closeModal();
          onLogin();
        }}
      />
    </AppModal>
  );
}
