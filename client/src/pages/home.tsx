import { CustomCursor } from "@/components/ui/cursor";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Community } from "@/components/sections/Community";
import { Internship } from "@/components/sections/Internship";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />
      <Hero />
      <Features />
      <Community />
      <Internship />
    </div>
  );
}
