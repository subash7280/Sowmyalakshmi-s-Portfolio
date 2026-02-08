'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from '@/components/scroll-animations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function CalendarIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  )
}

function SendIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  )
}

function SparklesIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  )
}

const contactMethods = [
  {
    icon: MailIcon,
    title: 'Email Me',
    description: 'Drop me an email anytime',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: PhoneIcon,
    title: 'Call Me',
    description: 'Mon-Fri from 9am to 6pm',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    description: 'Based in',
    value: 'City, State, Country',
    href: null,
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CalendarIcon,
    title: 'Book a Call',
    description: 'Schedule a meeting',
    value: 'calendly.com/yourname',
    href: '#',
    color: 'from-orange-500 to-red-500',
  },
]

const socialLinks = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#', color: 'hover:bg-[#0077B5]' },
  { icon: TwitterIcon, label: 'Twitter/X', href: '#', color: 'hover:bg-foreground' },
  { icon: InstagramIcon, label: 'Instagram', href: '#', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400' },
]

export function ContactSection() {

  const form = useRef(null)
  const sectionRef = useRef(null)

  const nameRegex = /^[a-zA-Z\s]{3,20}$/;
  const subjectRegex = /^[a-zA-Z0-9\s]{3,50}$/;
  const messageRegex = /^[a-zA-Z0-9\s]{5,200}$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateEmail = (from_name) => {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex?.test(from_name);
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formState).forEach((field) => {
      const error = validateField(field, formState[field]);
      if (error) newErrors[field] = error;
    });

    return newErrors;
  };

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        if (!value) return "Name is required";
        if (!nameRegex.test(value))
          return "Name must be 3–20 characters and contain no special characters";
        return "";

      case "email":
        if (!value) return "Email is required";
        if (!emailRegex.test(value))
          return "Enter a valid email address";
        return "";

      case "subject":
        if (!value) return "Subject is required";
        if (!subjectRegex.test(value))
          return "Subject must be 3–50 characters and contain no special characters";
        return "";

      case "message":
        if (!value) return "Message is required";
        if (!messageRegex.test(value))
          return "Message must be 5–200 characters and contain no special characters";
        return "";

      default:
        return "";
    }
  };

  const handleBlur = (field) => {
    const errorMessage = validateField(field, formState[field]);

    setErrors((prev) => ({
      ...prev,
      [field]: errorMessage || undefined
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitting(false);
      return;
    };

    try {

      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      );

      if (response?.status === 200) {
        e.target.reset();
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    finally {
      setIsSubmitting(false);
    };
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <SparklesIcon className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Let&apos;s Work Together</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Ready to boost your digital presence? Let&apos;s discuss how we can drive growth for your business.
            </p>
          </div>
        </FadeInUp>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {
            contactMethods?.map((method, index) => (
              <ScaleIn key={method.title} delay={index * 0.1}>
                <div className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-background" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-sm font-medium text-primary hover:underline break-all"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{method.value}</p>
                    )}
                  </div>
                </div>
              </ScaleIn>
            ))
          }
        </div>

        {/* Main Contact Area */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Info */}
          <FadeInLeft className="lg:col-span-2">
            <div className="sticky top-32">
              <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let&apos;s Create Something Amazing
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you need help with SEO strategy, paid advertising campaigns,
                  or comprehensive marketing analytics, I&apos;m here to help your business grow.
                </p>

                {/* Quick Response Promise */}
                <div className="flex items-start gap-4 mb-8 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">Usually respond within 24 hours</p>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Connect with me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 ${social.color} hover:text-background hover:border-transparent group`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Available for new projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Side - Form */}
          <FadeInRight className="lg:col-span-3">
            <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <SendIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below</p>
                </div>
              </div>

              {
                (submitted)
                  ?
                  (
                    <div className="text-center py-16">
                      <div className="relative mb-6 inline-block">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <svg className="w-10 h-10 text-background" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    </div>
                  )
                  :
                  (
                    <form onSubmit={handleSubmit} ref={form} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                            Your Name
                            <span className="text-primary">*</span>
                          </label>
                          <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              value={formState.name}
                              onFocus={() => setFocusedField('name')}
                              onChange={(e) =>
                                setFormState({ ...formState, name: e.target.value })
                              }
                              onBlur={() => handleBlur("name")}
                              // required
                              className="h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            {errors.name && (
                              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                            Your Email
                            <span className="text-primary">*</span>
                          </label>
                          <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => handleBlur("email")}
                              // required
                              className="h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            {errors.email && (
                              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                          Subject
                          <span className="text-primary">*</span>
                        </label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'scale-[1.02]' : ''}`}>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Project inquiry, Consultation, etc."
                            value={formState.subject}
                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                            onFocus={() => setFocusedField('subject')}
                            onBlur={() => handleBlur("subject")}
                            // required
                            className="h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                          {errors.subject && (
                            <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                          Your Message
                          <span className="text-primary">*</span>
                        </label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.02]' : ''}`}>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project or inquiry..."
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => handleBlur("message")}
                            // required
                            className="bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                          />
                          {errors.message && (
                            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                          )}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold text-base rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 group"
                        disabled={isSubmitting}
                      >
                        {
                          (isSubmitting)
                            ?
                            (
                              <span className="flex items-center gap-3">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending Message...
                              </span>
                            )
                            :
                            (
                              <span className="flex items-center gap-3">
                                Send Message
                                <SendIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </span>
                            )
                        }
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By sending a message, you agree to receive a response via email.
                      </p>
                    </form>
                  )
              }
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};