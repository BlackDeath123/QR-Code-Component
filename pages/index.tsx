import Head from "next/head";
import QrCode from "components/QrCode";

export default function Home() {
  const qrCode = [
    {
      imageUrl: "/images/image-qr-code.png",
      title: "Improve your front-end skills by building projects",
      description:
        "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
    },
  ];
  return (
    <>
      <Head>
        <title>QR Code Component</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-light-gray h-full w-full absolute flex items-center justify-center px-4">
          {qrCode.map((qrCode, index) => {
            return (
              <QrCode
                key={index}
                imageUrl={qrCode.imageUrl}
                title={qrCode.title}
                description={qrCode.description}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
