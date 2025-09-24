export default function MdPreview() {
  return (
    <div
      className="h-full m-4 p-4 overflow-auto rounded-lg bg-gray-50 dark:bg-gray-800"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="prose dark:prose-invert max-w-none">
        {/* Preview content will go here */}
        <h1 className="text-gray-500">Preview will appear here</h1>
      </div>
    </div>
  );
}
