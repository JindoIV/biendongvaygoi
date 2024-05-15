export default interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  images?: string[];
  explanation: string;
}
