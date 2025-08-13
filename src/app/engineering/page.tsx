import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Database, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone,
  GitBranch,
  Server,
  Layers
} from "lucide-react"

export default function EngineeringPage() {
  const techStack = [
    {
      category: "Frontend",
      technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
      icon: <Server className="h-6 w-6 text-green-500" />,
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "Redis", "Prisma ORM"],
      icon: <Database className="h-6 w-6 text-purple-500" />,
    },
    {
      category: "AI/ML",
      technologies: ["OpenAI GPT", "TensorFlow", "OCR Engine", "NLP Processing"],
      icon: <Brain className="h-6 w-6 text-orange-500" />,
    },
    {
      category: "Infrastructure",
      technologies: ["Vercel", "Docker", "AWS", "CI/CD"],
      icon: <Globe className="h-6 w-6 text-indigo-500" />,
    },
    {
      category: "Security",
      technologies: ["JWT", "OAuth 2.0", "HTTPS", "Data Encryption"],
      icon: <Shield className="h-6 w-6 text-red-500" />,
    }
  ]

  const features = [
    {
      title: "Microservices Architecture",
      description: "Scalable, modular design with independent services for different functionalities.",
      icon: <Layers className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Real-time Processing",
      description: "Live updates and notifications using WebSocket connections and event-driven architecture.",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for expense prediction, pattern recognition, and optimization.",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Mobile-First Design",
      description: "Responsive web application optimized for mobile devices with PWA capabilities.",
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering at <span className="text-blue-400">Splity.AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Building the future of expense management with cutting-edge technology, 
              intelligent algorithms, and scalable architecture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
                <GitBranch className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-700">
                <Code className="mr-2 h-4 w-4" />
                API Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">System Architecture</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-dashed border-gray-300 min-h-[400px] bg-gray-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-600">
                  Architecture Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-80">
                <div className="text-center text-gray-500">
                  <Layers className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Architecture diagram will be added here</p>
                  <p className="text-sm mt-2">Showing microservices, data flow, and system components</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    {stack.icon}
                    <CardTitle className="text-lg">{stack.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Engineering Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 100ms</div>
                <p className="text-gray-600">API Response Time</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-gray-600">Uptime SLA</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">95+</div>
                <p className="text-gray-600">Lighthouse Score</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600">Monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Flow Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Data Flow & Processing</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-dashed border-gray-300 min-h-[300px] bg-gray-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-600">
                  Data Flow Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-60">
                <div className="text-center text-gray-500">
                  <Database className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Data flow diagram will be added here</p>
                  <p className="text-sm mt-2">Showing data processing, storage, and AI pipeline</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">API Documentation</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>REST API Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-600">GET</Badge>
                      <code className="text-sm">/api/groups</code>
                    </div>
                    <span className="text-sm text-gray-600">Fetch user groups</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-blue-600">POST</Badge>
                      <code className="text-sm">/api/expenses</code>
                    </div>
                    <span className="text-sm text-gray-600">Create new expense</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-purple-600">GET</Badge>
                      <code className="text-sm">/api/ai/insights</code>
                    </div>
                    <span className="text-sm text-gray-600">Get AI-powered insights</span>
                  </div>
                  <div className="text-center mt-6">
                    <Button variant="outline">
                      <Code className="mr-2 h-4 w-4" />
                      View Full API Documentation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
