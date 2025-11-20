import ThemeToggle from "@/components/ThemeToggle"


export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-redditsans mb-4">Mood Tracker</h1>
      <ThemeToggle />
    </main>
  );
}
