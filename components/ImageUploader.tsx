import React, { useRef } from 'react';
import UploadIcon from './icons/UploadIcon';
import TrashIcon from './icons/TrashIcon';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  onRemoveImage: () => void;
  previewUrl: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, onRemoveImage, previewUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  }

  if (previewUrl) {
    return (
      <div className="w-full max-w-lg p-4 bg-base-200 border-2 border-dashed border-base-300 rounded-lg text-center transition-all duration-300">
        <div className="relative group w-full aspect-video rounded-lg overflow-hidden">
            <img src={previewUrl} alt="Product preview" className="w-full h-full object-contain" />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={onRemoveImage}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition-colors"
                >
                    <TrashIcon className="w-5 h-5"/>
                    Remover Imagem
                </button>
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg p-8 bg-base-200 border-2 border-dashed border-base-300 rounded-lg text-center hover:border-brand-primary transition-all duration-300 cursor-pointer" onClick={handleButtonClick}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
      <div className="flex flex-col items-center gap-4 text-slate-400">
        <UploadIcon className="w-12 h-12 text-slate-500" />
        <p className="text-lg font-semibold">Clique para enviar a foto do seu produto</p>
        <p className="text-sm">PNG, JPG ou WEBP. Alta resolução recomendada.</p>
      </div>
    </div>
  );
};

export default ImageUploader;