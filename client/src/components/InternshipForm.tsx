import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function InternshipForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, "internship-applications"), {
        feedback,
        timestamp: new Date().toISOString(),
      });

      toast({
        title: "Thanks for sharing!",
        description: "We'll review your thoughts and get back to you if we think there's a good fit.",
      });
      setOpen(false);
      setFeedback("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2 mt-6">
          Share Your Ideas
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Tell Us Your Experience</DialogTitle>
          <DialogDescription className="text-base space-y-4">
            <p>
              Instead of a resume, we want to hear about your experiences and ideas. Tell us about:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>What frustrates you about current cybersecurity learning platforms?</li>
              <li>What's missing from the existing learning resources?</li>
              <li>How would you make learning cybersecurity more effective?</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Share your thoughts and ideas here... What would make learning cybersecurity better?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[200px]"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Share Your Ideas"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}