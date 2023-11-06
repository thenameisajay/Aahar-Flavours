import React from "react";
import Image from "next/image";
import { ShoppingCart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Easy Chicken Briyani",
    href: "#",
    imageSrc: "/images/foods/1.webp",
    imageAlt: "Chicken Briyani",
    price: "£10",
    description:
      "Biryani, pronounced 'beery-anee,' is the paella of Indian food. Traditionally, it's baked in a clay pot for hours, but our easy chicken one-pot wonder allows you to create this tasty bowlful at speed!",
  },
  {
    id: 2,
    name: "Easy Lamb Biryani",
    href: "#",
    imageSrc: "/images/foods/2.webp",
    imageAlt: "Easy Lamb Biryani",
    price: "£15",
    description:
      "Biryani, pronounced 'beery-anee,' is the paella of Indian food. Traditionally, it's baked in a clay pot for hours, but our version with British lamb mince is ready in less than thirty minutes!",
  },
  {
    id: 3,
    name: "Palak Paneer With Cardamom Rice",
    href: "#",
    imageSrc: "/images/foods/3.webp",
    imageAlt: "Palak Paneer With Cardamom Rice",
    price: "£12",
    description:
      "To add flavour to this spicy spinach curry, you'll sizzle tomato, onion and spices into a delicious sauce. Add golden brown paneer cheese and serve with fragrant cardamom rice.",
  },
  {
    id: 4,
    name: "Coriander Chicken & Spiced Rice",
    href: "#",
    imageSrc: "/images/foods/4.webp",
    imageAlt: "Coriander Chicken & Spiced Rice",
    price: "£17",
    description:
      "This is modern Indian food. You'll make a fresh coriander chutney, using cool yoghurt, ground almonds, garlic, ginger and coriander. Stir it into warm pan-fried chicken and serve over spiced sultana rice, to create a beautiful & fresh alternative to curry. (Naturally gluten-free, but unsuitable for coeliacs).",
  },
];

function truncateDescription(description: string, maxLength: number) {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}

export default function Foods() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Order Online
          </h2>
          <p className="mt-4 text-gray-500 font-bold">
            Some of our most popular dishes
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none   lg:h-80">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
                    width={200}
                    height={200}
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500 group-hover:opacity-100 z-50">
                  {truncateDescription(product.description, 150)}
                </p>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-black font-bold">
                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 text-black"
                        />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className="mt-4 text-center flex flex-row justify-between px-2">
                  <button
                    className="flex flex-row items-center rounded-md py-[0.4375rem]pl-2 pr-2   w-28 h-10 text-sm font-semibold lg:pr-3 bg-white shadow hover:bg-green-500"
                    type="button"
                  >
                    <ShoppingBag height={20} width={20} />
                    <p className="ml-2 text-sm visible">Buy Now</p>
                  </button>
                  <button
                    className="flex flex-row items-center rounded-md py-[0.4375rem] w-20  h-10 pl-2 pr-2 text-sm font-semibold lg:pr-3 bg-white shadow"
                    type="button"
                  >
                    <ShoppingCart />
                    <p className="ml-2 text-sm visible">Add </p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
