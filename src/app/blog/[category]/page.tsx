import { getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { BlogPost } from '../utils'
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";
import Container from "@/components/Container";


const CateGory = ({ slug, metadata }: BlogPost) => {
    return <Link
        href={`/blog/${metadata.category}/${slug}`}
        key={slug}
    >
        <CardCategory
            title={metadata.title}
            summary={metadata.summary}
            date={metadata.publishedAt}
        />
    </Link>
}

export default function Page({ params }: { params: { category: string } }) {

    const posts = getBlogPosts().filter(
        (post) => post.metadata.category === params.category
    );



    if (!posts.length) {
        notFound();
    }


    return (<>
        <Header>
            <Container>
                <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">
                    {posts[0]?.metadata.category}
                </h1>
            </Container>
        </Header>
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {posts.sort((a, b) => new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1)
                    .map(CateGory)}
            </div>
        </Container>
    </>)

}