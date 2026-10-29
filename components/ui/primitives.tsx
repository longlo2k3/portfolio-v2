import Image from "next/image";
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import type { MediaAsset } from "@/content/media";

function join(...names: (string | undefined | false)[]) {
  return names.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={join("container", className)}>{children}</div>;
}

export function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={join("button", className)} {...props} />;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={join("card", className)} {...props} />;
}

export function SectionHeading({
  index,
  title,
  id,
  light = false,
}: {
  index: number;
  title: string;
  id: string;
  light?: boolean;
}) {
  return (
    <div className={join("section-heading", light && "section-heading--light")}>
      <span className="section-heading__index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <h2 id={id}>{title}</h2>
      <span className="section-heading__line" aria-hidden="true" />
    </div>
  );
}

export function MediaFrame({
  asset,
  className,
  aspectRatio = "4 / 3",
  sizes = "(max-width: 760px) 100vw, 50vw",
  priority = false,
}: {
  asset: MediaAsset;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={join("media-frame", className)} style={{ aspectRatio }}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
