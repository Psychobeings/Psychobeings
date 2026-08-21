import React, { useMemo, useState } from 'react';

const phq9Questions = [
  'Little interest or pleasure in doing things',
  'Feeling down, depressed, or hopeless',
  'Trouble falling/staying asleep, or sleeping too much',
  'Feeling tired or having little energy',
  'Poor appetite or overeating',
  'Feeling bad about yourself or that you are a failure',
  'Trouble concentrating on things',
  'Moving/speaking slowly or being overly fidgety/restless',
  'Thoughts that you would be better off dead, or of hurting yourself',
];

const gad7Questions = [
  'Feeling nervous, anxious, or on edge',
  'Not being able to stop or control worrying',
  'Worrying too much about different things',
  'Trouble relaxing',
  'Being so restless that it is hard to sit still',
  'Becoming easily annoyed or irritable',
  'Feeling afraid, as if something awful might happen',
];

const rsesQuestions = [
  { text: 'I feel that I am a person of worth, at least on an equal plane with others.', reverse: false },
  { text: 'I feel that I have a number of good qualities.', reverse: false },
  { text: 'All in all, I am inclined to feel that I am a failure.', reverse: true },
  { text: 'I am able to do things as well as most other people.', reverse: false },
  { text: 'I feel I do not have much to be proud of.', reverse: true },
  { text: 'I take a positive attitude toward myself.', reverse: false },
  { text: 'On the whole, I am satisfied with myself.', reverse: false },
  { text: 'I wish I could have more respect for myself.', reverse: true },
  { text: 'I certainly feel useless at times.', reverse: true },
  { text: 'At times I think I am no good at all.', reverse: true },
];

const scoreLabel = (score, type) => {
  if (type === 'phq') {
    if (score >= 20) return 'Severe';
    if (score >= 15) return 'Moderately Severe';
    if (score >= 10) return 'Moderate';
    if (score >= 5) return 'Mild';
    return 'Minimal';
  }

  if (type === 'gad') {
    if (score >= 15) return 'Severe';
    if (score >= 10) return 'Moderate';
    if (score >= 5) return 'Mild';
    return 'Minimal';
  }

  if (score < 15) return 'Low Self-Esteem';
  if (score <= 25) return 'Average Self-Esteem';
  return 'High Self-Esteem';
};

