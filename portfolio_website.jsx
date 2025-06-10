import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/GREYsaurus/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted.slice(0, 6)); // Limit to 6 most recent repos
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <motion.header 
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}>
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">Joshua Rusch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">IT Professional | Aspiring Software Developer</p>
      </motion.header>

      <motion.section 
        className="mb-12" 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm an IT professional actively transitioning into a software development career. Skilled in C# and Python, I enjoy building efficient, scalable applications and am always eager to learn and take on new challenges.
        </p>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">GitHub Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <motion.div 
              key={repo.id} 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }} 
              transition={{ type: "spring", stiffness: 300 }}>
              <Card>
                <CardContent className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{repo.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{repo.description || "No description provided."}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Language: {repo.language || "N/A"}</p>
                  <Button asChild>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.footer 
        className="mt-16 text-center text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.8 }}>
        <p>Connect with me: <a href="https://github.com/GREYsaurus" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> | LinkedIn | Email</p>
      </motion.footer>
    </div>
  );
}
