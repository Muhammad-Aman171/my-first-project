import { StaticImageData } from "next/image"

export type Availbilityprops = {
    heading2?: string,
    paragraph?: string,
    imgsrc?: string | StaticImageData,

}

export type HomePageProps = {
    h1Heading?: string,
    paragraph?: string,
    btnHeading?: string,
}

export type ButtonProps ={
    btnHeading: string,
}
