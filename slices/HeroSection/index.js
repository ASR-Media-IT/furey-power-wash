import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
const HeroSection = ({ slice }) => {
  return (
    <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`lg:flex-row flex-col justify-between items-center gap-16 flex`}
    >
      {/* Content */}
      <div className="flex flex-col items-center justify-center lg:items-start">
        <h1 className="max-w-xs text-center lg:text-left md:max-w-2xl">{slice.primary.heading}</h1>
        <p className="max-w-xl mb-10 text-center lg:text-left">{slice.primary.body}</p>
        <div className="z-0 flex flex-row items-center justify-center gap-5 lg:justify-start">
          <PrismicNextLink className="btn-primary" field={slice.primary.primary_cta_url}>
            {slice.primary.primary_cta_title}
          </PrismicNextLink>
          <PrismicNextLink className="btn-link" field={slice.primary.secondary_cta_url}>
            {slice.primary.secondary_cta_title}
          </PrismicNextLink>
        </div>
      </div>
      {/* Image */}
      <div className="w-full lg:h-[350px] max-w-[500px]">
        <PrismicNextImage className="object-cover w-full h-full" field={slice.primary.image} />
      </div>
    </Container>
  );
};

export default HeroSection;
