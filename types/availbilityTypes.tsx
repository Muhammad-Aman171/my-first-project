import { StaticImageData } from "next/image"
// import { ButtonProps } from '@/types/availbilityTypes';

export type Availbilityprops = {
    heading2?: string,
    paragraph?: string,
    imgsrc?: StaticImageData,

}

export type HomePageProps = {
    h1Heading?: string,
    paragraph?: string,
    btnHeading?: string,
}

export type ButtonProps ={
    btnHeading: string,
}
