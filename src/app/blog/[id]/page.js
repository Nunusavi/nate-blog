"use client"
import React from 'react'
import blogDataRaw from '../../../../blog.json'
import BlogSingle from '@/components/blog-single'

export default function BlogSinglePage({ params }) {
    const { id } = React.use(params)
    return <BlogSingle id={id} />
}