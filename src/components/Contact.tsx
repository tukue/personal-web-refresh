import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';
import { 
  EMAILJS_SERVICE_ID, 
  EMAILJS_TEMPLATE_ID, 
  EMAILJS_PUBLIC_KEY,
  EMAILJS_DESTINATION_EMAIL 
} from '@/lib/emailjs';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        to_email: EMAILJS_DESTINATION_EMAIL,
        subject: data.subject,
        message: data.message
      },
      EMAILJS_PUBLIC_KEY
    )
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
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-center">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          I am currently open to new opportunities and collaborative projects. If you have something in mind or would simply like to connect, feel free to get in touch.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:tukue.geb@gmail.com" className="hover:text-primary transition-colors">
                    tukue.geb@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Available upon request</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Stockholm, Sweden</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/tukue" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tukuegebremariam/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    {...register("name", { required: "Name is required" })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message as string}</p>}
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message as string}</p>}
                </div>
                
                <div>
                  <Input 
                    placeholder="Subject" 
                    {...register("subject", { required: "Subject is required" })}
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message as string}</p>}
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message as string}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
