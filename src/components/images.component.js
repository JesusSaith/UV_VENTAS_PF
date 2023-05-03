import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import '../styles/ImageGallery.css';
import Reactions from './reacciones.component';
import CommentSection from './comentarios.component';




const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = [];
      const imagesRef = storage.ref('images');
      const images = await imagesRef.listAll();

      for (const image of images.items) {
        const url = await image.getDownloadURL();
        urls.push(url);
      }

      setImageUrls(urls);
    };

    fetchImageUrls();
  }, []);

  return (
    <div className="image-gallery">
      {imageUrls.map((url) => (
        <div className="image-container" key={url}>
          <img src={url} alt="Imagen" />
          <div className="reactions">
            <Reactions />
          </div>
          <div className="comments">
            <CommentSection />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
