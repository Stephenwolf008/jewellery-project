import { useEffect, useState } from "react";
import client from "../lib/sanityClient"; // Ensure this file is properly set up

export default function TestSanity() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"][0]{title, slug}`)
      .then((data) => setPost(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>
      {post ? (
        <div className="text-left max-w-xl mx-auto">
          <p>
            <strong>Title:</strong> {post.title}
          </p>
          <p>
            <strong>Slug:</strong> {post.slug.current}
          </p>
        </div>
      ) : (
        <p>Loading or no data found...</p>
      )}
    </div>
  );
}
