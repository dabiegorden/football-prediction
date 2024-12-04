import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";

const PricePage = () => {
  return (
    <main>
      <Header />
      <section className="py-16">
        <PricingSection />
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
};

export default PricePage;
