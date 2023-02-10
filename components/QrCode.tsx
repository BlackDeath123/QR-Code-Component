import Image from "next/image";

type QrCodeProps = {
  imageUrl: string;
  title: string;
  description?: string;
};

export default function QrCode({ imageUrl, title, description }: QrCodeProps) {
  return (
    <>
      <article className="bg-white w-card-minmax p-[15px] rounded-2xl grid gap-y-[15px]">
        <header className="flex justify-center rounded-xl overflow-hidden">
          <Image src={imageUrl} alt={title} width="288" height="288" />
        </header>
        <section className="grid gap-y-[15px] mb-[22px]">
          <h1 className="font-bold text-dark-blue text-center leading-snug text-[22px]">
            {title}
          </h1>
          <p className="text-grayish-blue px-3 text-center leading-tight text-[15px]">
            {description}
          </p>
        </section>
      </article>
    </>
  );
}
