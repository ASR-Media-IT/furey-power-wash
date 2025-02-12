import { Container } from "@/components/atoms";
import { PrismicNextLink } from "@prismicio/next";
const SimpleText = ({ slice }) => {
  return (
    <div className={slice.primary.background ? "bg-primary-600" : ""}>
      <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`flex flex-col ${slice.variation === "centered" ? "items-center text-center" : "items-start"}`}>
        <h2 className={slice.primary.background ? "text-white" : ""}>{slice.primary.title}</h2>
        <div className={slice.primary.background ? "bg-white h-0.5 max-w-sm w-full mt-3 mb-3" : "bg-primary-600 h-0.5 max-w-sm w-full mt-3 mb-3"}></div>
        <p className={`max-w-lg ${slice.primary.primary_cta_title && "max-w-md mb-10"} ${slice.primary.background && "text-grayTrue-100"}`}>{slice.primary.body}</p>
        {slice.items.length > 0 && (
          <div className="flex flex-row items-center justify-center gap-5 mt-5">
            {slice.primary.background ? slice.items.map((item, index) => {
              if (index <= 1) {
                return (
                  <PrismicNextLink key={index} field={item.cta_url} className={index === 0 ? "btn-primary-white" : "btn-link-white"}>
                    {item.cta_title}
                  </PrismicNextLink>
                )
              }
            }) : 
            slice.items.map((item, index) => {
              if (index <= 1) {
                return (
                  <PrismicNextLink key={index} field={item.cta_url} className={index === 0 ? "btn-primary" : "btn-link"}>
                    {item.cta_title}
                  </PrismicNextLink>
                )
              }
            })}
          </div>
        )}
      </div>
    </Container>
    </div>
  );
};

export default SimpleText;
