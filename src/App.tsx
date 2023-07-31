import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import {JsonForms} from "@jsonforms/react";

const schema = person.schema;
const uischema = person.uischema;
const initialData = person.data;

function App() {
  const [data, setData] = useState(initialData);
  return (
    <div className="App">
      <div className='App'>
        <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data, errors }) => setData(data)}
        />
      </div>
    </div>
  );
}

export default App;
