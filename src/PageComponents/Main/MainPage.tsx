import { Main } from './MainPage/Main';
import { AboutUs } from './AboutUsPage/AboutUs';
import { WeProud } from './WeProudPage/WeProud';
import { WeAreTrusted } from './WeAreTrustedPage/WeAreTrusted';
import { MyInstagram } from './MyInstagramPage/MyInstagram';
import { YourQuestions } from './YourQuestionsPage/YourQuestions';
import { WriteToUs } from './WriteToUsPage/WriteToUs';
import React from 'react';

export const MainPage = () => {
  return (
    <div>
      <Main />
      <AboutUs />
      <WeProud />
      <WeAreTrusted />
      <MyInstagram />
      <YourQuestions />
      <WriteToUs />
    </div>
  );
};