import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
const ServicesSection = ({ slice }) => {
  return (
    <div>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div
          className={`flex flex-col items-center text-center`}
        >
          <h2>
            {slice.primary.title}
          </h2>
          <div
            className={
              slice.primary.background
                ? "bg-primary-600 h-0.5 max-w-sm w-full mt-3 mb-3"
                : "bg-primary-600 h-0.5 max-w-sm w-full mt-3 mb-3"
            }
          ></div>
          <div className="flex flex-row flex-wrap justify-center gap-5 gap-y-0">
            {slice.primary.service.map((service, index) => {
              return (
                <div key={index} className="holographic-container">
                  <div
                    key={index}
                    className="holographic-card flex flex-col relative items-center w-full h-full aspect-square sm:h-[250px] sm:w-[250px] justify-center gap-5 mt-5"
                  >
                    <div className="w-full h-full aspect-square sm:h-[250px]  sm:w-[250px] absolute z-10 bg-primary-900/60"></div>
                    <PrismicNextImage
                      className="w-fit h-fit aspect-square sm:w-[250px]  sm:h-[250px] object-cover"
                      field={service?.image}
                    />
                    <h4 className="text-white px-6 text-center duration-300 cursor-default z-20 absolute font-custom">
                      {service?.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
