import { StaticImageData } from "next/image"

export type aboutBodyprops = {
    Heading?: string,
    Paragraph?: string,
}

export type aboutCardProps = {
    src: StaticImageData ;
    count ?: string;
    heading?: string;
    paragraph?: string;
}