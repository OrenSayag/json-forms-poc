const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    doctorData: {
      type: "object",
      properties: {
        workItem: {
          type: "string",
        },
      },
    },
    personalData: {
      type: "object",
      properties: {
        ["סוג תעודה"]: {
          type: "integer",
          oneOf: [
            {
              const: 1,
              title: "תעודת זהות",
            },
            {
              const: 2,
              title: "דרכון",
            },
          ],
        },
        ["מספר תעודה"]: {
          type: "string",
          isValidPatientId: {},
        },
        ["קוד מדינה"]: {
          type: "string",
        },
        ["שם פרטי"]: {
          type: "string",
        },
        ["שם משפחה"]: {
          type: "string",
        },
        ["תאריך לידה"]: {
          type: "string",
          format: "date",
        },
        ["שם ההורה"]: {
          type: "string",
        },
        ["מגדר"]: {
          type: "integer",
          oneOf: [
            {
              const: 1,
              title: "זכר",
            },
            {
              const: 2,
              title: "נקבה",
            },
            {
              const: 3,
              title: "אחר",
            },
          ],
        },
        ["מגדר מקורי"]: {
          type: "integer",
          oneOf: [
            {
              const: 1,
              title: "זכר",
            },
            {
              const: 2,
              title: "נקבה",
            },
            {
              const: 3,
              title: "אחר",
            },
          ],
        },
        ["נייד"]: {
          type: "string",
        },
      },
    },
  },
};

export default schema;
