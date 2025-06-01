// import Image from "next/image"
import { Calendar, User } from "lucide-react"

export default function BlogSection() {
  const posts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 15, 2024",
      author: "Rob Oliver",
      category: "Technology",
    },
    {
      title: "Design Principles for Modern UIs",
      excerpt: "Essential design principles every developer should know for creating modern user interfaces.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 10, 2024",
      author: "Rob Oliver",
      category: "Design",
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Best practices for building applications that can scale with your business growth.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 5, 2024",
      author: "Rob Oliver",
      category: "Development",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            Latest <span className="text-red-400">Blog</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with my latest thoughts on technology, design, and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                {/* <
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
                <img src="" alt="blog post image"  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"

                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-red-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
