"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function MoodModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0); // 0–3 for the 4 mini steps

  const steps = ["Mood", "Feelings", "Reflection", "Sleep"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-11/12 max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        <div>
          <div className="flex flex-col">
            {/* Heading */}
            <h1 className="text-3xl font-redditsans font-bold text-blue-950 dark:text-white mb-2">
              Log your mood
            </h1>

            {/* Step Indicator */}
            <div className="flex justify-between items-center my-4 gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    step === index
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[200px] flex items-center justify-center">
          {step === 0 && (
            <p className="text-center">Step 1: Select your mood</p>
          )}
          {step === 1 && (
            <p className="text-center">Step 2: Choose your feelings</p>
          )}
          {step === 2 && (
            <p className="text-center">Step 3: Write your reflection</p>
          )}
          {step === 3 && <p className="text-center">Step 4: Add sleep hours</p>}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700"
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
