import Image from "next/image";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="relative max-h-100 items-center flex overflow-hidden">
      <Image
        src="/image.jpg"
        alt="Banner"
        width={4320}
        height={1800}
        className="w-full h-auto"
      />
      <div className="absolute p-10 pt-30 inset-0 flex items-center z-10 font-bold text-[var(--text-inverse)] text-3xl max-w-xl">
        {title}
      </div>
    </div>
  );
}
