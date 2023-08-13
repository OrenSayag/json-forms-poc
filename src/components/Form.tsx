import React, { FC, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import referralInfoInitialData from "../assets/schemas/json-forms/referral-info/referral-info.data";
import { FormParams, ReferralInfoFormParams } from "../types/form.type";
import referralInfoSchema from "../assets/schemas/json-forms/referral-info/referral-info.schema";
import referralInfoUiSchema from "../assets/schemas/json-forms/referral-info/referral-info.uischema";
import JsonFormsWrapper from "./JsonFormsWrapper";
import {
  JsonFormsStyleContext,
  vanillaCells,
} from "@jsonforms/vanilla-renderers";
import { ValidationMode } from "@jsonforms/core";
import { renderers, styleContext } from "../assets/schemas/json-forms/config";

const uischema = referralInfoUiSchema;

const Form: FC<FormParams> = ({ uischema, schema, ajv, initialData }) => {
  // const initialData = referralInfoInitialData(initialDataParams);
  const [data, setData] = useState(initialData);
  // const schema = referralInfoSchema(schemaParams);

  const [validationMode, setValidationMode] =
    useState<ValidationMode>("ValidateAndHide");
  const showValidationMessages = () => {
    setValidationMode("ValidateAndShow");
  };
  const submit = () => {
    console.log("SUBMIT");
    showValidationMessages();
  };

  const Form = (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={renderers}
      cells={vanillaCells}
      onChange={({ data, errors }) => {
        setData(data);
      }}
      validationMode={validationMode}
      ajv={ajv}
    />
  );
  return (
    <JsonFormsStyleContext.Provider value={styleContext}>
      <JsonFormsWrapper jsonForms={Form} onSubmit={submit} />
      <pre dir={"ltr"}>{JSON.stringify(data, null, 2)}</pre>
    </JsonFormsStyleContext.Provider>
  );
};

export default Form;
