export const clientsData = [
  {
    id: "PB-2026-0042",
    name: "Amandeep Sharma",
    initials: "AS",
    age: 24,
    gender: "Female",
    phone: "+91 98765 43210",
    email: "amandeep@example.com",
    mode: "Online",
    status: "Active",

    concerns: [
      "Anxiety",
      "Sleep",
      "Emotional Regulation",
    ],

    lastSession: "22 Aug 2026",

    nextSession: {
      date: "24 Aug 2026",
      time: "6:00 PM",
      type: "Individual Therapy",
      mode: "Online",
    },

    treatmentGoals: [
      {
        id: 1,
        title: "Establish regular sleep routine",
        completed: true,
      },
      {
        id: 2,
        title: "Reduce anxiety symptoms",
        completed: false,
      },
      {
        id: 3,
        title: "Improve emotional regulation",
        completed: false,
      },
    ],

    sessions: [
      {
        id: "S-012",
        sessionNumber: 12,
        date: "22 Aug 2026",
        time: "6:00 PM",
        duration: 60,
        type: "Individual Therapy",
        mode: "Online",
        status: "Completed",
        focus: "Sleep routine and emotional regulation",
        noteStatus: "Completed",
      },
      {
        id: "S-011",
        sessionNumber: 11,
        date: "15 Aug 2026",
        time: "6:00 PM",
        duration: 60,
        type: "Individual Therapy",
        mode: "Online",
        status: "Completed",
        focus: "Anxiety triggers",
        noteStatus: "Completed",
      },
    ],

    assessments: [
      {
        name: "GAD-7",
        score: 14,
        interpretation: "Moderate",
      },
      {
        name: "PHQ-9",
        score: 10,
        interpretation: "Moderate",
      },
    ],

    homework: [
      {
        id: 1,
        title: "Sleep Diary",
        dueDate: "29 Aug 2026",
        status: "Pending",
      },
      {
        id: 2,
        title: "5-4-3-2-1 Grounding",
        dueDate: "25 Aug 2026",
        status: "Completed",
      },
    ],
  },

  {
    id: "PB-2026-0041",
    name: "Riya Kapoor",
    initials: "RK",
    age: 29,
    gender: "Female",
    phone: "+91 98111 22334",
    email: "riya@example.com",
    mode: "Online",
    status: "Active",

    concerns: [
      "Stress",
      "Work-Life Balance",
    ],

    lastSession: "20 Aug 2026",

    nextSession: {
      date: "27 Aug 2026",
      time: "5:30 PM",
      type: "Follow-up",
      mode: "Online",
    },

    treatmentGoals: [
      {
        id: 1,
        title: "Improve work-life balance",
        completed: false,
      },
    ],

    sessions: [],
    assessments: [],
    homework: [],
  },
];