"use client";

import { BookOpenText } from "lucide-react";
import { SectionCard } from "../../../_components/layout/SectionCard";

export default function Documentation() {
  return (
    <div className="space-y-5">
      <SectionCard
        icon={BookOpenText}
        title="Documentation"
        description="A brief overview of GradeFlow and how it helps teachers and students."
      >
        <div className="space-y-4 text-[20px] text-slate-600 dark:text-slate-300 font-[var(--font-montserrat)]">
          <p>
            GradeFlow is a web platform for creating, delivering, and grading school assessments in
            one place. Teachers can build quizzes and exams quickly, publish them to students, and
            review results in real time from any device.
          </p>
          <p>
            The dashboard keeps classes, homework, and exams organized with clear status tabs,
            deadlines, and quick actions. Students can access tests in seconds, submit work online,
            and receive feedback as soon as grades are released.
          </p>
          <p>
            Core features include time-controlled exams, instant grading, reusable question banks,
            performance insights, and a focused notification center that highlights what needs
            attention first.
          </p>
          <p>
            GradeFlow is designed for speed, clarity, and accessibility. Light and dark themes,
            responsive layouts, and focused workflows help reduce manual grading effort while
            keeping both teachers and students aligned.
          </p>
        </div>
      </SectionCard>
    </div>
  );
}
