import { StaticImageData } from "next/image"

export type aboutBodyprops = {
    Heading?: string,
    Paragraph?: string,
}

export type aboutCardProps = {
    src: string | StaticImageData ;
    count ?: string;
    heading?: string;
    paragraph?: string;
}