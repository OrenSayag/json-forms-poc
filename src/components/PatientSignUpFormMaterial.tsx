import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import React, { FC, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import patientSignUpSchema from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.schema";
import patientSignUpUischema from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.uischema";
import patientSignUpData from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.data";
import ajv from "../assets/schemas/json-forms/patient-sign-up/patient-sign-up.validation";

const schema = patientSignUpSchema;
const uischema = patientSignUpUischema;
const initialData = patientSignUpData;

const PatientSignUpFormMaterial: FC = () => {
  const [data, setData] = useState(initialData);
  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data, errors }) => setData(data)}
      ajv={ajv}
    />
  );
};

export default PatientSignUpFormMaterial;
