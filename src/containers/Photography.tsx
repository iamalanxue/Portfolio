import { useState, useCallback } from "react";
import { Typography } from "@mui/material";
import Header from '../components/Header';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../common/constants";

const Photography = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const title = "While I am not learning about web-dev you can catch me traveling and learning photography";
  const caption = "Here are some of my shots I have taken.";
  return (
    <div className="photography">
      <Header title={title} caption={caption}/>
      <Gallery photos={photos} onClick={openLightbox} direction={"column"} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                ...photo,
                source: photo.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Photography; 
