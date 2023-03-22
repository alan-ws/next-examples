export async function getStaticProps() {
  const res = await fetch(
    "https://gist.githubusercontent.com/alan-ws/f54c7b48a5af64270ec3c81764300fe8/raw/5fbf0956cf6360c1bfad63b6e88492c3089b1571/lorem_ipsum.txt"
  );

  const blob = await res.text();

  return {
    props: {
      blob,
    },
  };
}

export default function Home({ blob }: { blob: string }) {
  return (
    <main>
      {blob &&
        blob.split("\n").map((para, indx) => {
          return (
            <p key={indx}>
              {para}
              <br />
            </p>
          );
        })}
    </main>
  );
}
