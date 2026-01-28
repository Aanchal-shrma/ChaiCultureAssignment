import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-10 py-15 text-center">
        <div className="max-w-4xl">
          <h3 className="my-5 text-3xl md:text-4xl font-extrabold tracking-tight text-amber-900">
            Brew the Royal Tradition
          </h3>

          <p className="mt-6 text-lg md:text-xl text-amber-800">
            Premium instant chai tea premix inspired by royal Indian households
          </p>

          {/* Coming Soon Product Preview */}
          <div className="mt-12 flex justify-center">
            <div className="relative bg-white/70 backdrop-blur-lg border border-amber-200 rounded-3xl shadow-xl p-8 max-w-md w-full">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-900 text-white text-xs font-semibold px-4 py-1 rounded-full">
                COMING SOON
              </span>

              <h3 className="text-2xl font-bold text-amber-900 mt-4">
                Royal Masala Chai Premix
              </h3>

              <p className="mt-3 text-amber-800">
                A rich blend of handpicked spices and premium tea leaves,
                inspired by royal kitchens of India.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="bg-amber-100 rounded-xl py-3">
                  <p className="font-semibold text-amber-900">100%</p>
                  <p className="text-amber-700">Natural</p>
                </div>
                <div className="bg-amber-100 rounded-xl py-3">
                  <p className="font-semibold text-amber-900">Instant</p>
                  <p className="text-amber-700">Ready</p>
                </div>
                <div className="bg-amber-100 rounded-xl py-3">
                  <p className="font-semibold text-amber-900">Royal</p>
                  <p className="text-amber-700">Taste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-amber-900">
                Authentic Flavour
              </h3>
              <p className="mt-4 text-amber-700">
                Crafted with traditional Indian spices and premium tea leaves
                for a royal taste.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-amber-900">
                Instant Convenience
              </h3>
              <p className="mt-4 text-amber-700">
                Enjoy authentic chai anytime, anywhere — ready in seconds.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-amber-900">
                Premium Ingredients
              </h3>
              <p className="mt-4 text-amber-700">
                Only the finest spices and tea, carefully blended for
                excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Launch Section */}
      <section className="px-6 py-24 bg-amber-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Launching Something Royal
          </h2>

          <p className="mt-6 text-lg text-amber-100">
            A premium chai experience is brewing. Get ready to taste royalty in
            every sip.
          </p>

          <div className="mt-10">
            <Button size="lg" variant="secondary" className="rounded-2xl px-10">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-amber-800">
        © {new Date().getFullYear()} Royal Chai. All rights reserved.
      </footer>
    </div>
  );
}
