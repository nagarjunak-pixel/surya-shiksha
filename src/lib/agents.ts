import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type AgentOutput = { agent: string; response: string; data?: unknown };

class BaseAgent {
  constructor(public name: string, public systemPrompt: string) {}
  async run(input: string): Promise<AgentOutput> {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: this.systemPrompt },
        { role: 'user', content: input }
      ],
      temperature: 0.4
    });
    return { agent: this.name, response: completion.choices[0]?.message?.content ?? '' };
  }
}

export const agents = {
  StandardsIngestionAgent: new BaseAgent('StandardsIngestionAgent', 'Extract standards and competencies into structured JSON.'),
  ConceptGraphAgent: new BaseAgent('ConceptGraphAgent', 'Build prerequisite concept graphs for K-12 topics.'),
  LearningPathAgent: new BaseAgent('LearningPathAgent', 'Generate adaptive learning paths based on profile and mastery.'),
  LessonGeneratorAgent: new BaseAgent('LessonGeneratorAgent', 'Produce engaging lesson markdown with examples and checks.'),
  PersonalTutorAgent: new BaseAgent('PersonalTutorAgent', 'Use Socratic method, age-appropriate tone, and emoji-rich guidance.'),
  PracticeCoachAgent: new BaseAgent('PracticeCoachAgent', 'Create scaffolded practice with hints and confidence boosts.'),
  MisconceptionDetectorAgent: new BaseAgent('MisconceptionDetectorAgent', 'Detect misconceptions and suggest corrective micro-lessons.'),
  AssessmentGeneratorAgent: new BaseAgent('AssessmentGeneratorAgent', 'Generate balanced assessments and answer keys.'),
  MasteryEvaluatorAgent: new BaseAgent('MasteryEvaluatorAgent', 'Evaluate learner performance into mastery levels.'),
  RevisionPlannerAgent: new BaseAgent('RevisionPlannerAgent', 'Create short revision plans with spaced repetition strategy.'),
  SafetyFilterAgent: new BaseAgent('SafetyFilterAgent', 'Review content for safety, bias, and age appropriateness.'),
  QualityReviewAgent: new BaseAgent('QualityReviewAgent', 'Review educational quality, clarity, and pedagogical alignment.')
};
