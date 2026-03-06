function Hero() {
  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Welcome to Tech Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore insightful articles about web development, UI design, and
            emerging technology trends. Learn from industry experts and stay
            updated with the latest innovations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
