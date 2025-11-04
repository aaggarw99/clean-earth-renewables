import type { Metadata } from "next";
import { getPostBySlug } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Clean Earth Renewables",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  // Construct the full URL for the image
  const imageUrl = post.featuredImage
    ? (post.featuredImage.startsWith('http')
        ? post.featuredImage
        : `https://clean-earth.org${post.featuredImage}`)
    : 'https://clean-earth.org/assets/logos/logo_opengraph.png';

  const url = `https://clean-earth.org/blog/${slug}`;

  const metaDescription = post.metaDescription || post.excerpt;

  return {
    title: `${post.title} | Clean Earth Renewables`,
    description: metaDescription,
    openGraph: {
      title: post.title,
      description: metaDescription,
      url: url,
      siteName: "Clean Earth Renewables",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: metaDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Server component that fetches data and passes to client component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return <BlogPostClient post={post} slug={slug} />;
}
