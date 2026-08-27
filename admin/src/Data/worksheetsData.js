export const initialTasks = [
  {
    id: '1',
    title: 'Box Breathing Technique',
    description: 'Sit comfortably with your back supported. Inhale 4s, hold 4s, exhale 4s, hold 4s. Repeat 3-5 cycles.',
    type: 'N/A'
  },
  {
    id: '2',
    title: 'Thought Journal',
    description: 'Record situations during the week when you notice feelings of irritability. Note triggers, thoughts, emotions, and alternative responses.',
    type: 'N/A'
  },
  {
    id: '3',
    title: 'Reflection on Relationship',
    description: 'Write about healthy relationship meanings, boundaries, and self-support strategies.',
    type: 'N/A'
  },
  {
    id: '4',
    title: 'Anger Triggers Worksheet',
    description: 'Identify recent anger episodes, triggers, body signals, and behavior patterns.',
    type: 'N/A'
  },
  {
    id: '5',
    title: 'Problem Statements',
    description: 'Briefly state problem areas, common triggers, and early body/thought warning signs.',
    type: 'N/A',
    attachedWorksheets: ['Problem Statements.pdf']
  },
  {
    id: '6',
    title: 'Pendulation Exercise (2-5 minutes)',
    description: 'Find a comfortable position, notice areas of comfort/discomfort, and shift attention gently between them.',
    type: 'N/A'
  },
  {
    id: '7',
    title: 'Thought Record',
    description: 'Complete and discuss in upcoming session.',
    type: 'N/A',
    attachedWorksheets: ['Thought Record.pdf']
  },
  {
    id: '8',
    title: '(Belly Breathing)',
    description: 'Place hand on chest and abdomen. Inhale into belly for 4 seconds, exhale for 6 seconds. Repeat 5-10 minutes.',
    type: 'N/A'
  },
  {
    id: '9',
    title: 'Sleep Hygiene Routine',
    description: 'Maintain consistent sleep schedule, avoid screens 30-60m before bed, limit caffeine, and practice wind-down rituals.',
    type: 'N/A'
  }
];

export const readyAssessments = [
  {
    id: 'gad-7',
    title: 'Generalized Anxiety Disorder 7-item',
    acronym: 'GAD-7',
    description: 'Screening tool to measure the severity of generalized anxiety disorder symptoms over the last 2 weeks.',
    questionsCount: 7
  },
  {
    id: 'phq-9',
    title: 'Patient Health Questionnaire-9',
    acronym: 'PHQ-9',
    description: 'Multipurpose instrument for screening, diagnosing, monitoring, and measuring depression severity.',
    questionsCount: 9
  },
  {
    id: 'rosenberg-ses',
    title: 'Rosenberg Self-Esteem Scale',
    acronym: 'RSES',
    description: '10-item scale measuring global self-worth by evaluating both positive and negative feelings about the self.',
    questionsCount: 10
  }
];

export const worksheetLibrary = {
  CBT: {
    Basics: [
      { name: 'Costs_Benefits of Change.pdf' },
      { name: 'Goals for Therapy.pdf' },
      { name: 'Personal Strengths_ Resources.pdf' },
      { name: 'Personal Values.pdf' },
      { name: 'Problem Statements.pdf' },
      { name: 'The CBT Junction Model.pdf' }
    ]
  },
}