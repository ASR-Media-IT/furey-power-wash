"use client";
import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

const BeforeAndAfter = ({ slice }) => {
  return (
    <div className={`bg-black`}>
      <Container
        data-slice-type={slice.slice_type}
        s
        data-slice-variation={slice.variation}
      >

        <ImgComparisonSlider className="w-full">
          <PrismicNextImage
            className="object-cover w-full h-full max-h-[300px]"
            field={slice.primary.before}
            slot="first"
          />
          <PrismicNextImage
            className="object-cover w-full h-full max-h-[300px]"
            field={slice.primary.after}
            slot="second"
          />
        </ImgComparisonSlider>
      </Container>
    </div>
  );
};

export default BeforeAndAfter;
