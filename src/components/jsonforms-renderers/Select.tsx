import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  isEnumControl,
  rankWith,
  ControlProps,
  isOneOfControl,
} from "@jsonforms/core";
import { useStyles } from "@jsonforms/vanilla-renderers";
import { classNames } from "../../services/utilities.service";

const CustomControl = ({
  data,
  handleChange,
  path,
  schema,
  label,
  required,
  uischema,
}: ControlProps) => {
  const styles = useStyles();

  const selectControl = styles?.find(({ name }) => name === "control.select");
  const labelControl = styles?.find(({ name }) => name === "control.label");

  const shouldHide = uischema.rule?.effect === "HIDE";

  if (shouldHide) {
    return null;
  }

  const chevron = (
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
      </svg>
    </div>
  );

  return (
    <div>
      <label
        htmlFor={path}
        className={classNames(String(labelControl?.classNames), "mt-2")}
      >
        {label}
        {required ? "*" : ""}
      </label>
      <div className="relative">
        {chevron}
        <select
          id={path}
          value={data}
          onChange={(ev) => handleChange(path, ev.currentTarget.value)}
          className={String(selectControl?.classNames)}
        >
          {schema.oneOf?.map((option) => (
            <option key={option.const} value={option.const}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const SelectControl = withJsonFormsControlProps(CustomControl);

export const SelectTester = rankWith(3, isOneOfControl);
