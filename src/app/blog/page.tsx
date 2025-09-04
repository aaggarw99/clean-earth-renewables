"use client";

import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { getPublishedPosts, getAllCategories } from "@/data/blog-posts";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  
    const blogPosts = getPublishedPosts();
  const categories = ["All Posts", ...getAllCategories()];

  // Filter blog posts based on selected category
  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
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

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
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
            {filteredPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} passHref className="block">
                <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden group pb-6 pt-0 cursor-pointer">
                  <div className="relative h-48">
                                            <Image
                          src={post.featuredImage}
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
                    <div className="flex items-center text-xs text-muted-foreground pt-2">
                      <UserIcon className="w-3 h-3 mr-1" />
                      {post.author}
                      <ClockIcon className="w-3 h-3 ml-3 mr-1" />
                      {post.readTime}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 