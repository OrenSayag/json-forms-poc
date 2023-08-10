import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps, rankWith, uiTypeIs } from "@jsonforms/core";

const Button = ({ label, uischema, data, path }: ControlProps) => {
  return <button className={"border-2 border-red-500 p-12"}>{label}</button>;
};

export const ButtonRenderer = withJsonFormsControlProps(Button);

export const ButtonTester = rankWith(3, uiTypeIs("Button"));
