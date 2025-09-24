import MdEditor from "./components/MdEditor";
import MdPreview from "./components/MdPreview";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6">
      <header>
        <h1 className="text-2xl font-bold">Nutdown Editor</h1>
      </header>
      <div className="flex flex-row h-screen justify-between">
        <section
          className="flex-1 border-r border-gray-200 dark:border-gray-700"
          aria-label="Markdown Editor"
        >
          <MdEditor />
        </section>
        <section className="flex-1" aria-label="Preview">
          <MdPreview />
        </section>
      </div>
    </main>
  );
}
