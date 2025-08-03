import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@heroicons/react/24/outline";

interface AlternatingCardRowProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  icon?: ReactNode;
  cta?: ReactNode;
  reverse?: boolean;
  /**
   * Background color for the row. 'white' (default) = bg-background, 'gray' = bg-muted
   */
  background?: 'white' | 'gray';
  /**
   * Optional bulleted list to display below the subtitle.
   */
  bullets?: string[];
}

export function AlternatingCardRow({
  title,
  subtitle,
  imageSrc,
  icon,
  cta,
  reverse = false,
  background = 'white',
  bullets,
}: AlternatingCardRowProps) {
  return (
    <section className={`${background === 'gray' ? 'bg-muted' : 'bg-background'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 py-12`}>
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
            <p className="text-lg text-muted-foreground">{subtitle}</p>
            {bullets && bullets.length > 0 && (
              <ul className="space-y-2 mt-4">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center text-base text-muted-foreground">
                    <CheckIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {cta && <div className="mt-6">{cta}</div>}
          </div>
          <div className="flex-1 flex justify-center items-center">
            {imageSrc ? (
              <Image src={imageSrc} alt={title} width={400} height={300} className="rounded-xl object-cover shadow-lg max-h-64 w-auto" />
            ) : icon ? (
              <div className="w-32 h-32 flex items-center justify-center bg-primary/10 rounded-xl text-primary text-6xl">
                {icon}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
} 