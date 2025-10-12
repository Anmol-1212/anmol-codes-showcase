// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);

//   //   // Simulate form submission
//   //   setTimeout(() => {
//   //     toast({
//   //       title: "Message Sent!",
//   //       description: "Thank you for reaching out. I'll get back to you soon!",
//   //     });
//   //     setFormData({ name: "", email: "", subject: "", message: "" });
//   //     setIsSubmitting(false);
//   //   }, 1000);
//   // };

// // inside Contact component...
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     await emailjs.send(
//       "service_3t12ss9", // ✅ Service ID
//       "template_zgjinip", // ✅ Template ID
//       {
//         name: formData.name,
//         email: formData.email,
//         subject: formData.subject,
//         message: formData.message,
//       },
//       "BgS2l7nM84SGrJr9T" // ✅ Public Key (User ID)
//     );

//     toast({
//       title: "Message Sent!",
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });

//     setFormData({ name: "", email: "", subject: "", message: "" });
//   } catch (error) {
//     toast({
//       title: "Error",
//       description: "Something went wrong. Please try again.",
//       variant: "destructive",
//     });
//     console.error("EmailJS Error:", error);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

  
//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "anmoll.sharma.12@gmail.com",
//       href: "mailto:anmoll.sharma.12@gmail.com"
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+91 7818947710",
//       href: "tel:+917818947710"
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "India",
//       href: null
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       label: "GitHub",
//       href: "https://github.com/Anmol-1212",
//       color: "hover:text-gray-600"
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn", 
//       href: "https://linkedin.com/in/anmol-sharma-879ab6385",
//       color: "hover:text-blue-600"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-card">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
//             <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
//               Get In Touch
//             </span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Let's discuss opportunities, collaborate on projects, or just have a chat about technology
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div className="animate-slide-up">
//               <Card className="bg-background shadow-soft h-fit">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Let's Connect</CardTitle>
//                   <CardDescription>
//                     I'm always open to discussing new opportunities and interesting projects.
//                   </CardDescription>
//                 </CardHeader>
                
//                 <CardContent className="space-y-6">
//                   {/* Contact Details */}
//                   <div className="space-y-4">
//                     {contactInfo.map((info) => (
//                       <div key={info.label} className="flex items-center space-x-4 group">
//                         <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
//                           <info.icon className="w-5 h-5 text-primary" />
//                         </div>
//                         <div>
//                           <p className="font-medium text-foreground">{info.label}</p>
//                           {info.href ? (
//                             <a 
//                               href={info.href}
//                               className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                             >
//                               {info.value}
//                             </a>
//                           ) : (
//                             <p className="text-muted-foreground">{info.value}</p>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Social Links */}
//                   <div className="pt-6 border-t border-border">
//                     <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
//                     <div className="flex space-x-4">
//                       {socialLinks.map((social) => (
//                         <Button
//                           key={social.label}
//                           variant="outline"
//                           size="lg"
//                           asChild
//                           className="hover:scale-105 transition-all duration-300 group"
//                         >
//                           <a href={social.href} target="_blank" rel="noopener noreferrer">
//                             <social.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
//                             {social.label}
//                           </a>
//                         </Button>
//                       ))}
//                     </div>
//                   </div>

//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Form */}
//             <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
//               <Card className="bg-background shadow-soft">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Send a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and I'll get back to you as soon as possible.
//                   </CardDescription>
//                 </CardHeader>
                
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="name">Full Name</Label>
//                         <Input
//                           id="name"
//                           name="name"
//                           type="text"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           required
//                           className="mt-2"
//                           placeholder="Your full name"
//                         />
//                       </div>
                      
//                       <div>
//                         <Label htmlFor="email">Email</Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           className="mt-2"
//                           placeholder="your@email.com"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="subject">Subject</Label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         required
//                         className="mt-2"
//                         placeholder="What's this about?"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="message">Message</Label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         className="mt-2 min-h-[120px]"
//                         placeholder="Tell me about your project or inquiry..."
//                       />
//                     </div>

