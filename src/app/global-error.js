"use client";

import Image from "next/image";
import { Button } from "@mui/material";

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <div className="flex w-full flex-col justify-items-center min-h-screen p-4 lg:p-8">
            <main className="flex w-full grow flex-col justify-center align-center text-center">
                <h2 className="text-center">Something went wrong!</h2>
                <p className="text-center">{error.error}</p>
                <Button variant="contained" style={{width: "150px", margin: "20px auto"}} href="/projects">Try again</Button>
            </main>
            <footer className="flex w-full items-center justify-center">
            <a className="flex items-center gap-4 hover:underline hover:underline-offset-4" href="https://mario-boss.com" target="_blank" rel="noopener noreferrer">
                <Image aria-hidden src="/logo.svg" alt="Mariusz Andryszczuk" width={60} height={60} style={{ width: "60px", height: "60px" }} />
                <span>Made by Mariusz Andryszczuk</span>
            </a>
            </footer>
        </div>
      </body>
    </html>
  );
}
