export interface ExamItem {
  id: string;
  title: string;
  subject: string;
  instructor: string;
  date: string;
  time: string;
  deadline: string;
  durationMinutes: number;
  questions: number;
  totalMarks: number;
  passingScore: number;
  completed: boolean;
}

export interface ModalProps {
  className: string;
  children: React.ReactNode;
  title: string;
  file: boolean;
}