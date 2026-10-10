import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { EMAILJS_DESTINATION_EMAIL } from '@/lib/emailjs';
import { EmailJSService } from '@/lib/EmailJSService';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const emailService = new EmailJSService();

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    emailService.sendEmail({
      from_name: data.name,
      from_email: data.email,
      to_email: EMAILJS_DESTINATION_EMAIL,
      subject: data.subject,
      message: data.message
    })
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I am currently open to new opportunities and collaborative projects. If you have something in mind or would simply like to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card className="border-border/50 h-fit shadow-sm">
            <CardContent className="p-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6">
                <Avatar className="h-20 w-20 mb-4 ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
                  <AvatarImage src="/profile-photo.jpg" alt="Tukue Gebremariam Gebregergis" />
                  <AvatarFallback className="text-lg bg-primary/10 text-primary">TG</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-foreground">Tukue Gebremariam Gebregergis, MSc</h3>
                <p className="text-muted-foreground mt-1">Senior DevOps Engineer & Backend Developer</p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:tukue.geb@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors break-all">
                      tukue.geb@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Phone</p>
                    <span className="text-sm text-foreground">Available upon request</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Location</p>
                    <span className="text-sm text-foreground">Stockholm, Sweden</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-sm font-semibold mb-4 text-center md:text-left text-foreground">Connect with me</h4>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a 
                    href="https://github.com/tukue" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tukuegebremariam/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
                  <Input 
                    id="name"
                    placeholder="John Doe" 
                    {...register("name", { required: "Name is required" })}
                    className={errors.name ? "border-destructive ring-destructive/20" : "bg-background"}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1 flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-destructive" />{errors.name.message as string}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={errors.email ? "border-destructive ring-destructive/20" : "bg-background"}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1 flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-destructive" />{errors.email.message as string}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</Label>
                  <Input 
                    id="subject"
                    placeholder="What is this regarding?" 
                    {...register("subject", { required: "Subject is required" })}
                    className={errors.subject ? "border-destructive ring-destructive/20" : "bg-background"}
                  />
                  {errors.subject && <p className="text-destructive text-sm mt-1 flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-destructive" />{errors.subject.message as string}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className={errors.message ? "border-destructive ring-destructive/20" : "bg-background"}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1 flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-destructive" />{errors.message.message as string}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full group" 
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
