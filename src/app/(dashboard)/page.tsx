import LatestPosts from '@/components/home/LatestPosts';
import MainNav from '@/components/main-nav';
import TopCatogories from '@/components/home/top-categories';
import Container from '@/components/Container';
import PopularPosts from '@/components/home/popular-posts';

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>

        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCatogories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
