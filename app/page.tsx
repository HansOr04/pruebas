import Image from 'next/image';
import PrimaryButton from '@/app/components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';

export default function Home() {
  return (
    <section>
      <article className="flex flex-col justify-center items-center">
        <figure className='relative p-6'>
          <Image
          className='rounded-[60px]'
            src="https://images.pexels.com/photos/5336911/pexels-photo-5336911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={400}
            height={700}
            alt="Picture of the author"
          />
          <div className='absolute bottom-0 right-0 p-12 bg-white rounded-[35%]'>LOGO MINDNEST</div>
        </figure>
        <p className='m-2 text-center text-lg'>Encuentra el espacio perfecto <br />para tu práctica profesional.</p>
        <div className='flex gap-1 m-1'>
          <PrimaryButton content={"Iniciar sesión"} />
          <SecondaryButton content={'Register'} />
        </div>
      </article>
    </section>
  );
}
