export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-900 grid place-items-center">
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-6xl font-bold text-zinc-800 dark:bg-gradient-to-br dark:from-zinc-100 dark:to-zinc-700 dark:bg-clip-text dark:text-transparent">
          404 NOT FOUND
        </h1>
        <p className="opacity-40">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
