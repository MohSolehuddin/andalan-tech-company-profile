"use client";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/schema/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      await sendEmail(data);
      form.reset();
      setIsSubmitting(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Kami
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Siap untuk memulai proyek Anda? Kami siap membantu mewujudkan
            website impian Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-(--glow-primary) transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-2">
                    Chat langsung untuk respons cepat
                  </p>
                  <a
                    href="https://wa.me/6287745968545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium">
                    +62 877 4596 8545
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-(--glow-primary) transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    Kirim email untuk konsultasi detail
                  </p>
                  <a
                    href="mailto:hello@andalan.tech"
                    className="text-primary hover:underline font-medium">
                    hello@andalan.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-(--glow-primary) transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Lokasi</h3>
                  <p className="text-muted-foreground mb-2">
                    Situbondo, Indonesia
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Remote-friendly untuk seluruh Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 animate-fade-in-up">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No. WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="081234567890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Layanan</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih layanan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="e-commerce">E-Commerce</SelectItem>
                          <SelectItem value="seo">SEO Optimization</SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ceritakan tentang proyek Anda..."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-linear-to-r from-primary to-accent text-white hover:shadow-(--glow-primary) transition-all"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      Kirim Pesan <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
