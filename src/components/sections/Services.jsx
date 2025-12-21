import { Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    description: "Building scalable, high-performance web applications using modern stacks like React, Next.js, and Node.js. Focused on user experience and robust architecture.",
    icon: Globe,
  },
  {
    title: "Mobile Application Development",
    description: "Developing cross-platform mobile experiences that feel native. We prioritize accessibility, performance, and seamless device integration.",
    icon: Smartphone,
  },
  {
    title: "Quality Engineering",
    description: "Rigorous testing and clean code practices ensure your products are bug-free and maintainable for the long term.",
    icon: ShieldCheck,
  },
  {
    title: "Performance & Scalability",
    description: "Architecting systems that grow with your business. We optimize every layer for speed and massive concurrent user support.",
    icon: Zap,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-widest">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            Modern Solutions for Complex Problems
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We don&apos;t just build apps; we engineer business solutions using the latest technologies and best practices.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col rounded-2xl border bg-card p-8 transition-all hover:shadow-lg">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-primary dark:text-white">
                  <service.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Services;
