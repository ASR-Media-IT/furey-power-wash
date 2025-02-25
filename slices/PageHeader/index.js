/**
 * @typedef {import("@prismicio/client").Content.PageHeaderSlice} PageHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PageHeaderSlice>} PageHeaderProps
 * @param {PageHeaderProps}
 */
"use client"
import { Container } from "@/components/atoms";
import { useParallax } from "@/hooks";
const PageHeader = ({ slice }) => {
  // initialize the parallax effect
  useParallax(.5)

  return (
    <div style={{ backgroundImage: `url(${slice.primary.background_image.url})` }} className={`relative parallax-container bg-center bg-cover h-[250px]`}>
      <div className={`absolute top-0 w-full bg-black opacity-60 h-[250px]`}></div>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={`absolute h-full w-full right-0 py-20 left-0 bottom-0 text-center flex flex-col justify-center items-center`}
      >
        <h1 className="relative mb-5 text-2xl text-white uppercase lg:text-3xl">
          {slice.primary.title}
          <div className="w-full h-1 mx-auto mt-3 bg-primary-600"></div>
          </h1>
        <p className="max-w-2xl mb-0 text-sm text-white lg:text-md">{slice.primary.body}</p>
      </Container>
    </div>
  );
};

export default PageHeader;
