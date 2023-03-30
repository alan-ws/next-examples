import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
    console.log(document.referrer)
    console.log(window.history)
    console.log(history.state)
  }, [router]);

  return (
    <main>
        HI
    </main>
  );
}
