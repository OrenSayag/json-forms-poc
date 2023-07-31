import React, { FC, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  JsonFormsStyleContext,
  vanillaCells,
  vanillaRenderers,
} from "@jsonforms/vanilla-renderers";
import patientSignUpSchema from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.schema";
import patientSignUpUischema from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.uischema";
import patientSignUpData from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.data";
import ajv from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.validation";

const schema = patientSignUpSchema;
const uischema = patientSignUpUischema;
const initialData = patientSignUpData;
const styleContextValue = {
  styles: [
    {
      name: "control",
      classNames: ["my-5"],
    },
    {
      name: "control.input",
      classNames: [
        "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-sans",
      ],
    },
    {
      name: "control.select",
      classNames: [
        "w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out appearance-none",
      ],
    },
    {
      name: "control.label",
      classNames: [
        "block uppercase tracking-wide text-gray-700 text-xs font-bold pb-4",
      ],
    },
    {
      name: "array.button",
      classNames: ["custom-array-button"],
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
      classNames: ["grid grid-cols-3 gap-3"],
    },
    {
      name: "group.layout",
      classNames: ["accordion-item bg-white"],
    },
    {
      name: "group.label",
      classNames: [
        "accordion-button relative flex w-full py-4 transition focus:outline-none block uppercase tracking-wide text-gray-700 text-s font-bold pb-4",
      ],
    },
    {
      name: "Label",
      classNames: ["border-2 border-red-500"],
    },
  ],
};
const PatientSignUpForm: FC = () => {
  const [data, setData] = useState(initialData);
  return (
    <JsonFormsStyleContext.Provider value={styleContextValue}>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
        onChange={({ data, errors }) => setData(data)}
        ajv={ajv}
      />
    </JsonFormsStyleContext.Provider>
  );
};

export default PatientSignUpForm;
