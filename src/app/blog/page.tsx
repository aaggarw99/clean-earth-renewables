"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Community Solar: Trends and Opportunities in 2024",
    excerpt: "Discover how community solar is evolving and what opportunities await businesses and homeowners in the coming year. From technological advancements to policy changes, we explore the key trends shaping the renewable energy landscape.",
    author: "Clean Earth Renewables Team",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/assets/images/backgrounds/solar-energy-concept-atlanta-1.png",
    slug: "future-of-community-solar-2024"
  };

  const blogPosts = [
    {
      title: "Understanding Power Purchase Agreements: A Complete Guide",
      excerpt: "Everything you need to know about PPAs, from basic concepts to advanced considerations for businesses and property owners.",
      author: "Clean Earth Renewables Team",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Educational",
      image: "/assets/images/backgrounds/panels-bg.png",
      slug: "power-purchase-agreements-complete-guide"
    },
    {
      title: "How Solar Energy is Transforming Commercial Real Estate",
      excerpt: "Explore the growing trend of solar integration in commercial properties and the financial benefits for property owners and tenants.",
      author: "Clean Earth Renewables Team",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Commercial Solar",
      image: "/assets/images/backgrounds/rooftop-solar-background.png",
      slug: "solar-transforming-commercial-real-estate"
    },
    {
      title: "The Environmental Impact of Community Solar Programs",
      excerpt: "Learn about the measurable environmental benefits of community solar and how these programs contribute to sustainability goals.",
      author: "Clean Earth Renewables Team",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Environmental",
      image: "/assets/images/backgrounds/panels-grass-overview.png",
      slug: "environmental-impact-community-solar"
    },
    {
      title: "Maximizing Your Solar Investment: Tips for Property Owners",
      excerpt: "Practical advice for property owners looking to optimize their solar installations and maximize returns on their renewable energy investments.",
      author: "Clean Earth Renewables Team",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Investment Tips",
      image: "/assets/images/backgrounds/plant.png",
      slug: "maximizing-solar-investment-tips"
    },
    {
      title: "The Role of Technology in Modern Solar Energy Systems",
      excerpt: "From smart monitoring to AI-powered optimization, discover how technology is revolutionizing solar energy management and efficiency.",
      author: "Clean Earth Renewables Team",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "/assets/images/backgrounds/chicago-overview.png",
      slug: "technology-modern-solar-systems"
    },
    {
      title: "Navigating Solar Incentives and Tax Benefits in 2024",
      excerpt: "A comprehensive guide to available incentives, tax credits, and financial benefits for solar energy adoption this year.",
      author: "Clean Earth Renewables Team",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "Financial",
      image: "/assets/images/backgrounds/chicago-river.png",
      slug: "solar-incentives-tax-benefits-2024"
    }
  ];

  const categories = [
    "All Posts",
    "Industry Insights", 
    "Educational",
    "Commercial Solar",
    "Environmental",
    "Investment Tips",
    "Technology",
    "Financial"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Clean Energy Insights
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay informed about the latest trends, technologies, and opportunities in renewable energy and community solar.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Article
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-card hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                      <ClockIcon className="w-4 h-4 ml-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`} passHref>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <UserIcon className="w-3 h-3 mr-1" />
                      {post.author}
                      <ClockIcon className="w-3 h-3 ml-3 mr-1" />
                      {post.readTime}
                    </div>
                    <Link href={`/blog/${post.slug}`} passHref>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        Read More
                        <ArrowRightIcon className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 