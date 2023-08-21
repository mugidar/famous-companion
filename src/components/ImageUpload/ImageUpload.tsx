"use client";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageUpload = ({ value, onChange, disabled }: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <CldUploadButton
        options={{
          maxFiles: 1
        }}
        uploadPreset="v1temzmh"
        onUpload={(result: any) => onChange(result.info.secure_url)}
      >
        <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center">
          <div className="relative h-20 w-20">
            <Image
              fill
              alt="Upload"
              src={value || "/placeholder.svg"}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};

export default ImageUpload;
