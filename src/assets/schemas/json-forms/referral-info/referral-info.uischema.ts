const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Label",
              text: "פרטי רופא דוגם",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/SamplingDoctorLicense",
              label: "מספר רישיון",
            },
            {
              type: "Control",
              scope: "#/properties/SamplingDoctorFirstName",
              label: "שם פרטי",
            },
            {
              type: "Control",
              scope: "#/properties/SamplingDoctorLastName",
              label: "שם משפחה",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/SamplingDoctorTitle",
              label: "תואר",
            },
            {
              type: "Control",
              scope: "#/properties/SamplingDoctorTitle",
              rule: {
                effect: "HIDE",
                condition: {},
              },
            },
            {
              type: "Control",
              scope: "#/properties/SamplingDoctorTitle",
              rule: {
                effect: "HIDE",
                condition: {},
              },
            },
          ],
        },
      ],
    },
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Label",
              text: "פרטי מטופל",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/PatientID",
              label: "תעודת זהות",
            },
            {
              type: "Control",
              scope: "#/properties/PatientFirstName",
              label: "שם פרטי",
            },
            {
              type: "Control",
              scope: "#/properties/PatientLastName",
              label: "שם משפחה",
            },
          ],
        },
      ],
    },
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Label",
              text: "פרטי הפנייה",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/ReferralNum",
              label: "מספר הפנייה",
            },
            {
              type: "Control",
              scope: "#/properties/ObligationNumber",
              label: "מספר התחייבות",
            },
            {
              type: "Control",
              scope: "#/properties/ReferralNum",
              rule: {
                effect: "HIDE",
                condition: {},
              },
            },
          ],
        },
      ],
    },
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Label",
              text: "נתונים כלליים",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/LastMenstruationDate",
              label: "מועד וסת אחרונה",
            },
            {
              type: "Control",
              scope: "#/properties/CustomerAppointmentIdNotForSendToLV",
              label: "מזהה ביקור",
            },
            {
              type: "Control",
              scope: "#/properties/LastMenstruationDate",
              rule: {
                effect: "HIDE",
                condition: {},
              },
            },
          ],
        },
      ],
    },
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Label",
              text: "פרטי בדיקה",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/WorkItem",
              label: "סוג בדיקה לחיוב",
            },
            {
              type: "Control",
              scope: "#/properties/Urgency",
              label: "דחיפות",
            },
            {
              type: "Control",
              scope: "#/properties/Urgency",
              rule: {
                effect: "HIDE",
                condition: {},
              },
            },
          ],
        },
      ],
    },
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Label",
              text: "מערך אבחנות היסטוריות",
            },
          ],
        },
        {
          type: "VerticalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/Anamnesis",
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/ClinicalAnamnesis",
                      label: "אבחנה קלינית",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/AnamnesisDate",
                      label: "תאריך אבחנה",
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Label",
              text: "פרטי ממלא הטופס",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/FormFiller/properties/Name",
              label: "שם ממלא הטופס",
            },
            {
              type: "Control",
              scope: "#/properties/FormFiller/properties/ApprovingPhysician",
              label: "שם הרופא המאשר",
            },
            {
              type: "Control",
              scope: "#/properties/FormFiller/properties/ApprovingPhysician",
              rule: {
                effect: "HIDE",
                condition: {},
              },
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/gender",
            },
            {
              type: "Control",
              scope: "#/properties/lastMenstruationDate",
              rule: {
                effect: "ENABLE",
                condition: {
                  scope: "#/properties/gender",
                  schema: { const: "female" },
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

export default uischema;
