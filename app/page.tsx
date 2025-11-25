"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ---------- QUIZ DATA (from your Figma questions) ---------- */

type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctIndex: 1,
  },
  {
    id: 2,
    text: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctIndex: 1,
  },
  {
    id: 3,
    text: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctIndex: 1,
  },
  {
    id: 4,
    text: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctIndex: 1,
  },
];

/* ---------- HELPERS ---------- */

const TOTAL = QUESTIONS.length;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

function ProgressBar({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="mt-8 flex justify-center gap-3">
      {QUESTIONS.map((q, idx) => {
        const isActive = idx === currentIndex;
        const isDone = idx < currentIndex;

        return (
          <div
            key={q.id}
            className={`
              h-[4px]
              w-[100px]
              rounded-full
              transition-all
              duration-300
              ${isActive ? "bg-[#123456]" : isDone ? "bg-[#123456]/50" : "bg-[#C9CED6]"}
            `}
          />
        );
      })}
    </div>
  );
}



/* ---------- MAIN PAGE ---------- */

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => Array(TOTAL).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];

  const scorePercent = useMemo(() => {
    let correct = 0;
    answers.forEach((ans, idx) => {
      if (ans !== null && ans === QUESTIONS[idx].correctIndex) correct++;
    });
    return Math.round((correct / TOTAL) * 100);
  }, [answers]);

  const handleOptionClick = (optionIdx: number) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[currentIndex] = optionIdx;
      return copy;
    });
  };

  const goNext = () => {
    if (currentIndex < TOTAL - 1) {
      setDirection(1);
      setCurrentIndex((idx) => idx + 1);
    } else {
      // Finished all questions -> show results
      setShowResult(true);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((idx) => idx - 1);
    }
  };

  const restartQuiz = () => {
    setAnswers(Array(TOTAL).fill(null));
    setCurrentIndex(0);
    setDirection(1);
    setShowResult(false);
  };

  return (
    <div className="quiz-bg min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full">
        <div className="relative rounded-frame border-[3px] border-frameBorder/70 bg-frameInner shadow-frame overflow-hidden p-[18px]">
          {/* inner rounded area */}
          <div className="quiz-frame rounded-[32px] w-full h-full flex flex-col items-center justify-center px-10 py-10 relative">
            {/* Optional: paw + speech bubble graphics if you export PNGs from Figma */}
            {/* Example:
              <img src="/paw.png" className="absolute bottom-0 left-10 w-24" />
              <img src="/bubble.png" className="absolute bottom-24 left-6 w-32" />
            */}

            {/* CONTENT AREA */}
            {!showResult ? (
              <div className="w-full">
                {/* Heading */}
                <div className="text-center">
                  <h1 className="font-display text-[42px] leading-tight text-accent">
                    Test Your Knowledge
                  </h1>
                  <p className="inline-block mt-2 rounded-full bg-white/80 px-4 py-1 text-[12px] text-accent/80 shadow-soft">
                    Answer all questions to see your results
                  </p>
                </div>

                {/* Progress */}
                <div className="flex justify-center mt-6">
                  <ProgressBar currentIndex={currentIndex} />
                </div>

                {/* Question + options (animated) */}
                <div className="mt-8">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentQuestion.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >
                      {/* Question banner */}
                      <div className="question-card rounded-card px-8 py-4 text-center text-sm font-medium text-accent shadow-soft">
                        <span className="mr-1">
                          {currentQuestion.id}.
                        </span>
                        {currentQuestion.text}
                      </div>

                      {/* Options */}
                      <div className="mt-4 space-y-3">
                        {currentQuestion.options.map((opt, idx) => {
                          const isSelected = answers[currentIndex] === idx;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleOptionClick(idx)}
                              className={`block w-full rounded-card border border-transparent px-8 py-3 text-center text-sm option-card ${
                                isSelected
                                  ? "border-accentSoft bg-optionHover"
                                  : ""
                              }`}
                            >
                              <span
                                className={`inline-block pb-1 border-b ${
                                  isSelected
                                    ? "border-dotted border-accentSoft"
                                    : "border-transparent"
                                }`}
                              >
                                {opt}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation buttons */}
                <div className="mt-8 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={currentIndex === 0}
                    className={`nav-button h-9 w-9 rounded-[12px] flex items-center justify-center text-accent shadow-soft ${
                      currentIndex === 0
                        ? "opacity-40 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    aria-label="Previous question"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="nav-button h-9 rounded-[12px] px-4 flex items-center justify-center gap-1 text-[13px] font-medium text-accent shadow-soft"
                  >
                    {currentIndex === TOTAL - 1 ? "Submit" : "Next"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* RESULT SCREEN */
              <div className="w-full text-center">
                <p className="inline-block rounded-full bg-white/90 px-4 py-1 text-[12px] text-accent/80 shadow-soft mb-6">
                  Keep Learning!
                </p>

                <p className="font-display text-3xl text-accent mb-4">
                  Your Final score is
                </p>

                <p className="font-display text-[80px] leading-none text-accent mb-6">
                  {scorePercent}
                  <span className="text-4xl align-top ml-1">%</span>
                </p>

                <button
                  type="button"
                  onClick={restartQuiz}
                  className="mt-2 nav-button px-6 py-2 rounded-[14px] text-[14px] font-medium text-accent shadow-soft"
                >
                  Start Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
