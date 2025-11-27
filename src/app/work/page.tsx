import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id, 
  title, 
  slug, 
  publishedAt, 
  heroImage{
    asset->{
      _id,
      url
    }
  }, 
  subtitle, 
  tags,
  projectType,
  teamSize
}`;

const options = { next: { revalidate: 30 } };

// Helper function to display project type properly
const displayProjectType = (type: string) => {
  const types = {
    'solo': 'Solo Project',
    'team': 'Team Project', 
    'client': 'Client Project',
    'opensource': 'Open Source'
  };
  return types[type as keyof typeof types] || type;
};

export default async function WorkPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">All Projects</h1>
        <p className="text-lg max-w-2xl">
          Explore my complete collection of work spanning web development, design, and branding projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          console.log('Post data:', post.title, 'heroImage:', post.heroImage);
          const postImageUrl = post.heroImage
            ? urlFor(post.heroImage)?.width(550).height(310).url()
            : null;
          console.log('Generated URL:', postImageUrl);
          return (
            <Link href={`/${post.slug.current}`} key={post._id} className="group h-full">
              <article className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-black/40 shadow-[0_1px_0_#0000000d] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-[480px]">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-neutral-100 md:text-2xl line-clamp-2 mb-2">{post.title}</h3>
                    <p className="text-sm text-neutral-400 line-clamp-2">{post.subtitle}</p>
                  </div>

                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-inset ring-neutral-800 mb-4">
                    {postImageUrl ? (
                      <img
                        src={postImageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        width={550}
                        height={310}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_120%_-10%,rgba(255,255,255,0.06),transparent)]" />
                    )}
                  </div>

                  <div className="mt-auto">
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map((tag: string) => (
                          <span key={tag} className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-neutral-200 ring-1 ring-inset ring-neutral-800 backdrop-blur">
                      View case
                      <svg className="h-3.5 w-3.5 text-blue-400" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
    <Footer />
    </>
  );
}