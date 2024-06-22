'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/lib/constants";
import ImageModal from "./imageModal";
import Image from "next/image";


export default function ColorsGallery() {
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [selectedImage, setSelectedImage] = useState("");

     const openModal = (imageUrl: string) => {
       setSelectedImage(imageUrl);
       setModalIsOpen(true);
     };

     const closeModal = () => {
       setModalIsOpen(false);
       setSelectedImage("");
     };
    return (
      <section className="container mx-auto p-4">
        <div className="grid grid-cols-2 place-content-center place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openModal(image.src)}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src}
                alt={`Alt ${index + 1}`}
                width={500}
                height={450}
                layout="responsive"
                className="object-cover object-center"
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {modalIsOpen && (
            <ImageModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              imageUrl={selectedImage}
            />
          )}
        </AnimatePresence>
      </section>
    );
}
