import { GetStaticPropsContext } from "next";

export async function getStaticProps(props: GetStaticPropsContext) {
  const res = await fetch(
    `https://639040c665ff4183110d7bdd.mockapi.io/blogs/${props?.params?.id}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://639040c665ff4183110d7bdd.mockapi.io/blogs");
  const posts = await res.json();

  const paths = posts.map((post: { id: any }) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: "blocking" };
}

export default function Home({ posts }: any) {
  return <main>{posts.body}</main>;
}
