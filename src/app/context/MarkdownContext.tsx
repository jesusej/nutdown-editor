"use client";

import { createContext, useContext, useState } from "react";

interface MarkdownContextType {
  markdown: string;
  setMarkdown: (content: string) => void;
}

const MarkdownContext = createContext<MarkdownContextType>({
  markdown: "",
  setMarkdown: () => {},
});

export function MarkdownProvider({ children }: { children: React.ReactNode }) {
  const [markdown, setMarkdown] = useState("");
  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
}

export function useMarkdown() {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error("useMarkdown must be used within a MarkdownProvider");
  }
  return context;
}
