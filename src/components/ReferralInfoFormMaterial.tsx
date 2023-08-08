import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import React, { FC, FormEvent, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import referralInfoInitialData from "../assets/schemas/json-forms/referral-info/referral-info.data";
import { ReferralInfoFormParams } from "../types/form.type";
import referralInfoSchema from "../assets/schemas/json-forms/referral-info/referral-info.schema";
import referralInfoUiSchema from "../assets/schemas/json-forms/referral-info/referral-info.uischema";
import JsonFormsWrapper from "./JsonFormsWrapper";

const uischema = referralInfoUiSchema;

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
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data, errors }) => {
        console.log(data);
        setData(data);
      }}
    />
  );
  console.log(schema);
  return <JsonFormsWrapper jsonForms={Form} onSubmit={submit} />;
  // return <div>{JSON.stringify(schema)}</div>;
};

export default ReferralInfoFormMaterial;
