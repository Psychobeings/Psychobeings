import React, { useState } from 'react';

const assessmentContent = {
  'GAD-7': {
    title: 'Generalized Anxiety Disorder-7',
    questions: [
      'Feeling nervous, anxious, or on edge',
      'Not being able to stop or control worrying',
      'Worrying too much about different things',
      'Trouble relaxing',
      'Being so restless that it is hard to sit still',
      'Becoming easily annoyed or irritable',
      'Feeling afraid, as if something awful might happen'
    ],
    options: ['Not at all (0)', 'Several days (1)', 'More than half the days (2)', 'Nearly every day (3)']
  },
  'PHQ-9': {
    title: 'Patient Health Questionnaire-9',
    questions: [
      'Little interest or pleasure in doing things',
      'Feeling down, depressed, or hopeless',
      'Trouble falling or staying asleep, or sleeping too much',
      'Feeling tired or having little energy',
      'Poor appetite or overeating',
      'Feeling bad about yourself — or that you are a failure',
      'Trouble concentrating on things',
      'Moving or speaking so slowly that other people could have noticed? Or the opposite',
      'Thoughts that you would be better off dead or of hurting yourself'
    ],
    options: ['Not at all (0)', 'Several days (1)', 'More than half the days (2)', 'Nearly every day (3)']
  },
  'RSES': {
    title: 'Rosenberg Self-Esteem Scale',
    questions: [
      'On the whole, I am satisfied with myself.',
      'At times I think I am no good at all.',
      'I feel that I have a number of good qualities.',
      'I am able to do things as well as most other people.',
      'I feel I do not have much to be proud of.',
      'I certainly feel useless at times.',
      'I feel that I am a person of worth, at least on an equal plane with others.',
      'I wish I could have more respect for yourself.',
      'All in all, I am inclined to feel that I am a failure.',
      'I take a positive attitude toward myself.'
    ],
    options: ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree']
  }
};

export default function AssessmentForm({ type = 'GAD-7', onSubmitResult }) {
  const assessment = assessmentContent[type] || assessmentContent['GAD-7'];
  const [answers, setAnswers] = useState({});

  const handleSelect = (qIndex, score) => {
    setAnswers({ ...answers, [qIndex]: score });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    onSubmitResult({ type, totalScore, answers });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-stone-200 max-w-xl mx-auto space-y-6 font-sans text-xs">
      <div>
        <h2 className="text-base font-bold text-stone-900">{assessment.title}</h2>
        <p className="text-stone-500 mt-1">Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
      </div>

      <div className="space-y-5">
        {assessment.questions.map((q, idx) => (
          <div key={idx} className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
            <p className="font-semibold text-stone-800">{idx + 1}. {q}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {assessment.options.map((opt, scoreVal) => (
                <button
                  type="button"
                  key={scoreVal}
                  onClick={() => handleSelect(idx, scoreVal)}
                  className={`p-2 rounded-xl text-center font-semibold transition-all border ${
                    answers[idx] === scoreVal
                      ? 'bg-[#237A88] text-white border-[#237A88]'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#237A88] text-white font-bold rounded-2xl hover:bg-[#1C646F] transition-all shadow-sm"
      >
        Submit Assessment
      </button>
    </form>
  );
}