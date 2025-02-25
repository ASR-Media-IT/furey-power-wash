import { Container } from "@/components/atoms";
import { PrismicRichText } from "@prismicio/react";
const RichText = ({ slice }) => {
  return (
    <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={``}
    >
      <div className={`max-w-4xl ${slice.variation === "centered" && "text-center mx-auto"}`}>
        <PrismicRichText field={slice.primary.body} />
      </div>
    </Container>
  );
};

export default RichText;
