import React from "react";
import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import imgpath from "@/public/assets/Path 2.png";
import arrimg from "@/public/assets/Group 8 Copy.png";
import Mobileimg from "@/public/assets/Combined Shape.png";
import Scooterimg from "@/public/assets/001-scooter.png";
import Ridescooter from "@/public/assets/Combined Shape (1).png";
import Bitmap2 from "@/public/assets/Bitmap 2.png";
import Bitmap3 from "@/public/assets/Bitmap 3.png";
import Bitmap4 from "@/public/assets/Bitmap 4.png";

import Button from "./(components)/button/button";
import Bubblesbtn from "./(components)/bubbles/bubbles";
import Availbility from "./(components)/availbility/availbility";
import HomeBody from "./(components)/homeBody/homeBody";

export default function page() {
  return (
    <div>
      <div className="homepage">
        <div className={"heading"}>
          <h1>Scooter sharing made simple</h1>
          <div className={"linepara"}>
            <Image
              src={imgpath}
              alt="path img does not show"
              width={200}
              id="img1"
              height={1}
            />
            <div className={"para"}>
              <p>
                Scoot takes the hassle out of urban mobility. Our bikes are
                placed in convenient locations in each of our cities. Use our
                app to locate the nearest bike, unlock it with a tap, and you’re
                away!
              </p>
              <Button btnHeading="Get Scootin" />
            </div>
            <Image
              src={arrimg}
              alt="arrow img does not show"
              width={350}
              id="arrimg2"
            />
            <div className={"bubbles"}>
              <Bubblesbtn />
            </div>
          </div>
        </div>

        {/* the header and navbar is completed */}

        {/* the availbility is started */}

        <div className={"availible"}>
          <hr id="line1" />
          <div className="availibility">
            <Availbility
              imgsrc={Mobileimg}
              heading2="Locate with app"
              paragraph="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
            />
            <Availbility
              imgsrc={Scooterimg}
              heading2="Pick your scooter"
              paragraph="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
            />
            <Availbility
              imgsrc={Ridescooter}
              heading2="Enjoy the ride"
              paragraph="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
            />
          </div>
        </div>

        {/* the availbility is completed */}

        {/* the homeBody is started */}
        <div className={"homepage1"}>
          <HomeBody
            // h1Heading="Easy to use riding telemetry"
            // paragraph="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
            // btnHeading="Learn More"
          />
          <Image src={Bitmap2} alt="bitmap img does not show" id="bitmapimg2" />
        </div>
        <div className="homepage2">
          <Image src={Bitmap3} alt="bitmap img does not show" id="bitmapimg3" />
          <HomeBody
            h1Heading="Coming to a city near you"
            paragraph="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
            btnHeading="Learn More"
          />
        </div>
        <div className="homepage3">
          <HomeBody
            h1Heading="Zero hassle payments"
            paragraph="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            btnHeading="Learn More"
          />
          <Image src={Bitmap4} alt="bitmap img does not show" id="bitmapimg4" />
        </div>
      </div>
    </div>
  );
}
