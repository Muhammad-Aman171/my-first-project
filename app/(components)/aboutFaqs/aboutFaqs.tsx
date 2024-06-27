import React from "react";
import Css from "./aboutFaqs.module.css";

export default function AboutFaqs() {
  return (
    <div className={Css.faqs}>
      <div className={Css.heading1}>
        <h1><b>How it works</b></h1>
        <div className={Css.questions1}>
          <div className={Css.ques1}>
            <label htmlFor="app">
              <b>How do I download the app?</b>
              <span> &#62; </span>
            </label>
            <input type="checkbox" name="" id="app" />
            <div className={Css.content1}>
              <p>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            </div>
          </div>
          <div className={Css.ques1}>
            <label htmlFor="scoots">
              <b>Can I find a nearby Scoots?</b>
              <span> &#62; </span>
            </label>
            <input type="checkbox" name="" id="scoots" />
            <div className={Css.content1}>
              <p>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            </div>
          </div>
          <div className={Css.ques1}>
            <label htmlFor="ride">
              <b>Do I need a license to ride?</b>
              <span> &#62; </span>
            </label>
            <input type="checkbox" name="" id="ride" />
            <div className={Css.content1}>
              <p>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className={Css.heading2}>
        <h1><b>Safe driving</b></h1>
        <div className={Css.questions1}>
          <div className={Css.ques1}>
            <label htmlFor="helmet">
              <b>Should I wear a helmet?</b>
              <span> &#62; </span>
            </label>
            <input type="checkbox" name="" id="helmet" />
            <div className={Css.content1}>
              <p>
              Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.
              </p>
            </div>
          </div>
          <div className={Css.ques1}>
            <label htmlFor="rules">
              <b>How about the rules & regulations?</b>
              <span> &#62; </span>
            </label>
            <input type="checkbox" name="" id="rules" />
            <div className={Css.content1}>
              <p>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            </div>
          </div>
          <div className={Css.ques1}>
            <label htmlFor="damage">
              <b>What if I damage my Scoot?</b>
              <span> &#62; </span>
            </label>
            <input type="checkbox" name="" id="damage" />
            <div className={Css.content1}>
              <p>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
