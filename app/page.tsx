import Link from "next/link"
import { Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectTodoList from "@/components/project-todo-list"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80 sticky top-0 z-40">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Diamond className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-semibold">Tinnitus Relief</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Find Your Path to Silence and Peace
              </h1>
              <p className="text-xl text-gray-400 max-w-[600px]">
                We combine proven techniques with personalized care to help you manage tinnitus and reclaim the quiet
                moments in your life.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md text-lg">
                Sign in to Begin
              </Button>

              {/* Diamond emblem placeholder */}
              <div className="mt-12 relative">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-10">
                  <Diamond className="h-48 w-48 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900 -z-10"></div>
        </section>

        {/* User Tools Section */}
        <section className="py-16 bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Your Recovery Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tool placeholders */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                    <Diamond className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Tool {i}</h3>
                  <p className="text-gray-400">Placeholder for user recovery tool description and functionality.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video placeholders */}
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-gray-800 aspect-video rounded-lg border border-gray-700 flex items-center justify-center"
                >
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">YouTube Video {i}</p>
                    <p className="text-sm text-gray-500">Embedded video will appear here</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project To-Do List Section */}
        <section className="py-16 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Project Management</h2>
            <div className="max-w-2xl mx-auto">
              <ProjectTodoList />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Begin Your Journey Today</h2>
              <p className="text-gray-400">
                Join thousands who have found relief from tinnitus using our personalized approach.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md text-lg">
                Sign in to Begin
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Diamond className="h-5 w-5 text-purple-400" />
              <span className="text-lg font-semibold">Tinnitus Relief</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tinnitus Relief. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

