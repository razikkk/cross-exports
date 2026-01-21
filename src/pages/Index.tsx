import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <AboutPreview />
      <WhyChooseUs/>
      <HowItWorks/>
      <BlogPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
