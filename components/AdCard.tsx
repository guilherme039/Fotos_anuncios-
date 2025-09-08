import React, { useState } from 'react';
import { generateAdMockup } from '../services/geminiService';
import type { AdFormat, UploadedImage } from '../types';
import Loader from './Loader';

interface AdCardProps {
  adFormat: AdFormat;
  uploadedImage: UploadedImage | null;
}

const AdCard: React.FC<AdCardProps> = ({ adFormat, uploadedImage }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!uploadedImage || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const generatedImg = await generateAdMockup(uploadedImage.base64, uploadedImage.mimeType, adFormat.prompt);
      setImageUrl(generatedImg);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro inesperado.');
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = !uploadedImage || isLoading;

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-base-300/80">
          <Loader />
          <p className="mt-2 text-sm text-base-content">Gerando...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="p-4 text-center text-red-400">
          <p className="font-semibold">Falha na Geração</p>
          <p className="text-xs mt-1">{error}</p>
          <button onClick={handleGenerate} className="mt-4 px-3 py-1 text-xs bg-brand-primary hover:bg-brand-secondary text-white rounded-md transition-colors">
            Tentar Novamente
          </button>
        </div>
      );
    }
    if (imageUrl) {
        return <img src={imageUrl} alt={`${adFormat.title} mockup`} className="w-full h-full object-cover" />;
    }

    return (
        <div className="flex flex-col items-center justify-center text-center p-4 h-full">
            <div className="text-brand-secondary mb-3">{adFormat.icon}</div>
            <h4 className="font-bold text-lg text-base-content">{adFormat.title}</h4>
            <button
                onClick={handleGenerate}
                disabled={isDisabled}
                className="mt-4 px-4 py-2 bg-brand-primary text-white rounded-md font-semibold hover:bg-brand-secondary transition-all duration-300 disabled:bg-base-300 disabled:text-slate-500 disabled:cursor-not-allowed"
            >
                Gerar
            </button>
        </div>
    );
  };
  
  return (
    <div className={`relative aspect-square bg-base-200 rounded-lg overflow-hidden border border-base-300 flex items-center justify-center transition-all duration-300 ${!imageUrl && !isLoading && !error ? 'hover:border-brand-primary hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/20' : ''}`}>
        {renderContent()}
    </div>
  );
};

export default AdCard;