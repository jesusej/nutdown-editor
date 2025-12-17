import MdEditor from "./components/MdEditor";
import MdPreview from "./components/MdPreview";
import { MarkdownProvider } from "./context/MarkdownContext";

export default function Home() {
  return (
    <MarkdownProvider>
      <main className="container mx-auto px-4 py-6">
        <header>
          <h1 className="text-4xl font-bold">Nutdown Editor</h1>
        </header>
        <div className="flex flex-col md:flex-row h-[calc(100vh-theme(spacing.12))] justify-between gap-4 md:gap-0">
          <section
            className="flex-1 md:border-r border-gray-200 dark:border-gray-700"
            aria-label="Markdown Editor"
          >
            <MdEditor />
          </section>
          <section className="flex-1" aria-label="Preview">
            <MdPreview />
          </section>
        </div>
      </main>
    </MarkdownProvider>
  );
}
