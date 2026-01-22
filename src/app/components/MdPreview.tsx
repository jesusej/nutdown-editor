"use client";

import Markdown from "react-markdown";
import { useMarkdown } from "../context/MarkdownContext";
import remarkGfm from "remark-gfm";

export default function MdPreview() {
  const { markdown } = useMarkdown();
  return (
    <div
      className="h-full m-4 p-4 overflow-auto rounded-lg bg-gray-50 dark:bg-gray-800"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="prose dark:prose-invert max-w-none">
        {markdown ? (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              blockquote: ({ children }) => (
                <blockquote className="bg-gray-400 border-l-10 border-l-gray-500">
                  {children}
                </blockquote>
              ),
            }}
          >
            {markdown}
          </Markdown>
        ) : (
          <h1 className="text-gray-500 text-2xl">Preview will appear here</h1>
        )}
      </div>
    </div>
  );
}
