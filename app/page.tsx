import Image from 'next/image';
import PrimaryButton from '@/app/components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';
import logoMainPage from './statics/logo-main.png';
import consultingRoom from './statics/consulting-room.jpeg';

export default function Home() {
  return (
    <section className="w-full">
      <article className="flex flex-col justify-center items-center">
        <picture className="relative p-6">
          <Image
            className="main-image w-96 h-[700px] md:w-[700] md:h-[914] lg:w-[1407] lg:h-[723] object-cover"
            src={consultingRoom}
            width={400}
            height={700}
            alt="Picture of the author"
          />

          <Image
            className="absolute bottom-8 -right-2"
            src={logoMainPage}
            width={250}
            height={50}
            alt="logo MainNest"
          />
        </picture>
        <p className="m-2 text-center text-lg">
          Encuentra el espacio perfecto <br />
          para tu práctica profesional.
        </p>
        <div className="flex gap-1 m-1">
          <PrimaryButton content={'Iniciar sesión'} />
          <SecondaryButton content={'Register'} />
        </div>
      </article>
    </section>
  );
}
