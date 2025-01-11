import { routes, renderContent } from '@/app/resources'
import { ChevronRight } from "lucide-react";
import Link from 'next/link';

import { cn } from "@/app/lib/utils";
import AnimatedGradientText from "@/app/Components/magicui/AnimatedGradientText";
import SparklesText from './Components/magicui/SparklesText';
import AnimatedGridPattern from "@/app/Components/magicui/AnimatedGridPattern";

export default function Home() {
  const content = renderContent('home, about')

  return <>
    <main className="min-h-screen bg-background pt-1">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 mt-5">
        <div className="max-w-4xl text-center space-y-8">
          <SparklesText text={content.home.title} />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
            {content.home.heading}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {content.home.text}
          </p>
          <div className='flex justify-center pt-2'>
            <Link href="/classes">
              <AnimatedGradientText>
                🎓{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-xl text-transparent`,
                  )}
                >
                  Start Learning Now
                </span>{" "}
                <ChevronRight className="ml-1 size-6 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </Link>
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
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
  </>
}