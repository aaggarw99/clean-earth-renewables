"use client";

import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowLeftIcon,
  ShareIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getPostBySlug, getRelatedPosts, BlogPost } from "@/data/blog-posts";
import { useToast } from "@/components/ui/toast";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [shareStatus, setShareStatus] = useState<'idle' | 'sharing' | 'copied' | 'error'>('idle');
  const { addToast } = useToast();

  useEffect(() => {
    const slug = params.slug as string;
    const foundPost = getPostBySlug(slug);
    setPost(foundPost || null);

    // Get related posts (same category, excluding current post)
    if (foundPost) {
      const related = getRelatedPosts(slug, foundPost.category);
      setRelatedPosts(related);
    }
  }, [params.slug]);

  const handleShare = async () => {
    if (!post) return;
    
    setShareStatus('sharing');
    
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        setShareStatus('idle');
        addToast({
          type: 'success',
          title: 'Shared successfully!',
          message: 'The article has been shared.',
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus('copied');
        addToast({
          type: 'success',
          title: 'Link copied!',
          message: 'The article link has been copied to your clipboard.',
        });
        setTimeout(() => setShareStatus('idle'), 2000);
      }
    } catch (error) {
      // Check if the error is due to user cancellation
      if (error instanceof Error && error.name === 'AbortError') {
        // User cancelled the share dialog - this is normal behavior
        setShareStatus('idle');
        return;
      }
      
      // Only show error for actual failures, not cancellations
      console.error('Error sharing:', error);
      setShareStatus('error');
      addToast({
        type: 'error',
        title: 'Share failed',
        message: 'Unable to share the article. Please try again.',
      });
      setTimeout(() => setShareStatus('idle'), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
              <Link href="/blog">
                <Button>
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author and Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorTitle}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare}
                  disabled={shareStatus === 'sharing'}
                >
                  <ShareIcon className="w-4 h-4 mr-2" />
                  {shareStatus === 'sharing' && 'Sharing...'}
                  {shareStatus === 'copied' && 'Copied!'}
                  {shareStatus === 'error' && 'Error'}
                  {shareStatus === 'idle' && 'Share'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="mb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article 
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <section className="mb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2">
                                 {post.tags.map((tag: string, index: number) => (
                   <span
                     key={index}
                     className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                   >
                     {tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Author Bio */}
      <section className="mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      About {post.author}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.authorBio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link key={index} href={`/blog/${relatedPost.slug}`} className="block">
                    <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            {relatedPost.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                          <span>{relatedPost.date}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
} 