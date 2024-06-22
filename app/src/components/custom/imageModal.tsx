import { motion } from "framer-motion";
import { CircleX } from "lucide-react";
import Image from "next/image";

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
};

export default function ImageModal({ isOpen, onRequestClose, imageUrl }: ImageModalProps) {
    
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-3xl"
        >
          <button
            onClick={onRequestClose}
            className="absolute right-2 top-2 z-50 text-gray-400 hover:text-gray-700"
          >
            <CircleX />
          </button>
          <div className="relative h-96 w-full">
            <Image
              src={imageUrl}
              alt="Full size"
              width={500}
              height={450}
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    );
}
