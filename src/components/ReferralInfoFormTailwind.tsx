import React, { FC, FormEvent, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import referralInfoInitialData from "../assets/schemas/json-forms/referral-info/referral-info.data";
import { ReferralInfoFormParams } from "../types/form.type";
import referralInfoSchema from "../assets/schemas/json-forms/referral-info/referral-info.schema";
import referralInfoUiSchema from "../assets/schemas/json-forms/referral-info/referral-info.uischema";
import JsonFormsWrapper from "./JsonFormsWrapper";
import {
  JsonFormsStyleContext,
  vanillaCells,
  vanillaRenderers,
} from "@jsonforms/vanilla-renderers";
import { SelectControl, SelectTester } from "./jsonforms-renderers/Select";
import ArrayLayoutRenderer, {
  ArrayLayoutTester,
} from "./jsonforms-renderers/ArrayLayout";

const uischema = referralInfoUiSchema;

const styleContextValue = {
  styles: [
    {
      name: "control",
      classNames: ["my-2"],
    },
    // {
    //   name: "array.child.controls.delete",
    //   classNames: ["bg-[#472F92] px-6 py-2 text-white font-bold rounded-md"],
    // },
    {
      name: "array.control.add",
      classNames: ["border-2 border-purple-400"],
    },
    {
      name: "array.table",
      classNames: ["border-2 border-blue-500"],
    },
    {
      name: "control.input",
      classNames: [
        "w-full rounded border border-gray-400 focus:border-indigo-500 text-base text-[#333333] outline-none text-gray-700 py-1 px-3 pr-6 leading-8 transition-colors duration-200 ease-in-out font-light disabled:bg-[#E9E9E9]",
      ],
    },
    {
      name: "control.select",
      classNames: [
        "w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 font-light py-1 px-3 leading-8 transition-colors duration-200 ease-in-out appearance-none ",
      ],
    },
    {
      name: "control.label",
      classNames: [
        "block uppercase tracking-wide text-gray-700 text-sm font-normal pb-4 -mb-3 text-right",
      ],
    },
    {
      name: "control.validation",
      classNames: ["text-red-500 font-normal mt-2 text-xs"],
    },
    {
      name: "vertical.layout",
      classNames: [
        "block uppercase tracking-wide text-gray-700 text-s font-bold mb-2",
      ],
    },
    {
      name: "horizontal.layout",
      classNames: ["grid grid-cols-3 gap-12 text-right items-center"],
    },
    {
      name: "group.layout",
      classNames: ["my-5"],
    },
    {
      name: "group.label",
      classNames: [
        "accordion-button relative flex w-full py-4 transition focus:outline-none block uppercase tracking-wide text-gray-700 text-s font-bold pb-4",
      ],
    },
  ],
};

const renderers = [
  ...vanillaRenderers,
  { tester: SelectTester, renderer: SelectControl },
  { tester: ArrayLayoutTester, renderer: ArrayLayoutRenderer },
];

const ReferralInfoFormMaterial: FC<ReferralInfoFormParams> = ({
  schemaParams,
  initialDataParams,
}) => {
  const initialData = referralInfoInitialData(initialDataParams);
  const [data, setData] = useState(initialData);
  const schema = referralInfoSchema(schemaParams);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SUBMIT");
    console.log(data);
  };

  const Form = (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={renderers}
      cells={vanillaCells}
      onChange={({ data, errors }) => {
        console.log(data);
        setData(data);
      }}
    />
  );
  return (
    <JsonFormsStyleContext.Provider value={styleContextValue}>
      <JsonFormsWrapper jsonForms={Form} onSubmit={submit} />
    </JsonFormsStyleContext.Provider>
  );
};

export default ReferralInfoFormMaterial;
