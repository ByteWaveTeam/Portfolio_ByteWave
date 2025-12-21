const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-widest">Our Work</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            Success Stories
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A collective history of successful projects delivered to clients globally. Explore our portfolio of high-performance applications.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border bg-muted/50 aspect-video flex flex-col items-center justify-center p-8 transition-all hover:border-accent">
              <div className="text-center">
                <p className="text-sm font-medium text-accent">Project Case Study 0{i}</p>
                <h3 className="mt-2 text-xl font-bold text-primary dark:text-white">Upcoming Showcase</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Our team has completed numerous full-stack and mobile projects. Detailed case studies are being prepared for public viewing.
                </p>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-sm font-bold">In Development</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
