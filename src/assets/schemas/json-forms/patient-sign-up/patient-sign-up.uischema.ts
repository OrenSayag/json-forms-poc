const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Label",
      text: "פרטי מטופל",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/סוג תעודה",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/מספר תעודה",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/קוד מדינה",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/personalData/properties/סוג תעודה",
              schema: { const: 1 },
            },
          },
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/שם פרטי",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/שם משפחה",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/תאריך לידה",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/שם ההורה",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/מגדר",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/מגדר מקורי",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/נייד",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/נייד",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/personalData/properties/סוג תעודה",
              schema: { const: 999 },
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/נייד",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/personalData/properties/סוג תעודה",
              schema: { const: 999 },
            },
          },
        },
      ],
    },
    {
      type: "Label",
      text: "פרטי רופא",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/doctorData/properties/שם הרופא",
        },
      ],
    },
  ],
};

export default uischema;
