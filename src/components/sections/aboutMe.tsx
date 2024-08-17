import React from 'react';




const AboutMeSection: React.FC = () => {


    return (
        <div>
                  <div className="flex gap-2 mb-5">
                  <h1 className="font-semibold text-2xl">About me </h1> <hr className="mt-3 border-2 w-10 border-primary"  />

                  </div>
                  <div>
                 
              

                  <span className="text-sm md:text-base lg:text-lg xl:text-xl">
                  Hi, Im Norbert Athekame,
                   a self taught software developer with a bachelors degree in computer engineering and a diploma in Artificial Intellegence and Machine Learning 
                  </span>
               
                  </div>
                  <div className="text-sm  flex justify-end mt-5 md:text-base lg:text-lg xl:text-xl">
                     “...Share knowledge today...you learn when you teach”
                  </div>
        </div>
    );
}

export default AboutMeSection;

