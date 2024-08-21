import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Trusted />
      <ContactForm />
      <Footer />
    </main>
  );
}
