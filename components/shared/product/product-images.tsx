"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image src={images[current]}
        className="min-h-[300px] object-cover object-center"
        width={1000}
        height={1000}
        alt="product image"
      />
      <div className="flex justify-center">
        {images.map((image, index) => (
          <div key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              'border mr-2 cursor-pointer hove:border-orange-600',
              current === index && 'border-orange-500'
            )}
          >
            <Image src={image} width={100} height={100} alt="image" />
          </div>
        ))}
      </div>
    </div >
  )
}

export default ProductImages
