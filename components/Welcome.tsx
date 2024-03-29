import { CroissantEmoji } from ".";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center z-10 px-4 pt-4 md:px-96 md:pt-24">
      <CroissantEmoji />
      <h1 className="mb-4 font-extrabold z-10 leading-[4rem] text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-4xl">Dokładnie 2 lata temu podjąłeś 
        <span className="text-transparent z-10 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-2xl md:text-3xl lg:text-4xl"> najlepszą decyzję w swoim życiu. </span>
        Teraz nadszedł moment, aby zweryfikować czy ta relacja przetrwała próbę czasu i dalej ma sens.
      </h1>
    </div>
  );
};

export default Welcome;
