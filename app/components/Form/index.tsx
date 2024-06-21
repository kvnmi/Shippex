import React, { Fragment } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";

type FormProps<T> = {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
  validationSchema?: (() => any) | any;
  children: React.ReactNode;
};

export default function Index<T extends FormikValues>({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: React.PropsWithChildren<FormProps<T>>) {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
}
