
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useNavigate } from 'react-router';

type errorPros = {
  errorType: string
}


function Error({ errorType }: errorPros) {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 0);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-start items-center gap-5">
      <div className='absolute left-[50%]'>
        <img src="/error/bg.png" alt="bg" className='blur-3xl rounded-full opacity-20 w-2/3' />
      </div>
      <div className='relative flex justify-center items-center'>
        <img src="/error/disconnect.png" alt="disconnected" className="h-full object-contain w-2/4" />
      </div>
      <small className='text-gray'>{errorType}</small>
      <h1>No hay datos disponibles</h1>
      <div className='flex justify-start'>
        <div className="relative  flex justify-center items-center border border-orange-400/50 px-2 rounded-full ">
          <h4>Soporte Wisensor</h4>
          <div
            className="absolute top-0 left-0 h-full  bg-gradient-to-bl from-orange-500 to-primary mix-blend-multiply"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className='relative mt-20'>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          rounded='full' className='flex justify-center items-center gap-1 bg-black px-4 hover:bg-amber-600/15'>
          <GrFormPreviousLink />
          Volver
        </Button>
      </div>
    </div>
  );
}

export default Error;