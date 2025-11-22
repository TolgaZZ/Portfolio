import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const PROJECT_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  subtitle,
  slug,
  heroImage,
  tags,
  projectDescription,
  duration,
  teamSize,
  myRole,
  demoUrl,
  publishedAt,
  body,
  additionalContent,
  _id
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(PROJECT_QUERY, await params, options);
  const postImageUrl = post.heroImage
    ? urlFor(post.heroImage)?.width(800).height(500).url()
    : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Grid Background */}
      <div className="relative w-full h-[60vh] hero-gradient grid-background overflow-hidden">
        <div className="grid-overlay"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-center max-w-4xl">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-xl text-gray-300 text-center max-w-2xl leading-relaxed">
              {post.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Scrollable */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Link 
                  href="/work" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-400 text-white rounded-lg font-medium transition-colors text-sm"
                >
                  ← Back to projects
                </Link>
                <h2 className="text-2xl font-semibold">Overview</h2>
              </div>
              <div className="text-gray-300 leading-relaxed text-lg">
                {post.projectDescription ? (
                  <p>{post.projectDescription}</p>
                ) : (
                  Array.isArray(post.body) && <PortableText value={post.body} />
                )}
              </div>
            </div>

            {/* Project Image */}
            {postImageUrl && (
              <div className="mb-12">
                <div className="w-full bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src={postImageUrl}
                    alt={post.title}
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
                  />
                </div>
                {post.title && (
                  <p className="text-center text-gray-400 text-sm mt-2">{post.title} Concept</p>
                )}
              </div>
            )}

            {/* Additional Content Sections */}
            <div className="space-y-8">
              {/* Project Title Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
                <div className="text-gray-300 leading-relaxed">
                  <p>Our goal was simple: <strong>capture the feeling of shopping</strong>, incorporate modern design principles, and keep everything clean and minimal.</p>
                </div>
              </div>

              {/* Additional Content (Optional) */}
              {Array.isArray(post.additionalContent) && post.additionalContent.length > 0 && (
                <div>
                  <div className="prose prose-invert max-w-none">
                    <PortableText 
                      value={post.additionalContent} 
                      components={{
                        types: {
                          image: ({ value }) => {
                            const imageUrl = value?.asset ? urlFor(value.asset)?.width(1200).url() : null;
                            return imageUrl ? (
                              <div className="my-8">
                                <div className="w-full max-h-[600px] bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
                                  <img
                                    src={imageUrl}
                                    alt={value?.alt || 'Project image'}
                                    className="w-full h-full object-contain rounded-xl"
                                  />
                                </div>
                                {value?.caption && (
                                  <p className="text-center text-gray-400 text-sm mt-2">{value.caption}</p>
                                )}
                              </div>
                            ) : null;
                          },
                          video: ({ value }) => {
                            // For video assets, construct URL manually since urlFor is image-only
                            let videoUrl = null;
                            
                            if (value?.asset?.url) {
                              videoUrl = value.asset.url;
                            } else if (value?.asset?._ref) {
                              // Construct video URL manually from asset reference
                              const ref = value.asset._ref;
                              videoUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${ref.replace('file-', '').replace('-mp4', '.mp4').replace('-webm', '.webm').replace('-mov', '.mov')}`;
                            }
                            
                            console.log('Video value:', value);
                            console.log('Video URL:', videoUrl);
                            
                            return videoUrl ? (
                              <div className="my-8">
                                <div className="w-full bg-gray-800 rounded-xl overflow-hidden">
                                  <video
                                    controls
                                    className="w-full h-auto rounded-xl"
                                    preload="metadata"
                                  >
                                    <source src={videoUrl} />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                                {value?.caption && (
                                  <p className="text-center text-gray-400 text-sm mt-2">{value.caption}</p>
                                )}
                              </div>
                            ) : (
                              <div className="my-8 p-4 bg-yellow-900/20 border border-yellow-600 rounded-xl">
                                <p className="text-yellow-400 text-sm">Video not found. Debug info: {JSON.stringify(value, null, 2)}</p>
                              </div>
                            );
                          },
                          file: ({ value }) => {
                            // Handle file type for videos and other files
                            let fileUrl = null;
                            
                            if (value?.asset?.url) {
                              fileUrl = value.asset.url;
                            } else if (value?.asset?._ref) {
                              // Construct file URL manually from asset reference
                              const ref = value.asset._ref;
                              const extension = ref.split('-').pop();
                              fileUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${ref.replace('file-', '').replace(`-${extension}`, `.${extension}`)}`;
                            }
                            
                            const isVideo = value?.asset?.mimeType?.startsWith('video/') || 
                                          value?.asset?.originalFilename?.match(/\.(mp4|webm|ogg|mov|avi)$/i) ||
                                          fileUrl?.match(/\.(mp4|webm|ogg|mov|avi)$/i);
                            
                            console.log('File value:', value);
                            console.log('File URL:', fileUrl);
                            console.log('Is video:', isVideo);
                            
                            if (isVideo && fileUrl) {
                              return (
                                <div className="my-8">
                                  <div className="w-full bg-gray-800 rounded-xl overflow-hidden">
                                    <video
                                      controls
                                      className="w-full h-auto rounded-xl"
                                      preload="metadata"
                                    >
                                      <source src={fileUrl} />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                  {value?.caption && (
                                    <p className="text-center text-gray-400 text-sm mt-2">{value.caption}</p>
                                  )}
                                </div>
                              );
                            }
                            
                            // Fallback for non-video files
                            return fileUrl ? (
                              <div className="my-4">
                                <a 
                                  href={fileUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                                >
                                  Download {value?.asset?.originalFilename || 'File'}
                                </a>
                              </div>
                            ) : null;
                          }
                        },
                        block: {
                          h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-4">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-2xl font-semibold text-white mb-3">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-xl font-medium text-white mb-2">{children}</h3>,
                          normal: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-6">
                              {children}
                            </blockquote>
                          )
                        },
                        marks: {
                          strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                          em: ({ children }) => <em className="text-gray-200">{children}</em>,
                          link: ({ children, value }) => (
                            <a 
                              href={value?.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              {children}
                            </a>
                          )
                        },
                        list: {
                          bullet: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>,
                          number: ({ children }) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>
                        },
                        listItem: {
                          bullet: ({ children }) => <li className="text-gray-300">{children}</li>,
                          number: ({ children }) => <li className="text-gray-300">{children}</li>
                        }
                      }}
                    />
                  </div>
                </div>
              )}


            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Project Details */}
              <div className="bg-gray-900 rounded-xl p-6 space-y-6">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                
                {/* Duration */}
                {post.duration && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                      Duration
                    </h4>
                    <p className="text-white">{post.duration}</p>
                  </div>
                )}

                {/* Project Type */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                    Type
                  </h4>
                  <p className="text-white">Solo Project</p>
                </div>

                {/* My Role */}
                {post.myRole && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                      My Role
                    </h4>
                    <p className="text-white">{post.myRole}</p>
                  </div>
                )}

                {/* Team Size */}
                {post.teamSize && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                      Team Size
                    </h4>
                    <p className="text-white">{post.teamSize}</p>
                  </div>
                )}

                {/* Published Date */}
                {post.publishedAt && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                      Completed
                    </h4>
                    <p className="text-white">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </p>
                  </div>
                )}

                {/* Demo Link */}
                {post.demoUrl && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                      Live Project
                    </h4>
                    <a
                      href={post.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm w-full justify-center"
                    >
                      View Live Demo
                    </a>
                  </div>
                )}
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-900/30 border border-blue-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">Interested in similar work?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  I'm available for freelance projects and consulting. Let's discuss how I can help bring your ideas to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );

}