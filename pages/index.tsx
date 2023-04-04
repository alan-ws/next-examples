import { GetServerSidePropsContext } from "next";

function Page({ data }: any) {
  return (
    <main>
      {data &&
        data.map((value: any, ind: number) => {
          return (
            <div key={ind}>
              <h1>{value.title}</h1>
              <p>{value.body}</p>
            </div>
          );
        })}
    </main>
  );
}

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=3600"
  );
  const fet = await fetch(`https://639040c665ff4183110d7bdd.mockapi.io/blogs`);
  const data = await fet.json();

  return { props: { data } };
}

export default Page;
