const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Who is Karin</h2>
        
        <div className="portfolio-card max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-snug md:leading-relaxed text-card-foreground">
            Hi, I'm Karin, a Product Designer passionate about bridging the gap between stakeholders and product teams. I specialize in designing intuitive, efficient internal tools that enhance workflows and drive impactful results.
          </p>
          
          <div className="mt-8">
            <p className="text-muted-foreground mb-4">Curious to see her work?</p>
            <a 
              href="https://dribbble.com/lisa-designer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-link text-primary text-lg font-medium"
            >
              View Portfolio →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;