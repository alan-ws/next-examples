import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// export function getServerSideProps(ctx: GetServerSidePropsContext) {
//   console.log(ctx.params);
//   console.log(ctx.query);
//   console.log(ctx.resolvedUrl);
//   console.log(ctx.req.url);
// }

export default function Page() {
  const router = useRouter();
  const [couter, setCounter] = useState(0);

  useEffect(() => {
    document.referrer.replace("", "where-did-user-come-from");
    // console.log(router);
    console.log(document.referrer);
    // console.log(window.history);
    // console.log(history.state);
  }, [router]);

  return (
    <main>
      <Link href="/we-went-next">WE WENT NEXT</Link>
    </main>
  );
}
