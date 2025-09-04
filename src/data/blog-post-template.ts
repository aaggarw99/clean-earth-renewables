import { BlogPost } from "./blog-posts";

// This is a template showing how to create a new blog post
// Copy this structure and modify it for your new post

export const blogPostTemplate: BlogPost = {
  slug: "your-new-blog-post-slug",
  title: "Your Blog Post Title",
  excerpt: "A brief description of your blog post that will appear in previews and the blog listing page.",
  content: `
    <p>Start your blog post with an engaging introduction paragraph. This should hook the reader and give them a clear idea of what they'll learn from your post.</p>
    
    <h2>Your First Section Heading</h2>
    
    <p>Write your content here. You can use all standard HTML tags like <strong>bold text</strong>, <em>italic text</em>, and <a href="#">links</a>.</p>
    
    <p>You can also create lists:</p>
    
    <ul>
      <li>First bullet point</li>
      <li>Second bullet point</li>
      <li>Third bullet point</li>
    </ul>
    
    <p>Or numbered lists:</p>
    
    <ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
    
    <blockquote>
      "This is a blockquote. Use it for important quotes, statistics, or key insights that you want to highlight."
    </blockquote>
    
    <h2>Adding Images to Your Blog Post</h2>
    
    <p>To add images to your blog post, you have several options:</p>
    
    <h3>1. Full Width Image</h3>
    <p>For important images that should span the full width of the content area:</p>
    
    <div class="my-8">
      <figure class="w-full">
        <div class="relative overflow-hidden rounded-lg">
          <img src="/assets/images/blog/your-image.jpg" alt="Description of your image" class="w-full h-auto object-cover" />
        </div>
        <figcaption class="mt-3 text-sm text-muted-foreground text-center italic">
          Optional caption for your image
        </figcaption>
      </figure>
    </div>
    
    <h3>2. Left-Aligned Image</h3>
    <p>For images that should float to the left with text wrapping around them:</p>
    
    <div class="float-left mr-6 mb-4 w-1/2">
      <figure>
        <div class="relative overflow-hidden rounded-lg">
          <img src="/assets/images/blog/your-image.jpg" alt="Description of your image" class="w-full h-auto object-cover" />
        </div>
        <figcaption class="mt-3 text-sm text-muted-foreground text-center italic">
          Optional caption
        </figcaption>
      </figure>
    </div>
    
    <p>This text will wrap around the left-aligned image. You can continue writing your content here, and it will flow naturally around the image. This is great for adding visual interest to your content while maintaining readability.</p>
    
    <p>You can add more paragraphs here that will continue to wrap around the image. The image will stay in place until you add a clearfix or start a new section.</p>
    
    <div style="clear: both;"></div>
    
    <h3>3. Right-Aligned Image</h3>
    <p>For images that should float to the right:</p>
    
    <div class="float-right ml-6 mb-4 w-1/2">
      <figure>
        <div class="relative overflow-hidden rounded-lg">
          <img src="/assets/images/blog/your-image.jpg" alt="Description of your image" class="w-full h-auto object-cover" />
        </div>
        <figcaption class="mt-3 text-sm text-muted-foreground text-center italic">
          Optional caption
        </figcaption>
      </figure>
    </div>
    
    <p>This text will wrap around the right-aligned image. You can continue writing your content here, and it will flow naturally around the image on the right side.</p>
    
    <div style="clear: both;"></div>
    
    <h3>4. Centered Image</h3>
    <p>For images that should be centered but not full width:</p>
    
    <div class="my-8">
      <figure class="mx-auto w-3/4">
        <div class="relative overflow-hidden rounded-lg">
          <img src="/assets/images/blog/your-image.jpg" alt="Description of your image" class="w-full h-auto object-cover" />
        </div>
        <figcaption class="mt-3 text-sm text-muted-foreground text-center italic">
          Optional caption
        </figcaption>
      </figure>
    </div>
    
    <h2>Image Best Practices</h2>
    
    <ul>
      <li><strong>Use descriptive alt text:</strong> Always include meaningful alt text for accessibility</li>
      <li><strong>Optimize image sizes:</strong> Use appropriately sized images to maintain fast loading times</li>
      <li><strong>Add captions when helpful:</strong> Captions can provide additional context or credit</li>
      <li><strong>Consider image placement:</strong> Place images near relevant text for better flow</li>
    </ul>
    
    <h2>Conclusion</h2>
    
    <p>End your blog post with a strong conclusion that summarizes your key points and provides a clear takeaway for readers.</p>
    
    <p>You might also want to include a call-to-action, such as encouraging readers to contact you for more information or to explore related services.</p>
  `,
  author: "David Emsheimer",
  authorTitle: "CEO & Founder",
  authorBio: "David Emsheimer is the founder and CEO of Clean Earth Renewables, with over 15 years of experience in renewable energy development.",
  date: "Jan 1, 2025",
  readTime: "5 min read",
  category: "Educational",
  featuredImage: "/assets/images/blog/your-featured-image.jpg",
  tags: ["Solar Energy", "Chicago", "Renewable Energy"],
  published: false // Set to true when ready to publish
};

// Instructions for creating a new blog post:
/*
1. Copy the template above
2. Replace all placeholder content with your actual content
3. Update the slug to be unique and URL-friendly (lowercase, hyphens instead of spaces)
4. Add your images to the /public/assets/images/blog/ directory
5. Update the featuredImage path to point to your featured image
6. Set published to true when ready to go live
7. Add your new post to the blogPosts array in blog-posts.ts
*/ 