import React, { FC } from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";
import { AppButtonProps } from "@/interfaces/appComponents";

interface Props extends AppButtonProps {}

const SubmitButton: FC<Props> = (props) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();
  return (
    <AppButton
      {...props}
      onPress={handleSubmit}
      disabled={props.disabled || !isValid || !dirty}
    />
  );
};

export default SubmitButton;
