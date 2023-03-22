import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src={"/train.jpg"}
        height={716}
        width={477}
        alt="train"
        unoptimized={true}
      />
      <Image
        src={"/train.jpg"}
        height={716}
        width={477}
        alt="train"
      />
    </main>
  );
}
