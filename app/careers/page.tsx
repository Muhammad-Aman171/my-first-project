import React from "react";
import Css from "./careers.module.css";
import Image from "next/image";
import AboutCard from "@/app/(components)/aboutCard/aboutCard";
import CareersFacility from "../(components)/careersFacility/careersFacility";

import Bitmapimg11 from "@/public/assets/Bitmap 11.png";
import Bitmapimg9 from "@/public/assets/Bitmap 9.png";
import Bitmapimg10 from "@/public/assets/Bitmap 10.png";
import BitmapImg13 from "@/public/assets/Bitmap 13.png";
import HomeBody from "@/app/(components)/homeBody/homeBody";
import Bubbles from "../(components)/bubbles/bubbles";

export default function Careers() {
  return (
    <div>
      <div className={Css.careersHeader}>
        <h1>Careers</h1>
        <Bubbles/>
      </div>
      <div className={Css.careersCard}>
        <HomeBody
          h1Heading="Care to join our mission?"
          paragraph="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          btnHeading="Say Hello"
        />
        <Image
          src={BitmapImg13}
          alt="bitmapimg 13 does not show"
          id={Css.bitmapImg13}
        />
      </div>
      <div className={Css.careersHeading}>
        <h1>Our values</h1>
      </div>
      <div className={Css.careersCards}>
        <AboutCard
          src={Bitmapimg11}
          count="01"
          heading="Our teach"
          paragraph="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
        />
        <AboutCard
          src={Bitmapimg9}
          count="02"
          heading="Our integrity"
          paragraph="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
        />
        <AboutCard
          src={Bitmapimg10}
          count="03"
          heading="Our community"
          paragraph="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
        />
      </div>

      {/* careers facility */}

      <div className={Css.careersFacility}>
        <CareersFacility heading="General Manager" paragraph = "Jakarta, Indonesia" />
        <CareersFacility heading="UI/UX Designer" paragraph = "Yokohama, Japan" />
        <CareersFacility heading="Blog Content Copywriter" paragraph = "New York, United States" />
        <CareersFacility heading="Graphic Designer" paragraph = "New York, United States" />
        <CareersFacility heading="Fleet Supervisor" paragraph = "Jakarta, Indonesia" />
        <CareersFacility heading="UX Analyst" paragraph = "London, United Kingdom" />
      </div>
    </div>
  );
}
