import React from 'react'
import { motion } from 'framer-motion'
import blogData from '../../blog.json'

const IMAGE_URL = "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"

const cardVariants = {
    offscreen: { opacity: 0, y: 80, rotate: -10, scale: 0.9 },
    onscreen: (i) => ({
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.9 + i * 0.1,
            delay: i * 0.15,
        }
    })
}

const imgVariants = {
    initial: { scale: 1.1, rotate: -2 },
    animate: { scale: 1, rotate: 0, transition: { duration: 1.2, ease: "easeOut" } },
    hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } }
}

function Hero() {
    const blogs = blogData.blogs?.slice(0, 6) || []

    return (
        <section className="w-full max-w-6xl mx-auto py-1">
            <div
                className="grid grid-cols-4 grid-rows-3 gap-4 min-h-[70vh]"
                style={{ gridAutoFlow: 'dense' }}
            >
                {/* Top left: 2 small cards stacked */}
                <div className="col-span-1 row-span-1">
                    <BlogCard blog={blogs[0]} idx={0} />
                </div>
                <div className="col-span-1 row-span-1">
                    <BlogCard blog={blogs[1]} idx={1} />
                </div>
                {/* Top right: 1 tall card */}
                <div className="col-span-2 row-span-2 row-start-1 col-start-3">
                    <BlogCard blog={blogs[2]} idx={2} tall />
                </div>
                {/* Middle left: 1 large card */}
                <div className="col-span-2 row-span-2 row-start-2 col-start-1">
                    <BlogCard blog={blogs[3]} idx={3} large />
                </div>
                {/* Bottom middle: 2 small cards */}
                <div className="col-span-1 row-span-1 row-start-3 col-start-3">
                    <BlogCard blog={blogs[4]} idx={4} />
                </div>
                <div className="col-span-1 row-span-1 row-start-3 col-start-4">
                    <BlogCard blog={blogs[5]} idx={5} />
                </div>
            </div>
        </section>
    )
}

function BlogCard({ blog = {}, idx = 0, tall = false, large = false }) {
    return (
        <motion.div
            className={`
                relative overflow-hidden rounded-xl shadow-lg text-white
                flex flex-col justify-end
                ${tall ? "h-[380px] md:h-[420px]" : large ? " md:h-[320px]" : "h-[120px] md:h-[160px]"}
                group
            `}
            custom={idx}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
        >
            <motion.img
                src={IMAGE_URL}
                alt={blog?.title || "Blog"}
                className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-500"
                variants={imgVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 120 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
            <motion.div className="relative z-20 p-4">
                <p className="text-xs text-gray-200 mb-1">{blog?.date || "12 April 2021"}</p>
                <h2 className="text-base md:text-lg font-semibold text-white mb-1">{blog?.title || "The Decorated Ways"}</h2>
                <p className="text-xs md:text-sm text-gray-200">{blog?.description || "Dive into minimalism"}</p>
                <a
                    href={blog?.link || "#"}
                    className="mt-2 inline-flex items-center text-blue-300 hover:underline text-xs md:text-sm font-medium"
                >
                    Read More
                    <svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </motion.div>
            {/* Animated floating blob */}
            <motion.div
                className="absolute -top-10 -right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl z-0"
                animate={{
                    y: [0, 20, -10, 0],
                    x: [0, -10, 10, 0],
                    scale: [1, 1.1, 0.95, 1]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6 + idx,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    )
}

export default Hero
