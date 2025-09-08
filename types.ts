
import type React from 'react';

export interface AdFormat {
  id: string;
  title: string;
  prompt: string;
  icon: React.ReactNode;
}

export interface UploadedImage {
  file: File;
  previewUrl: string;
  base64: string;
  mimeType: string;
}
