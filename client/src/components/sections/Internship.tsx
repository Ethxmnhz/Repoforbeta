import { motion } from "framer-motion";
import { InternshipForm } from "@/components/InternshipForm";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Rocket, Award, Lightbulb } from "lucide-react";

export function Internship() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Join as Intern in HackoSquad</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We're looking for passionate individuals who want to make cybersecurity better for everyone
          </p>
        </motion.div>

        <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Something Different</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Forget about polishing your resume or updating your LinkedIn - we're not that kind of place. 
                    We're a community of cybersecurity enthusiasts building something meaningful together.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We don't care about your certifications or fancy titles. What we want are your ideas, 
                    your experiences, and your understanding of what's wrong with current cybersecurity platforms.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    You won't get a certificate or an offer letter from us. Instead, you'll get something 
                    more valuable: the chance to directly shape a platform that helps others learn cybersecurity effectively.
                  </p>
                  <p className="text-muted-foreground">
                    If you're looking for just another internship to add to your resume, this isn't for you. 
                    But if you're passionate about making cybersecurity better and want to be part 
                    of something meaningful, we'd love to hear your thoughts.
                  </p>
                </div>

                <InternshipForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-lg p-6"
              >
                <h4 className="text-xl font-semibold mb-4">What Makes This Different?</h4>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Lightbulb,
                      text: "Your ideas will directly shape the platform's future"
                    },
                    {
                      icon: Star,
                      text: "Be part of key decisions and platform direction"
                    },
                    {
                      icon: Rocket,
                      text: "Build something that actually helps people learn"
                    },
                    {
                      icon: Award,
                      text: "Real work experience, not just another certificate"
                    }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}