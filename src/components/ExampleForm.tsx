import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import React, { FC, useState } from "react";

import { person } from "@jsonforms/examples";
import { JsonForms } from "@jsonforms/react";

const schema = person.schema;
const uischema = person.uischema;
const initialData = person.data;

const ExampleForm: FC = () => {
  const [data, setData] = useState(initialData);
  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data, errors }) => setData(data)}
    />
  );
};

export default ExampleForm;
