import AJV, { SchemaValidateFunction } from "ajv";
import ajvErrors from "ajv-errors";
import { AnySchemaObject, DataValidationCxt } from "ajv/lib/types";
import addFormats from "ajv-formats";

const ajv = new AJV({
  allErrors: true,
  strict: false,
});

ajvErrors(ajv, { singleError: true, keepErrors: false });
addFormats.default(ajv);

const isValidPatientId: SchemaValidateFunction = (
  schema: any,
  data: any,
  parentSchema?: AnySchemaObject,
  dataCxt?: DataValidationCxt
) => {
  console.log({ parentSchema, data, dataCxt, schema });
  const patientIdType = (dataCxt?.rootData as any)?.["personalData"]?.[
    "סוג תעודה"
  ];
  if (patientIdType === 1) {
    if (data.length === 9) {
      return true;
    }
    isValidPatientId.errors = [
      { message: "תעודת זהות חייבת להיות באורך 9 ספרות" },
    ];
    return false;
  }
  if (patientIdType === 2) {
    if (data.length === 11) {
      return true;
    }
    isValidPatientId.errors = [{ message: "דרכון חייב להיות באורך 11 ספרות" }];
    return false;
  }
  return true;
};

ajv.addKeyword({
  keyword: "isValidPatientId",
  validate: isValidPatientId,
});
export default ajv;
