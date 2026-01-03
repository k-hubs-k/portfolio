import { useState } from "react";

export interface TourStep {
  command: string;
  title: string;
  description: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    command: "about",
    title: "About Me",
    description:
      "Learn about my background, skills, and what I do as a Full Stack Developer.",
  },
  {
    command: "skills",
    title: "Technical Skills",
    description:
      "Explore my technical expertise across different technologies and frameworks.",
  },
  {
    command: "projects",
    title: "Portfolio Projects",
    description:
      "View my featured projects and the technologies I've worked with.",
  },
  {
    command: "experience",
    title: "Work Experience",
    description: "Check out my professional experience and roles I've held.",
  },
  {
    command: "education",
    title: "Education",
    description: "See my educational background and certifications.",
  },
  {
    command: "contact",
    title: "Contact Information",
    description:
      "Find out how to get in touch with me for opportunities or collaborations.",
  },
  {
    command: "cv",
    title: "Download CV",
    description: "Download my CV/Resume in PDF format for offline viewing and sharing.",
  },
];

interface useTourParams {
  executeCommand: (input: string) => void;
}

export const useTour = ({ executeCommand }: useTourParams) => {
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [tourCompleted, setTourCompleted] = useState(false);

  const startTour = () => {
    setIsTourActive(true);
    setTourCompleted(false);
    setCurrentStepIndex(0);
    // Execute the first command
    executeCommand(TOUR_STEPS[0].command);
  };

  const previousStep = () => {
    if (currentStepIndex > 0) {
      // Decrement the index first
      setCurrentStepIndex((prev) => prev - 1);
      // Execute the previous step's command
      executeCommand(TOUR_STEPS[currentStepIndex - 1].command);
    }
  };

  const nextStep = () => {
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      // Execute the NEXT step's command
      executeCommand(TOUR_STEPS[currentStepIndex + 1].command);
      // Then increment the index
      setCurrentStepIndex((prev) => prev + 1);
    } else if (currentStepIndex === TOUR_STEPS.length - 1) {
      // On the last step, complete the tour
      completeTour();
    }
  };

  const completeTour = () => {
    setIsTourActive(false);
    setTourCompleted(true);
    setCurrentStepIndex(0);
  };

  const skipTour = () => {
    completeTour();
  };

  const getCurrentStep = () => {
    return TOUR_STEPS[currentStepIndex];
  };

  return {
    tourSteps: TOUR_STEPS,
    isTourActive,
    currentStepIndex,
    tourCompleted,
    totalSteps: TOUR_STEPS.length,
    nextStep,
    previousStep,
    skipTour,
    completeTour,
    getCurrentStep,
    startTour,
  };
};
