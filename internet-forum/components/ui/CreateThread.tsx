'use client';

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type FormValues = {
  title: string;
  content: string;
};

const CreateThread: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data); // Här kan du skicka data till en server eller spara den lokalt
  };

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="w-full h-full grid-cols-1 bg-blue md:grid-cols-2">
        <div className="bg-[#16202a] h-full text-white flex items-center justify-center flex-col">
          <div className="my-4">
    <div className="max-w-lg mx-auto mt-10 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Skapa en ny tråd</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          
          <Label htmlFor="Rubrik" className="block mt-4 text-sm text-slate-400">Namn på tråd*</Label>
          <Input
        className="mt-2 mb-4 bg-transparent rounded-full"
        type="rubrik"
        id="rubrik"
        placeholder="Namn på tråd"
       
      />
          {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
        </div>
        
        <div className="mb-4">
        <Label htmlFor="Kategori" className="block mt-4 text-sm text-slate-400">Kategori*</Label>
          <Input
        className="mt-2 mb-4 bg-transparent rounded-full"
        type="kategori"
        id=""
        placeholder="Kategori" />
          
          {errors.content && <p className="text-red-500 text-xs italic">{errors.content.message}</p>}
        </div>

        <div className="flex items-center justify-between">
        <Button type="submit" className="w-full mt-6 bg-indigo-700 rounded-full hover:bg-indigo-700">Skapa ny tråd</Button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </main>
  )
};

export default CreateThread;