import { ProjectProvider } from "@/providers/project";
import { getProjects } from '@/data/projects';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Projects List",
  description: "Project made by Mariusz Andryszczuk to show frontend skills by building projects list"
};

export default function RootLayout({children}) {
  let projectPromise = getProjects;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProjectProvider projectPromise={projectPromise}>
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}