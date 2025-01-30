import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full grow">
        <div className="flex-none mr-8 w-auto">SIDEBAR</div>
        <div className="grow">MAIN AREA</div>
      </main>
      <footer className="flex w-full items-center justify-center">
        <a className="flex items-center gap-4 hover:underline hover:underline-offset-4" href="https://mario-boss.com" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/logo.svg" alt="Mariusz Andryszczuk" width={60} height={60} />
          <span>Made by Mariusz Andryszczuk</span>
        </a>
      </footer>
    </div>
  );
}
