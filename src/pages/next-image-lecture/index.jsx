import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      <div className="grid md:grid-cols-3">
        <div className="relative h-64">
          <Image
            src="/images/greece.jpg"
            alt="next-image-lecture"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-64">
          <Image
            src="/images/greece.jpg"
            alt="next-image-lecture"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-64">
          <Image
            src="/images/greece.jpg"
            alt="next-image-lecture"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
