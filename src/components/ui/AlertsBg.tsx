
import Button from '../ui/Button';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useNavigate } from 'react-router';

type alertProps = {
  message: string
}


function AlertBg({ message }: alertProps) {
  const navigate = useNavigate();


  return (
    <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-start items-center gap-5">
      <div className='absolute left-[50%]'>
        <img src="/error/bg.png" alt="bg" className='blur-3xl rounded-full opacity-20 w-2/3' />
      </div>
      <div className='relative flex justify-center items-center'>
        <img src="/alerts/satelital-monitoring.png" alt="disconnected" className="h-full object-contain w-2/4" />
      </div>
      <small className='text-gray'>Haz clic en el menu lateral para seleccionar una ruta predefinida</small>
      <h1>{message}</h1>
      
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

export default AlertBg;