import { Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-bytewave-primary px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build the future of your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100/80">
            Get in touch today for a free consultation and quote. Our team is ready to scale your ideas into reality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:bytewaveteams@gmail.com"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all flex items-center"
            >
              Contact Us Now <Mail className="ml-2" size={18} />
            </a>
          </div>
          {/* Background circle decoration */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#blue-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="blue-gradient">
                <stop stopColor="#e11d48" />
                <stop offset={1} stopColor="#0a192f" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CTA;
