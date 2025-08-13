import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, CreditCard, Bot } from "lucide-react"

export default function Home() {
  const features = [
    {
      title: "Create Groups",
      description: "Easily create groups for trips, roommates, or any shared expenses.",
      icon: <Users className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Track Expenses",
      description: "Add expenses and split them evenly or with custom amounts.",
      icon: <CreditCard className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Visualize Spending",
      description: "Get AI-powered insights into your spending habits.",
      icon: <Bot className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Settle Up",
      description: "See who owes what and settle debts with minimal transactions.",
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />,
    }    
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Split Expenses <span className="text-blue-600">Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Splity.AI makes it easy to split bills with friends, track shared expenses, and settle up without the
            hassle using advanced AI algorithms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/create-group">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/about">System Design</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Splity.AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works with AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create a Group</h3>
              <p className="text-gray-600">Start by creating a group and adding your friends or roommates with AI-powered member suggestions.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Expense Tracking</h3>
              <p className="text-gray-600">
                Use OCR to scan receipts and let AI automatically categorize and split expenses based on your patterns.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-600">Get personalized spending insights, budget recommendations, and expense predictions from our AI agent.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligent Settlement</h3>
              <p className="text-gray-600">AI optimizes payment flows to minimize transactions and suggests the best settlement strategies.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/create-group">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "Splity Buddy has made managing expenses with my roommates so much easier. No more awkward money
                  conversations!"
                </p>
                <p className="font-semibold">Sachin Kumar</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "We used Splity Buddy for our group vacation and it was a game-changer. Everyone knew exactly what they
                  owed."
                </p>
                <p className="font-semibold">Namit Singla</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "The balance visualization makes it so clear who needs to pay whom. Love how simple it makes
                  everything!"
                </p>
                <p className="font-semibold">Swati Jha</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

