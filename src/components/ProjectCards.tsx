
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, subtitle, tags}`;

const options = { next: { revalidate: 30 } };
export default async function ProjectCards() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 border border-blue-500/30 px-4 py-2 text-sm text-blue-400 mb-6">
          Projects
        </div>
        
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Work & Case Studies
          </h2>
          <Link href="/work" className="text-sm text-gray-400 hover:text-white transition-colors">
            View All
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 4).map((post) => {
          const postImageUrl = post.image
            ? urlFor(post.image)?.width(550).height(310).url()
            : null;
          return (
            <Link href={`/${post.slug.current}`} key={post._id} className="group h-full">
              <article className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 shadow-[0_1px_0_#0000000d] backdrop-blur-sm transition-all duration-300 dark:border-neutral-800 dark:bg-black/40 hover:shadow-lg hover:-translate-y-2 h-[520px]">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-2xl line-clamp-2 mb-2">{post.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{post.subtitle}</p>
                  </div>

                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800 mb-4">
                    {postImageUrl ? (
                      <img
                        src={postImageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        width={550}
                        height={310}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_120%_-10%,rgba(0,0,0,0.08),transparent)] dark:bg-[radial-gradient(1000px_400px_at_120%_-10%,rgba(255,255,255,0.06),transparent)]" />
                    )}
                  </div>
                  
                  <div className="mt-auto">
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map((tag: string) => (
                          <span key={tag} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-neutral-800 ring-1 ring-inset ring-neutral-200 backdrop-blur dark:bg-black/40 dark:text-neutral-200 dark:ring-neutral-800">
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
  );
}