//                     <Button 
//                       type="submit" 
//                       disabled={isSubmitting}
//                       className="w-full gradient-primary text-white hover:scale-105 transition-all duration-300"
//                       size="lg"
//                     >
//                       {isSubmitting ? (
//                         "Sending..."
//                       ) : (
//                         <>
//                           <Send className="w-4 h-4 mr-2" />
//                           Send Message
//                         </>
//                       )}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Test function to verify EmailJS setup
  const testEmailJS = async () => {
    try {
      console.log("=== EmailJS Configuration Debug ===");
      console.log("Service ID:", "service_3t12ss9");
      console.log("Template ID:", "template_zgjinip");
      console.log("Public Key:", "BgS2l7nM84SGrJr9T");
      console.log("Testing EmailJS connection...");
      
      const testParams = {
        name: "Test User",
        email: "test@example.com",
        subject: "Test Message",
        message: "This is a test message to verify EmailJS is working.",
      };
      
      console.log("Template parameters being sent:", testParams);
      
      const result = await emailjs.send(
        "service_3t12ss9",     // Your EmailJS Service ID
        "template_zgjinip", 
        testParams,
        "BgS2l7nM84SGrJr9T"
      );
      
      console.log("Test email sent successfully:", result);
      toast({
        title: "✅ Test Email Sent!",
        description: "EmailJS is working correctly! Check your email at anmoll.sharma.12@gmail.com",
      });
    } catch (error) {
      console.error("Test email failed:", error);
      toast({
        title: "❌ Test Failed",
        description: `EmailJS test failed: ${error instanceof Error ? error.message : String(error)}`,
        variant: "destructive",
      });
    }
  };

  // Function to verify template variables
  const verifyTemplateVariables = () => {
    const requiredVariables = ['name', 'email', 'subject', 'message'];
    
    console.log("=== EmailJS Template Verification ===");
    console.log("Required template variables:", requiredVariables);
    console.log("Current form data structure:", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    });
    console.log("Your EmailJS template should use these variables:");
    requiredVariables.forEach(variable => {
      console.log(`- {{${variable}}}`);
    });
    console.log("NOT ${variable} (JavaScript template literals)");
    
    toast({
      title: "📋 Template Variables Check",
      description: "Check console for required template variables. Make sure your EmailJS template uses {{variable}} syntax.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("=== EmailJS Debug Info ===");
      console.log("Form data being sent:", formData);
      console.log("Form ref:", formRef.current);
      console.log("EmailJS available:", typeof emailjs);
      
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error("All fields are required");
      }

      // Try alternative method using send instead of sendForm
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      console.log("Template params:", templateParams);
      
      // Send email using EmailJS send method
      const result = await emailjs.send(
        "service_uny6cgf",     // Your EmailJS Service ID
        "template_zgjinip",    // Your EmailJS Template ID
        templateParams,        // Template parameters
        "BgS2l7nM84SGrJr9T"    // Your EmailJS Public Key
      );

      console.log("=== SUCCESS ===");
      console.log("Email sent successfully:", result);
      console.log("Response status:", result.status);
      console.log("Response text:", result.text);
      
      toast({
        title: "✅ Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      console.error("=== EmailJS Error Details ===");
      console.error("Full error object:", error);
      console.error("Error message:", error instanceof Error ? error.message : String(error));
      console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
      
      // More detailed error handling
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error instanceof Error) {
        console.error("Error details:", {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        
        if (error.message.includes("Invalid template")) {
          errorMessage = "Email template configuration error. Please contact support.";
        } else if (error.message.includes("Invalid service")) {
          errorMessage = "Email service configuration error. Please contact support.";
        } else if (error.message.includes("Invalid user")) {
          errorMessage = "Email service authentication error. Please contact support.";
        } else if (error.message.includes("Network")) {
          errorMessage = "Network error. Please check your internet connection.";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      toast({
        title: "❌ Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "anmoll.sharma.12@gmail.com", href: "mailto:anmoll.sharma.12@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7818947710", href: "tel:+917818947710" },
    { icon: MapPin, label: "Location", value: "India", href: null }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Anmol-1212", color: "hover:text-gray-600" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/anmol-sharma-879ab6385", color: "hover:text-blue-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborate on projects, or just have a chat about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="animate-slide-up">
              <Card className="bg-background shadow-soft h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Connect</CardTitle>
                  <CardDescription>
                    I'm always open to discussing new opportunities and interesting projects.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-center space-x-4 group">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="lg"
                          asChild
                          className="hover:scale-105 transition-all duration-300 group"
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <social.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            {social.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Card className="bg-background shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"      // ✅ must match EmailJS template
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"     // ✅ must match EmailJS template
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"     // ✅ must match EmailJS template
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <div className="space-y-3">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full gradient-primary text-white hover:scale-105 transition-all duration-300"
                        size="lg"
                      >
                        {isSubmitting ? "Sending..." : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      
                      
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

