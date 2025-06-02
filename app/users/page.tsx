import ProfilePic from '@/src/components/ui/Display/ProfilePic';
import ConsultoriesList from '@/app/home/components/ConsultoriesList';
import { consultoriesMockData as consultories } from '@/src/mocks/consultories/consultory.mock';

export default function UsersPage() {
  const userName = 'Hans Ortiz';
  const userConsultories = consultories;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-8 lg:items-start lg:pl-32 px-4">
      <h1 className="text-3xl font-bold mb-8 w-full text-center">
        Hola, bienvenido
      </h1>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-center mb-8">
        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-10">
          <ProfilePic
            src="/images/testProfilePic.PNG"
            alt="User Photo"
            userName={userName}
            size="w-24 h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 lg:rounded-lg lg:shadow-lg lg:shadow-gray-500/50 drop-shadow-md md:drop-shadow-lg"
          />
        </div>
        <div className="flex-1 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-3xl font-bold text-gray-900 drop-shadow-md flex items-center">
              {userName}
              <span className="ml-4 flex items-center text-xl text-gray-600 font-normal">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.5
              </span>
            </span>
            <p className="mt-2 text-gray-600 max-w-md text-center lg:text-left text-justify">
              Psicólogo profesional con sólida formación académica y experiencia
              en evaluación, intervención y acompañamiento emocional.
              Comprometido con el bienestar integral de sus pacientes, ofrece un
              enfoque empático, ético y basado en la evidencia para promover el
              desarrollo personal y la salud mental.
            </p>
          </div>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-colors self-center lg:self-end lg:mt-0">
            Editar
          </button>
        </div>
      </div>
      <h2 className="mt-8 text-xl font-bold w-full text-left">
        Propietario de:
      </h2>
      <div className="w-full mt-4 px-4 md:px-8 lg:px-0">
        <ConsultoriesList initialConsultories={userConsultories} />
      </div>
    </div>
  );
}
