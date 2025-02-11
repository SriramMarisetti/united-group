import React from 'react';
import './homepage.css';
import Homebanner from '../../components/homebanner';
import Aboutus from '../../components/aboutus';
import United_suggestion from '../../components/united_suggestion';
import Question_tobuy from '../../components/question_tobuy';
import Getquote from '../../components/getquote';
import Multistepprogress from '../../components/multistep_progress';
import Brochurednd from '../../components/index.jsx';
import Testimonial from '../../components/testimonial';
{/* 
*/}



function Homepage() {
  return (
    <div>
      <Homebanner/>
      <Aboutus/>
      <United_suggestion/>
      <Question_tobuy/>
      <Getquote/>
      <Multistepprogress/>
      <Brochurednd/>
      <Testimonial/>
    </div>
  )
}

export default Homepage;