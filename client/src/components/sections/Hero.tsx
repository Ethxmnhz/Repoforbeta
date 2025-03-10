import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BetaAccessForm } from "@/components/BetaAccessForm";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-purple-900/20">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                  HackoSquad
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Join the next generation of cybersecurity experts. Learn, practice, and master
                security in our community-driven platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <BetaAccessForm />
                <Button size="lg" variant="outline" asChild>
                  <a href="https://discord.gg/rJexj8W7yd" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Platform Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative xl:scale-125 xl:translate-x-20 lg:scale-110 lg:translate-x-10"
          >
            <div className="relative overflow-hidden rounded-lg border border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 pointer-events-none z-10" />
              <img 
                src="/dashboard.png"
                alt="HackoSquad Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 w-2/3"
            >
              <div className="relative overflow-hidden rounded-lg border border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 pointer-events-none z-10" />
                <img 
                  src="/creator.png"
                  alt="HackoSquad Creator Zone"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}