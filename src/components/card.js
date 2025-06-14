"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blogDataRaw from '../../blog.json'
import * as motion from "motion/react-client"

// Adjust to use the "blogs" array from the imported JSON
const blogData = blogDataRaw.blogs || []

export const Card = () => {
    return (
        <>
            {blogData.map((post, idx) => (
                <motion.div
                    key={post.id}
                    initial={{ y: 60, opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 14,
                        delay: 0.2 + idx * 0.5, // Staggered animation
                    }}
                >
                    <Link
                        href={`/blog/${post.id}`}
                            className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 transition-transform duration-200 mb-4 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/60"
                        >
                            {/* No image in JSON, so use a placeholder */}
                            <Image
                                className="w-full h-auto rounded-t-xl"
                                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                alt={post.title || "Card Image"}
                                width={320}
                                height={180}
                                style={{ objectFit: "cover" }}
                                priority={idx === 0}
                            />
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {post.title}
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-neutral-400">
                                {post.content}
                            </p>
                            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                By {post.author} &middot; {post.date}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {post.tags && post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </>
    )
}
