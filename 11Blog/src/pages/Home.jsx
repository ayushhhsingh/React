import React from "react";
import appwriteService from "../appwrite/config";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // When there are no posts, show a text-based hero section (no images)
  if (posts.length === 0) {
    return (
     <div className="w-full min-h-[150vh] flex flex-col items-center justify-center px-4">
  <div className="max-w-4xl text-center space-y-6">
    
    {/* Heading: Chocolate Brown in Light Mode | Beige in Dark Mode */}
    <h1 className="text-4xl md:text-6xl font-extrabold text-[#3E2723] dark:text-[#F5F5DC] tracking-tight">
      Share Your Stories With The World
    </h1>

    {/* Paragraph 1: Charcoal Grey in Light Mode | Beige in Dark Mode */}
    <p className="text-lg md:text-2xl text-[#333333] dark:text-[#F5F5DC] max-w-2xl mx-auto leading-relaxed">
      Turn your ideas, experiences, and creativity into beautiful blog posts.
      Write, edit, and publish in one simple place—no design skills needed.
    </p>

    {/* Paragraph 2: Charcoal Grey in Light Mode | Beige in Dark Mode */}
    <p className="text-base md:text-lg text-[#333333] dark:text-[#F5F5DC] max-w-xl mx-auto">
      Start by creating your first post, customize it with rich text tools,
      and build a blog that truly feels like you.
    </p>

  <button
  onClick={() => navigate("/add-post")}
  className="
    mt-4 px-8 py-3 rounded-full text-lg font-semibold
    transition-all duration-300 ease-in-out
    shadow-lg hover:shadow-2xl
    
    /* Light Mode: Brown Base -> Burnt Orange Hover + Scale Up */
    bg-[#3E2723] text-white 
    hover:bg-[#C04000] hover:scale-105 hover:-translate-y-1
    
    /* Dark Mode: Burnt Orange Base with Beige Text */
    dark:bg-[#C04000] dark:text-[#F5F5DC]
    dark:hover:bg-[#F5F5DC] dark:hover:text-[#261C15]
  "
>
  Start Blogging Now
</button>
  </div>
</div>
    );
  }

  return (
    <div className="w-full min-h-[150vh] py-8 px-4 dark:text-[#F5F5DC]">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div className="p-2 w-1/4" key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
