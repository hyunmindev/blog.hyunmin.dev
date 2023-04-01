import PostHeader from '@/app/posts/[slug]/components/PostHeader';
import TableOfContents from '@/app/posts/[slug]/components/TableOfContents';
import styles from '@/app/posts/[slug]/page.module.scss';
import { getPost, getPosts } from '@/services/notion';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

async function Post({ params }: Props) {
  const post = await getPost(params.slug);
  const { content = '', description, title, toc = [] } = post;

  return (
    <>
      <PostHeader />
      <main className="container">
        <article className={styles.post}>
          <TableOfContents toc={toc} />
          <h1>{title}</h1>
          <p>{description}</p>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </>
  );
}

export default Post;
