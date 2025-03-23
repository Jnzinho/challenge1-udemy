import { useState } from "react";

type TextExpanderProps = {
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  className?: string;
  children: string;
  expanded?: boolean;
};

export default function TextExpander({
  collapseButtonText = "Show Less",
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  buttonColor = "blue",
  className,
  children,
  expanded = false,
}: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const text = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className={className}>
      {text}
      {children.length >= collapsedNumWords ? (
        <button
          style={{ color: buttonColor }}
          className="cursor-pointer pl-1"
          onClick={handleButtonClick}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      ) : null}
    </article>
  );
}
