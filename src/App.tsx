import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Secao2 } from "./components/secao-2";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Secao2 />
      <Testimonials />
      <CTASection />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
