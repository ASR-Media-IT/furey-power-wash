"use client"
/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @param {ImageGalleryProps}
 */
import { Container } from "@/components/atoms";
import { Gallery } from "react-grid-gallery";
import { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const ImageGallery = ({ slice }) => {
  const images = slice.items.map((item) => {
    return {
      src: item.image.url,
      width: item.image.dimensions.width,
      height: item.image.dimensions.height,
      caption: item.image.alt,
    }
  })

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  
  return (
    <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{slice.primary.title}</h2>
      <div className="h-0.5 w-full bg-primary-600 mb-10"></div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </Container>
  );
};

export default ImageGallery;