const PrivateScreening = () => {
  const [clientName, setClientName] = useState('');
  const [answers, setAnswers] = useState({ phq: {}, gad: {}, rses: {} });
  const [report, setReport] = useState('');

  const isFormComplete = useMemo(() => {
    return (
      phq9Questions.every((_, index) => answers.phq[index] !== undefined) &&
      gad7Questions.every((_, index) => answers.gad[index] !== undefined) &&
      rsesQuestions.every((_, index) => answers.rses[index] !== undefined)
    );
  }, [answers]);

  const handleOptionChange = (group, index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [index]: Number(value),
      },
    }));
  };

  const generateReport = () => {
    const phqScore = phq9Questions.reduce((sum, _, idx) => sum + (answers.phq[idx] || 0), 0);
    const gadScore = gad7Questions.reduce((sum, _, idx) => sum + (answers.gad[idx] || 0), 0);

    let rsesScore = 0;
    rsesQuestions.forEach((question, idx) => {
      const raw = answers.rses[idx] || 1;
      const score = raw - 1;
      const adjusted = question.reverse ? 3 - score : score;
      rsesScore += adjusted;
    });

    const phqItem9 = answers.phq[8] || 0;
    const riskFlag = phqItem9 > 0
      ? 'IMMEDIATE TRIAGE FLAG: Client endorsed thoughts of self-harm or suicidal ideation on PHQ-9 item 9.'
      : 'No immediate self-harm safety flags triggered on screening items.';

    const reportText = `==================================================
PRE-INTAKE SCREENING SUMMARY REPORT
==================================================

This tool is for screening and triage purposes only. It does not constitute a diagnosis or a formal clinical evaluation.

Client Identifier: ${clientName || 'Anonymous'}
Date: ${new Date().toLocaleDateString()}

--------------------------------------------------
QUANTITATIVE SCORE OVERVIEW
--------------------------------------------------
1. PHQ-9 (Depression Severity): ${phqScore} / 27
   Severity: ${scoreLabel(phqScore, 'phq')}
   Safety Flag: ${phqItem9 > 0 ? `FLAGGED (Score: ${phqItem9})` : 'None'}

2. GAD-7 (Anxiety Severity): ${gadScore} / 21
   Severity: ${scoreLabel(gadScore, 'gad')}

3. RSES (Rosenberg Self-Esteem Scale): ${rsesScore} / 30
   Interpretation: ${scoreLabel(rsesScore, 'rses')}

--------------------------------------------------
CLINICAL NOTES & TRIAGE FLAGS
--------------------------------------------------
${riskFlag}

Scores reflect self-reported symptoms over the recent period and should be reviewed by a licensed therapist before any diagnostic or treatment decisions are made.
==================================================`;

    setReport(reportText);
  };

  const copyToClipboard = async () => {
    if (!report) return;
    try {
      await navigator.clipboard.writeText(report);
      alert('Report copied to clipboard.');
    } catch (error) {
      alert('Copy failed. Please select and copy the report manually.');
    }
  };

  const resetForm = () => {
    setClientName('');
    setAnswers({ phq: {}, gad: {}, rses: {} });
    setReport('');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Private Clinical Screening</h2>
        <div className="mb-6 p-4 rounded-md bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900">
          This tool is for therapist-only screening and triage. It does not constitute a formal diagnosis or evaluation.
        </div>

        <div className="mb-6">
          <label className="font-semibold text-gray-700">Client Name / ID</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter name or ID"
          />
        </div>

        <div className="space-y-8">
          <section className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold mb-3">PHQ-9 (Mood)</h3>
            <p className="text-sm text-gray-600 mb-4">0 = Not at all | 1 = Several days | 2 = More than half the days | 3 = Nearly every day</p>
            {phq9Questions.map((question, index) => (
              <div key={index} className="mb-4 border-b pb-3">
                <p className="font-medium mb-2">{index + 1}. {question}</p>
                <div className="flex flex-wrap gap-4">
                  {[0, 1, 2, 3].map((value) => (
                    <label key={value} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name={`phq-${index}`}
                        checked={answers.phq[index] === value}
                        onChange={() => handleOptionChange('phq', index, value)}
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold mb-3">GAD-7 (Anxiety)</h3>
            <p className="text-sm text-gray-600 mb-4">0 = Not at all | 1 = Several days | 2 = More than half the days | 3 = Nearly every day</p>
            {gad7Questions.map((question, index) => (
              <div key={index} className="mb-4 border-b pb-3">
                <p className="font-medium mb-2">{index + 1}. {question}</p>
                <div className="flex flex-wrap gap-4">
                  {[0, 1, 2, 3].map((value) => (
                    <label key={value} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name={`gad-${index}`}
                        checked={answers.gad[index] === value}
                        onChange={() => handleOptionChange('gad', index, value)}
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-xl font-semibold mb-3">Rosenberg Self-Esteem Scale</h3>
            <p className="text-sm text-gray-600 mb-4">1 = Strongly Disagree | 2 = Disagree | 3 = Agree | 4 = Strongly Agree</p>
            {rsesQuestions.map((question, index) => (
              <div key={index} className="mb-4 border-b pb-3">
                <p className="font-medium mb-2">{index + 1}. {question.text}</p>
                <div className="flex flex-wrap gap-4">
                  {[1, 2, 3, 4].map((value) => (
                    <label key={value} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name={`rses-${index}`}
                        checked={answers.rses[index] === value}
                        onChange={() => handleOptionChange('rses', index, value)}
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={generateReport}
            disabled={!isFormComplete}
            className={`px-5 py-3 rounded-md text-white font-semibold ${isFormComplete ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Generate Therapist Report
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="px-5 py-3 rounded-md bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
          >
            Reset
          </button>
        </div>

        {report && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">Generated Summary Report</h3>
              <button
                type="button"
                onClick={copyToClipboard}
                className="px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700"
              >
                Copy Report
              </button>
            </div>
            <textarea
              readOnly
              value={report}
              className="w-full min-h-[300px] p-4 border border-gray-300 rounded-md bg-slate-50 text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateScreening;
