import React from "react";
import ContactUsClient from "./ContactUsClient";

export default function ContactUs({className, btnText}: {className?: string, btnText?: string}) {
  return <ContactUsClient className={className} btnText={btnText} />;
}
