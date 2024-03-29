import React from "react";
import Image from "next/image";

const aboutData = {
  title: "READ OUR STORY",
  subTitle: "We've been Making The Delicious Foods Since 2017",
  description:
    "Aahar was formed with a simple goal in mind, provide genuinely fresh and authentic Nepalese food to our customers. We focus on using fresh, seasonal ingredients to create dishes that are true to the traditional flavors and cooking methods of Nepalese and North Indian cuisine. We try our best in creating dishes that are as close as possible to what would be cooked and eaten in Nepal, using authentic ingredients and cooking techniques. By using fresh ingredients and staying true to traditional cooking methods, we aim to provide diners with a unique and flavorful dining experience that is a true reflection of the Nepalese and Indian culture and cuisine.",
};

export default function About() {
  return (
    <div className="bg-white">
      <div className="container mx-auto mt-12 dark:bg-white bg-white">
        <CardBody />
      </div>
    </div>
  );
}

const CardBody = () => {
  return (
    <div className="card card-side  shadow-xl dark:bg-white bg-white">
      <div className="flex flex-col sm:flex-row">
        <div className="card-body">
          <Image
            src="/images/about/chef.webp"
            alt="Movie"
            width={800}
            height={800}
            className="rounded-lg"
            priority
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-3xl">{aboutData.title}</h2>
          <h2 className="card-title font-sans text-gray-500 font-bold">
            {aboutData.subTitle}
          </h2>
          <p className="font-sans text-lg">{aboutData.description}</p>
        </div>
      </div>
    </div>
  );
};
