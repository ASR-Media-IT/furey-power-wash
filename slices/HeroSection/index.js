"use client";
import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { useParallax } from "@/hooks";
const HeroSection = ({ slice }) => {
  // initialize the parallax effect
  useParallax(0.5);
  return (
    <div
      style={{ backgroundImage: `url(${slice.primary.image.url})` }}
      className={`relative parallax-container bg-center bg-cover h-full`}
    >
      <div className="absolute top-0 w-full bg-black opacity-60 h-full"></div>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={`lg:flex-row flex-col justify-between items-center gap-16 flex relative h-[500px] w-full !p-0`}
      >
        {/* Content */}
        <div className="flex flex-col items-center justify-center w-full h-full px-4">
          <PrismicNextImage
            className="md:h-28 h-24 w-fit mb-5"
            field={slice.primary.logo}
          />
          {/* <h1 className="max-w-xs text-center lg:text-left md:max-w-2xl">
          {slice.primary.heading}
        </h1> */}
          <p className="max-w-xl px-4 font-custom md:px-0 mb-10 text-center text-grayTrue-100 lg:text-left">
            {slice.primary.body}
          </p>
          <div className="z-0 flex flex-col md:flex-row items-center justify-center gap-5 lg:justify-start">
            <PrismicNextLink
              className="btn-primary"
              field={slice.primary.primary_cta_url}
            >
              {slice.primary.primary_cta_title}
            </PrismicNextLink>
            <PrismicNextLink
              className="btn-link-white"
              field={slice.primary.secondary_cta_url}
            >
              {slice.primary.secondary_cta_title}
            </PrismicNextLink>
          </div>
        </div>
        {/* Image */}
        {/* <div className="absolute right-0 left-0 bottom-0 top-0 w-full -z-10 h-full bg-black/50"></div>
        <div className="absolute right-0 left-0 bottom-0 top-0 w-full -z-20 h-full">
          <PrismicNextImage
            className="object-cover w-full h-full"
            field={slice.primary.image}
          />
        </div> */}
      </Container>
    </div>
  );
};

export default HeroSection;
