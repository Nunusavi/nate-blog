"use client"
import React from 'react'
import Link from 'next/link'
import blogDataRaw from '../../blog.json'

// Use the "blogs" array from the imported JSON
const blogData = blogDataRaw.blogs || []

export const BlogSingle = ({ id }) => {
    // Find the blog post by id (convert id to string for comparison)
    const post = blogData.find((item) => String(item.id) === String(id))

    // Get other blog posts (excluding the current one)
    const otherPosts = blogData.filter((item) => String(item.id) !== String(id)).slice(0, 3) // Show 3 related

    if (!post) {
        return (
            <div className="p-8 text-center text-gray-500 dark:text-neutral-400">
                Blog post not found.
            </div>
        )
    }

    return (
        // Blog Article
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                {/* Content */}
                <div className="lg:col-span-2">
                    <div className="py-8 lg:pe-8">
                        <div className="space-y-5 lg:space-y-8">
                            <Link
                                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-hidden focus:underline dark:text-blue-500"
                                href="/"
                            >
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                Back to Blog
                            </Link>

                            <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">{post.title}</h2>

                            <div className="flex items-center gap-x-1">
                                {post.tags && post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-5 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                <p className="text-xs font-black sm:text-sm text-gray-800 dark:text-neutral-200">{post.date}</p>
                            </div>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">{post.content}</p>

                            <div className="text-center">
                                <div className="grid lg:grid-cols-2 gap-3">
                                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                                        <figure className="relative w-full h-60">
                                            <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                                        </figure>
                                        <figure className="relative w-full h-60">
                                            <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                                        </figure>
                                    </div>
                                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                                        <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                                    </figure>
                                </div>
                                <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                                    Working process
                                </span>
                            </div>

                            {/* Additional content can be added here if needed */}
                        </div>
                    </div>
                </div>
                {/* End Content */}

                {/* Sidebar */}
                <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-linear-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
                    <div className="sticky top-0 start-0 py-8 lg:ps-8">
                        <div className="shrink-0 group block">
                            <div className="flex items-center border-b border-gray-200 pb-4 mb-6 dark:border-neutral-700">
                                <img
                                    className="inline-block shrink-0 size-15.5 rounded-full"
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                    alt="Avatar"
                                />
                                <div className="ms-3">
                                    <h3 className="font-semibold text-gray-800 dark:text-white">Mark Wanner</h3>
                                    <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">mark@gmail.com</p>
                                </div>
                                <div className="flex items-end ms-auto">
                                    <button className="text-sm font-medium text-gray-400 dark:text-neutral-500">Follow</button>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        <div className="space-y-6">
                            {otherPosts.map(other => (
                                <Link
                                    key={other.id}
                                    className="group flex items-center gap-x-6 focus:outline-hidden"
                                    href={`/blog/${other.id}`}
                                >
                                    <div className="grow">
                                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
                                            {other.title}
                                        </span>
                                    </div>
                                    <div className="shrink-0 relative rounded-lg overflow-hidden size-20">
                                        <img
                                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                                            src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                            alt="Blog Image"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Sidebar */}
            </div>
        </div>
        // End Blog Article
    )
}

export default BlogSingle