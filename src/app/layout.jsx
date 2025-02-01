import { ProjectProvider } from "@/providers/project";
import { SnackbarProvider } from "@/providers/snackbar";
import { getProjects } from "@/data/projects";
import Image from "next/image";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata = {
  title: "Projects Manager",
  description: "Project made by Mariusz Andryszczuk to show frontend skills by building projects list manager app."
};

export default function RootLayout({ children }) {
  let projectPromise = getProjects;

  return (
    <html lang="en">
      <body className="antialiased">
        <SnackbarProvider>
          <ProjectProvider projectPromise={projectPromise}>
            <div className="flex flex-col justify-items-center min-h-screen p-8">
              <main className="flex w-full grow">{children}</main>
              <footer className="flex w-full items-center justify-center">
                <a className="flex items-center gap-4 hover:underline hover:underline-offset-4" href="https://mario-boss.com" target="_blank" rel="noopener noreferrer">
                  <Image aria-hidden src="/logo.svg" alt="Mariusz Andryszczuk" width={60} height={60} />
                  <span>Made by Mariusz Andryszczuk</span>
                </a>
              </footer>
            </div>
          </ProjectProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
