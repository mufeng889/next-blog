import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

type Post = ReturnType<typeof getBlogPosts>[number]

const Article = ({ metadata, slug }: Post) => {
    return <article className="text-wrap max-w-md my-10">
        <Link href={`/blog/${metadata.category}/${slug}`}>
            <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
                {metadata.title}
            </h3>
        </Link>
        <p className="leading-8 my-5">{metadata.summary}</p>
        <p className="text-sm text-muted-foreground">
            {formatDate(metadata.publishedAt)}
        </p>
    </article>
}

const LatestPosts = () => {

    const latestPosts = getBlogPosts();

    return (
        <>
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                最新发布
            </h1>
            {latestPosts
                .sort((a, b) => new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1)
                .map(Article)}
        </>
    )
}

export default LatestPosts