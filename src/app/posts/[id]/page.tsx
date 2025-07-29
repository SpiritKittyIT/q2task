import Image from "next/image";

export default function PostsDetail() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image
          src="/image.jpg"
          alt="Banner"
          width={4320}
          height={1800}
          className="w-full h-auto"
        />
        <div className="absolute p-10 pt-30 inset-0 flex items-center z-10 font-bold text-[var(--text-inverse)] text-3xl max-w-xl">
          Title
        </div>
      </div>
      <div className="p-10">
        post detail
      </div>
    </div>
  );
}