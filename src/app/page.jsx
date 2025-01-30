"use client";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex self-center w-full justify-center">
      <Link href="/projects">
        <Button variant="contained">PROJECTS</Button>
      </Link>
    </div>
  );
}
