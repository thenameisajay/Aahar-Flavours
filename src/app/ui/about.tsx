import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto mt-12">
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="flex flex-row">
          <figure className="p-6">
            <Image
              src="/images/about/chef.jpg"
              alt="Movie"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">READ OUR STORY</h2>
            <h2 className="card-title font-sans">
              We've been Making The Delicious Foods Since 2017
            </h2>
            <p className="font-sans">
              Aahar was formed with a simple goal in mind, provide genuinely
              fresh and authentic nepalese food to our customers We focus on
              using fresh, seasonal ingredients to create dishes that are true
              to the traditional flavors and cooking methods of Nepalese and
              North Indian cuisine. We try our best in creating dishes that are
              as close as possible to what would be cooked and eaten in Nepal,
              using authentic ingredients and cooking techniques. By using fresh
              ingredients and staying true to traditional cooking methods, we
              aim to provide diners with a unique and flavorful dining
              experience that is a true reflection of the nepalese and Indian
              culture and cuisine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
