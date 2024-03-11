"use client"

import {ChevronLeft} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from "react-icons/io5";
const BackButton = () => {
    const router = useRouter();
  return (
    <button>
        <IoArrowBack className='btn text-xl' onClick={() => router.back()} />
    </button>
  )
}

export default BackButton