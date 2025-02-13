const PROMPT_SUGGESTIONS = [
  {
    text: "How do I stay safe on the Internet?",
    icon: "🦺",
    duration: "900",
  },
  {
    text: "What should I do if I see harmful content online?",
    icon: "😉",
    duration: "1000",
  },
  {
    text: "What are the signs of Cyber Bullying?",
    icon: "🥷",
    duration: "1100",
  },
  {
    text: "How can I manage my screen time better?",
    icon: "💻",
    duration: "1200",
  },
];

function PromptSuggestions({
  handleSuggestionClick,
}: {
  handleSuggestionClick: (text: string) => void;
}) {
  return (
    <div className="mb-6 lg:w-[80%] mx-auto">
      <h3 data-aos="fade-left" className="text-xs text-left font-medium mb-2">
        Prompt Ideas 💡
      </h3>
      <div className="flex flex-wrap gap-4">
        {PROMPT_SUGGESTIONS.map((prompt) => (
          <button
            data-aos="fade-left"
            data-aos-duration={prompt.duration}
            key={prompt.text}
            type="button"
            className="bg-white text-xs lg:text-normal border border-vsblack rounded-full py-2 lg:px-5 px-2"
            onClick={() => handleSuggestionClick(prompt.text)}
          >
            {prompt.icon} {prompt.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PromptSuggestions;
