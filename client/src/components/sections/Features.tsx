import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Target, Trophy, Brain, Lock, LineChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Practical Learning",
    description: "Learn cybersecurity through hands-on experience with real-world scenarios and daily updated labs"
  },
  {
    icon: Target,
    title: "Customized Paths",
    description: "Follow personalized learning paths tailored to your specific needs and goals"
  },
  {
    icon: Trophy,
    title: "Weekly CTF Events",
    description: "Participate in regular CTF challenges and compete with the community"
  },
  {
    icon: Brain,
    title: "Project Development",
    description: "Work on real security projects with potential monetary rewards"
  },
  {
    icon: Lock,
    title: "Free Access",
    description: "Access all features and resources completely free of charge"
  },
  {
    icon: LineChart,
    title: "Community Growth",
    description: "Learn from worldwide experts and contribute to the community"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is HackoSquad?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HackoSquad is more than just a platform - it's a community-driven cybersecurity learning ecosystem. 
            We provide practical, hands-on experience through customized learning paths, daily updated labs, 
            weekly CTF events, and real project development opportunities - all completely free.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8 relative">
                  <feature.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}