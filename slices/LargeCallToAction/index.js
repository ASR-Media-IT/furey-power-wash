/**
 * @typedef {import("@prismicio/client").Content.LargeCallToActionSlice} LargeCallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LargeCallToActionSlice>} LargeCallToActionProps
 * @param {LargeCallToActionProps}
 */
import { PrismicNextLink } from "@prismicio/next";
const LargeCallToAction = ({ slice }) => {
  return (
    <section className={`py-32 px-4 flex flex-col items-center my-20 justify-center bg-primary-600`}>
      <h2 className="max-w-3xl text-center text-white">{slice.primary.title}</h2>
      <p className="text-center text-gray-100">{slice.primary.body}</p>
      <PrismicNextLink className="btn-primary-white" field={slice.primary.cta_url}>
        {slice.primary.cta_title}
      </PrismicNextLink>
    </section>
  );
};

export default LargeCallToAction;
