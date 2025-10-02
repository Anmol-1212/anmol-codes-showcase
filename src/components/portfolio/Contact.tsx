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
import emailjs from "@emailjs/browser"; // ✅ EmailJS import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); // ✅ Form reference

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Send email with EmailJS
    emailjs.sendForm(
      "service_3t12ss9",     // replace with EmailJS Service ID
      "template_zgjinip",    // replace with EmailJS Template ID
      formRef.current!,
      "BgS2l7nM84SGrJr9T"      // replace with EmailJS Public Key
    )
    .then(() => {
      toast({
        title: "✅ Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    })
    .catch((error) => {
      toast({
        title: "❌ Error",
        description: "Message could not be sent. Please try again.",
      });
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
    });
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
                          name="full_name"   // ✅ must match EmailJS template
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

