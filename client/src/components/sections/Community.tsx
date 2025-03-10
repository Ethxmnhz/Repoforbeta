import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, GitBranch } from "lucide-react";

export function Community() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not a company - we're a community of passionate cybersecurity enthusiasts
            building the future of security education together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Global Network",
              description: "Connect with security experts and learners worldwide"
            },
            {
              icon: MessageSquare,
              title: "Active Discussion",
              description: "Share knowledge and learn from peer experiences"
            },
            {
              icon: GitBranch,
              title: "Open Collaboration",
              description: "Contribute to the platform's growth and development"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
