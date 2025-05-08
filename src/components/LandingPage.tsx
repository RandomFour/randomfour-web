import { ArrowRight, Code, Cpu, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-teal to-orange animate-slow-spin" />
              <div className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-background text-xs font-bold">
                R4
              </div>
            </div>
            <span className="text-xl font-bold">RandomFour</span>
          </a>
          <a href="mailto:hello@michaltakac.com">
            <Button variant="ghost" className="hidden md:flex gap-1 group">
              Contact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Button variant="outline" size="icon" className="md:hidden">
            <Layers className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(48,152,152,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(244,99,30,0.2),transparent_40%)]" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-teal">Digital Products</span>
                <span className="block">
                  at the intersection of
                </span>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  <span className="inline-block bg-gradient-to-r from-teal to-orange bg-clip-text text-transparent">
                    AI,
                  </span>
                  <span className="inline-block text-red">XR</span>
                  <span className="inline-block bg-gradient-to-r from-orange to-burnt-orange bg-clip-text text-transparent">
                    &
                  </span>
                  <span className="inline-block text-teal">Dev Tools</span>
                </div>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                A studio crafting innovative digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#products">
                  <Button size="lg" className="bg-teal hover:bg-teal/90">
                    Explore Projects
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        <section
          id="products"
          className="py-24 bg-gradient-to-b from-background to-muted/30 relative"
        >
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-sm text-teal mb-4">
                <Sparkles className="h-4 w-4" />
                <span>Featured Products</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Digital Products by RandomFour
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our innovative solutions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Heatbot Product Card */}
              <a
                href="https://heatbot.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-orange/20 to-red/20" />
                    <img
                      src="/heatbot.jpg?height=300&width=600"
                      alt="Heatbot UI"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <img
                      src="/heatbot.jpg"
                      alt="Heatbot UI"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Heatbot</h3>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10">
                      <ArrowRight className="h-4 w-4 text-teal" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Heatbot is a data-driven generative UI builder. Upload user
                    analysis heatmaps and let AI generate code for an improved
                    website in seconds.
                  </p>
                </div>
              </a>

              {/* E-commerce AI Product Card, TODO: make div into <a> link */}
              <div
                className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
                onClick={(e) => e.preventDefault()}
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/20 via-burnt-orange/20 to-red/20" />
                    <div className="h-full w-full bg-muted flex items-center justify-center">
                      <div className="relative h-24 w-24">
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-orange animate-slow-spin" />
                        <div className="absolute inset-4 rounded-full border-4 border-dashed border-burnt-orange animate-reverse-spin" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-orange"
                          >
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                            <path d="M3 6h18" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">AI Shopping Assistant</h3>
                      <span className="rounded-full bg-orange/10 px-2 py-1 text-xs text-orange">
                        Coming Soon
                      </span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10">
                      <ArrowRight className="h-4 w-4 text-orange" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    A stealth-mode project revolutionizing e-commerce with
                    AI-powered personalization and customer insights.
                  </p>
                </div>
              </div>

              {/* XR Math Learning Product Card, TODO: make div into <a> link */}
            <div
                className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
                onClick={(e) => e.preventDefault()}
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-red/20 via-burnt-orange/20 to-teal/20" />
                    <div className="h-full w-full bg-muted flex items-center justify-center">
                      <div className="relative h-32 w-32 perspective-container">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-24 w-24 rounded-lg border-4 border-red flex items-center justify-center text-red text-6xl font-bold">
                            &Sigma;
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-8 w-8 rounded-full bg-teal/50 animate-ping opacity-75 -translate-x-8 translate-y-8" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-6 w-6 rounded-full bg-burnt-orange/50 animate-ping opacity-75 translate-x-10 -translate-y-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">MathworldXR</h3>
                      <span className="rounded-full bg-red/10 px-2 py-1 text-xs text-red">
                        Coming Soon
                      </span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red/10">
                      <ArrowRight className="h-4 w-4 text-red" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    An immersive XR experience that transforms how students
                    learn and engage with mathematics through interactive 3D
                    visualizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4 md:w-1/3">
              <a href="/" className="flex items-center gap-2">
                <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal to-orange" />
                  <div className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-bold">
                    R4
                  </div>
                </div>
                <span className="text-xl font-bold">RandomFour</span>
              </a>
              <p className="text-sm text-muted-foreground">
                RandomFour LLC is a studio building digital
                products and tools.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1">
              {/* <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/privacy"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RandomFour LLC. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/michaltakac"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://github.com/RandomFour/"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M 12 1.9921875 C 6.4855957 1.9921875 2 6.4769321 2 12 C 2 16.599161 5.1205653 20.490345 9.3671875 21.642578 A 0.50005 0.50005 0 0 0 9.9980469 21.160156 L 9.9980469 17.583984 A 0.50005 0.50005 0 0 0 9.9980469 17.398438 L 9.9980469 17 C 9.9980469 16.463435 10.20474 15.989016 10.550781 15.621094 A 0.50005 0.50005 0 0 0 10.310547 14.794922 C 8.3191985 14.288505 7 12.945349 7 11.492188 C 7 10.73278 7.3615845 9.9960348 8.015625 9.3925781 A 0.50005 0.50005 0 0 0 8.1679688 8.9277344 C 8.066665 8.41934 8.082645 7.8782734 8.0742188 7.34375 C 8.6127591 7.5825374 9.1625862 7.7923277 9.640625 8.1757812 A 0.50005 0.50005 0 0 0 10.09375 8.265625 C 10.683558 8.0925899 11.325263 7.9921875 12 7.9921875 C 12.673669 7.9921875 13.314937 8.0917915 13.904297 8.265625 A 0.50005 0.50005 0 0 0 14.359375 8.1777344 C 14.837054 7.7945694 15.386932 7.5824899 15.925781 7.34375 C 15.916981 7.8785794 15.933881 8.4199143 15.832031 8.9277344 A 0.50005 0.50005 0 0 0 15.982422 9.3945312 C 16.637666 9.9982795 17.001953 10.733923 17.001953 11.494141 C 17.001953 12.945944 15.680991 14.28753 13.689453 14.794922 A 0.50005 0.50005 0 0 0 13.449219 15.623047 C 13.794633 15.990353 14.001953 16.464434 14.001953 17 L 13.998047 21.160156 A 0.50005 0.50005 0 0 0 14.630859 21.642578 C 18.878428 20.490372 22 16.599237 22 12 C 22 6.4769321 17.514404 1.9921875 12 1.9921875 z M 12 2.9921875 C 16.973596 2.9921875 21 7.0170679 21 12 C 21 15.899732 18.470363 19.145081 14.998047 20.388672 L 15.001953 17 C 15.001953 16.421513 14.688987 15.964437 14.404297 15.505859 C 16.432596 14.813419 18.001953 13.369173 18.001953 11.494141 C 18.001953 10.506223 17.528746 9.6094427 16.826172 8.8808594 C 16.963004 8.0965535 17.032667 7.2949738 16.970703 6.4570312 A 0.50005 0.50005 0 0 0 16.3125 6.0214844 C 15.491527 6.300863 14.703446 6.7215379 13.960938 7.2734375 C 13.34208 7.110241 12.692308 6.9921875 12 6.9921875 C 11.30618 6.9921875 10.656139 7.1108109 10.037109 7.2734375 C 9.2949426 6.7217093 8.5094793 6.2989123 7.6894531 6.0195312 A 0.50005 0.50005 0 0 0 7.0292969 6.4550781 C 6.9654142 7.294134 7.0380099 8.0939393 7.1738281 8.8769531 C 6.4709034 9.6061723 6 10.504427 6 11.492188 C 6 13.367279 7.5663139 14.813867 9.59375 15.505859 C 9.3112432 15.962509 9.0029789 16.419068 9 16.992188 L 7.5 16.992188 C 7.2241522 16.992188 7.0052524 16.845238 6.7363281 16.513672 C 6.4674039 16.182105 6.2065255 15.697988 5.9277344 15.234375 A 0.50005 0.50005 0 0 0 5.46875 14.988281 A 0.50005 0.50005 0 0 0 5.0722656 15.75 C 5.3304745 16.179387 5.5979086 16.697395 5.9589844 17.142578 C 6.3200601 17.587762 6.8328478 17.992188 7.5 17.992188 L 8.9980469 17.992188 L 8.9980469 20.388672 C 5.5278881 19.144471 3 15.898951 3 12 C 3 7.0170679 7.0264043 2.9921875 12 2.9921875 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
