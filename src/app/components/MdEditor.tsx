"use client";

export default function MdEditor() {
  return (
    <div className="h-full p-4">
      <label htmlFor="markdown-editor" className="sr-only">
        Markdown Editor
      </label>
      <textarea
        id="markdown-editor"
        className="w-full h-full p-4 border rounded-lg font-mono bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
        placeholder={"# Nutdown editor\n\n## Write something..."}
        aria-label="Markdown editor"
        spellCheck
      />
    </div>
  );
}
