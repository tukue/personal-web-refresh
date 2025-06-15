
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.
      </p>
      <Button asChild size="lg">
        <a href="mailto:tuk.tan.p@gmail.com">Say Hello</a>
      </Button>
    </section>
  );
};

export default Contact;
