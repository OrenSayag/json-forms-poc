import { JsonSchema, UISchemaElement } from "@jsonforms/core";
import Ajv from "ajv";

export interface ReferralInfoSchemaParams {
  priceList: ListItem[];
  anamnesis: ListItem[];
  formApprovingPhysicians: ListItem[];
}

export interface FormParams {
  initialData?: any;
  schema: JsonSchema;
  uischema: UISchemaElement;
  ajv?: Ajv;
}

export interface ReferralInfoInitialDataParams {
  samplingDoctorLicense: string;
  samplingDoctorFirstName: string;
  samplingDoctorLastName: string;
  samplingDoctorTitle: string;
  patientId: string;
  patientFirstName: string;
  patientLastName: string;
  referralNum: number;
}

export interface ReferralInfoFormParams {
  schemaParams: ReferralInfoSchemaParams;
  initialDataParams: ReferralInfoInitialDataParams;
}

export interface ListItem {
  label: string;
  value: any;
}

export enum Urgency {
  URGENT = 1,
  NOT_URGENT = 2,
}

export const urgency: ListItem[] = [
  {
    label: "רגיל",
    value: Urgency.URGENT,
  },
  {
    label: "דחוף",
    value: Urgency.NOT_URGENT,
  },
];
