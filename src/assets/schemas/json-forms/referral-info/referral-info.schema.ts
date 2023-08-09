import { ReferralInfoSchemaParams, urgency } from "../../../../types/form.type";
import { listItemsToOneOf } from "../../../../services/utilities.service";

export const schema = (params: ReferralInfoSchemaParams) => ({
  type: "object",
  additionalProperties: false,
  required: ["ObligationNumber", "FormFiller.Name"],
  properties: {
    SamplingDoctorLicense: {
      type: "string",
      readOnly: true,
    },
    SamplingDoctorFirstName: {
      type: "string",
      readOnly: true,
    },
    SamplingDoctorLastName: {
      type: "string",
      readOnly: true,
    },
    SamplingDoctorTitle: {
      type: "string",
      readOnly: true,
    },
    PatientID: {
      type: "string",
      readOnly: true,
    },
    PatientFirstName: {
      type: "string",
      readOnly: true,
    },
    PatientLastName: {
      type: "string",
      readOnly: true,
    },
    ReferralNum: {
      type: "integer",
      readOnly: true,
    },
    ObligationNumber: {
      type: "string",
      minLength: 7,
    },
    LastMenstruationDate: {
      type: "string",
      format: "date",
    },
    CustomerAppointmentIdNotForSendToLV: {
      type: "string",
    },
    WorkItem: {
      type: "string",
      oneOf: listItemsToOneOf(params.priceList),
    },
    Urgency: {
      type: "integer",
      oneOf: listItemsToOneOf(urgency),
    },
    Anamnesis: {
      type: "array",
      items: {
        type: "object",
        properties: {
          ClinicalAnamnesis: {
            type: "string",
            oneOf: listItemsToOneOf(params.anamnesis),
          },
          AnamnesisDate: {
            type: "string",
            format: "date",
          },
        },
      },
    },
    FormFiller: {
      type: "object",
      required: ["Name"],
      properties: {
        Name: {
          type: "string",
        },
        ApprovingPhysician: {
          type: "string",
          oneOf: listItemsToOneOf(params.formApprovingPhysicians),
        },
      },
    },
  },
});

export default schema;
