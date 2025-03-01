"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from '@clerk/nextjs';
import Link from "next/link";
import { LogInIcon, Inbox } from 'lucide-react'
import React from 'react';
import {useDropzone} from 'react-dropzone';

const UploadComponent = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });
    
  return (
    <div className="w-full mt-4">
      {isAuth ? (
        <div className="p-2 bg-white rounded-xl">
          <div {...getRootProps({
            className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col',
          })}>
            <input {...getInputProps()}/>
            <>
              <Inbox className="w-10 h-10 text-neutral-400" />
              <p className="mt-2 font-bold text-sm text-slate-400">Drop PDF here</p>
            </>
          </div>
        </div>
      ): (
        <Link href={'/sign-in '}>
            <Button>Login to get Started <LogInIcon /> </Button>
        </Link>
      )}
    </div>
  );
}; 

export default UploadComponent;