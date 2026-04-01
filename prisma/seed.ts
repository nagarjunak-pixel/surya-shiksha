import { PrismaClient, BoardType, LessonType, MasteryLevel, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const subjects = ['Math', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science'];

async function main() {
  await prisma.lessonReview.deleteMany();
  await prisma.agentLog.deleteMany();
  await prisma.studentProgress.deleteMany();
  await prisma.masteryRecord.deleteMany();
  await prisma.assessment.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.session.deleteMany();
  await prisma.studentProfile.deleteMany();
  await prisma.parentProfile.deleteMany();
  await prisma.teacherProfile.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash('demo123', 10);

  const student = await prisma.user.create({ data: { email: 'arjun@surya.ai', name: 'Arjun Sharma', role: UserRole.STUDENT, passwordHash } });
  const parent = await prisma.user.create({ data: { email: 'priya@surya.ai', name: 'Priya Sharma', role: UserRole.PARENT, passwordHash } });
  const teacher = await prisma.user.create({ data: { email: 'ramesh@surya.ai', name: 'Dr. Ramesh Iyer', role: UserRole.TEACHER, passwordHash } });
  await prisma.user.create({ data: { email: 'admin@surya.ai', name: 'System Admin', role: UserRole.ADMIN, passwordHash } });

  const parentProfile = await prisma.parentProfile.create({
    data: { userId: parent.id, linkedStudentIds: [student.id] }
  });

  await prisma.studentProfile.create({
    data: {
      userId: student.id,
      grade: 6,
      board: BoardType.CBSE,
      learningStyle: 'Visual + Story based',
      streakDays: 5,
      totalXP: 860,
      linkedParentId: parentProfile.id
    }
  });

  await prisma.teacherProfile.create({
    data: {
      userId: teacher.id,
      subjects: ['Math', 'Science', 'Computer Science']
    }
  });

  for (const [index, name] of subjects.entries()) {
    const subject = await prisma.subject.create({
      data: {
        name,
        board: BoardType.CBSE,
        grade: 6,
        description: `${name} foundations with fun activities and real-world thinking.`,
        iconEmoji: ['🔢', '🧪', '📚', '🌍', '🪔', '💻'][index]
      }
    });

    for (let t = 1; t <= 3; t++) {
      const topic = await prisma.topic.create({
        data: {
          subjectId: subject.id,
          title: `${name} Topic ${t}`,
          description: `Core ${name} concept ${t} for grade 6 with practical examples.`,
          difficulty: Math.min(5, t + 1),
          estimatedMinutes: 45,
          prerequisites: [`${name} Basics`],
          learningObjectives: ['Understand concept', 'Apply in scenarios', 'Solve practice questions'],
          commonMistakes: ['Skipping units', 'Misreading question', 'Rushing calculations'],
          realWorldExamples: ['Daily life application', 'School activity', 'Community observation'],
          order: t
        }
      });

      for (let l = 1; l <= 2; l++) {
        await prisma.lesson.create({
          data: {
            topicId: topic.id,
            title: `${topic.title} - Lesson ${l}`,
            content: `# ${topic.title} Lesson ${l}\n\nWelcome to an interactive ${name} lesson with examples, stories, and guided practice.`,
            type: [LessonType.INTERACTIVE, LessonType.STORY][l - 1] ?? LessonType.VISUAL,
            difficulty: t,
            estimatedMinutes: 20,
            order: l
          }
        });
      }

      const questions = Array.from({ length: 5 }).map((_, i) => ({
        id: `${topic.id}-q${i + 1}`,
        type: 'mcq',
        question: `${name} ${t}: Practice question ${i + 1}?`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctIndex: i % 4,
        hint: 'Think step by step and eliminate unlikely choices.'
      }));

      await prisma.assessment.create({
        data: {
          topicId: topic.id,
          title: `${topic.title} Mastery Check`,
          questions,
          passingScore: 60,
          timeLimit: 15,
          masteryTarget: MasteryLevel.APPLY
        }
      });

      await prisma.masteryRecord.create({
        data: {
          studentId: student.id,
          topicId: topic.id,
          level: [MasteryLevel.UNDERSTAND, MasteryLevel.SOLVE, MasteryLevel.APPLY][t - 1],
          score: 50 + t * 12,
          attempts: t,
          lastAttemptAt: new Date()
        }
      });
    }
  }

  for (let d = 0; d < 7; d++) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    date.setHours(0, 0, 0, 0);
    await prisma.studentProgress.create({
      data: {
        studentId: student.id,
        date,
        minutesSpent: 25 + d * 5,
        lessonsCompleted: 1 + (d % 3),
        assessmentsTaken: d % 2,
        xpEarned: 40 + d * 10
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
