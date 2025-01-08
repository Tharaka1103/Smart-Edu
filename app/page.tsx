import { routes, renderContent } from '@/app/resources'
import Header from './Components/Header'
import Footer from './Components/Footer'
export default function Home() {
  const content = renderContent('home, about')

  return <>
    <Header />
    <main className="min-h-screen bg-background pt-1">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 mt-5">
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-500 to-emerald-800 bg-clip-text text-transparent">
            {content.home.title}
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
            {content.home.heading}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {content.home.text}
          </p>

          <a
            href={content.home.button.link}
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {content.home.button.text}
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(34,197,94,0.1),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Grid */}
      <section className="px-4 py-20 bg-background/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Coverage",
              description: "Access complete study materials for all O/L subjects"
            },
            {
              title: "Interactive Learning",
              description: "Engage with dynamic content and practice exercises"
            },
            {
              title: "Expert Guidance",
              description: "Learn from experienced teachers and professionals"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-foreground/5 backdrop-blur-sm hover:bg-foreground/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground/90">
                {feature.title}
              </h3>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
}