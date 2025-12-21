import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -right-[10%] bottom-[10%] h-[40%] w-[40%] rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
              Engineering Future-Ready <span className="text-accent">Digital Experiences</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              ByteWave delivers fast, high-quality, and affordable web and mobile development services. We scale your ideas into long-term digital solutions.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="mailto:bytewaveteams@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-white dark:text-primary dark:hover:bg-slate-200"
              >
                Contact Our Team <Mail className="ml-2" size={18} />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center text-sm font-semibold leading-6 text-primary dark:text-white hover:text-accent transition-colors"
              >
                View our work <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
          </div>

          <div className="relative h-[300px] w-full max-w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-10 blur-2xl"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border bg-card/50 backdrop-blur">
              <Image
                src="/dark.jpg"
                alt="Modern Software Development"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
