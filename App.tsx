import React, { useState } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import AdGrid from './components/AdGrid';
import type { UploadedImage } from './types';

const App: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setUploadedImage({
        file: file,
        previewUrl: result,
        base64: result.split(',')[1],
        mimeType: file.type
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl mb-2">Transforme a Foto do Seu Produto em Anúncios Incríveis</h2>
            <p className="text-lg text-slate-400">
              <span className="font-semibold text-brand-primary">1. Envie sua imagem.</span> &nbsp;
              <span className="font-semibold text-brand-secondary">2. Escolha um formato de anúncio.</span> &nbsp;
              Deixe a IA fazer o resto.
            </p>
          </div>
          
          <ImageUploader 
            onImageUpload={handleImageUpload}
            onRemoveImage={handleRemoveImage}
            previewUrl={uploadedImage?.previewUrl || null}
          />
          
          {uploadedImage && (
             <AdGrid uploadedImage={uploadedImage} />
          )}

        </div>
      </main>
    </div>
  );
};

export default App;