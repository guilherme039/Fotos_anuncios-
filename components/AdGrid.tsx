import React from 'react';
import { AD_FORMATS } from '../constants';
import AdCard from './AdCard';
import type { UploadedImage } from '../types';

interface AdGridProps {
    uploadedImage: UploadedImage;
}

const AdGrid: React.FC<AdGridProps> = ({ uploadedImage }) => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-center mb-8">Passo 2: Escolha um Formato de Anúncio para Gerar</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AD_FORMATS.map((format) => (
          <AdCard key={format.id} adFormat={format} uploadedImage={uploadedImage} />
        ))}
      </div>
    </div>
  );
};

export default AdGrid;