import React from 'react';
import './components.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaUserAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Ratings from './reactstars';




function Testimonial() {
  return (
    <>
    <h1 style={{textAlign:"center", color:"white"}}>Testimonials from our Customers</h1>
    <div className='Testimonial'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='slide'>
          <div className="testimonial_records">
          <section className="records">
            <div className="record_name_location">
            <section className='record_loc'>
              <FaUserAlt/>
            </section>
              <section className='name_img'>
                <h2>safdar anis</h2>
              </section>
              <section className='record_loc'>
              <CiLocationOn />
              </section>
            </div>
            <div className="message">
              <h4>UNITED GROUP is my go-to store for top-quality tools. They offer renowned brands like Bosch, Stihl, and Philips, with everything I need for civil work, carpentry, plumbing, and more. From breakers and drills to grinders and chainsaws, their range is unmatched. The after-sales repair service is excellent, ensuring my tools are always in perfect working condition...</h4>
              <div className="ratings_others"><Ratings/> </div>
            </div>
          </section>

          <section className="records">
            <div className="record_name_location">
            <section className='record_loc'>
              <FaUserAlt/>
            </section>
              <section className='name_img'>
                <h2>safdar anis</h2>
              </section>
              <section className='record_loc'>
              <CiLocationOn />
              </section>
            </div>
            <div className="message">
              <h4>UNITED GROUP is my go-to store for top-quality tools. They offer renowned brands like Bosch, Stihl, and Philips, with everything I need for civil work, carpentry, plumbing, and more. From breakers and drills to grinders and chainsaws, their range is unmatched. The after-sales repair service is excellent, ensuring my tools are always in perfect working condition...</h4>
              <div className="ratings_others"><Ratings/> </div>
            </div>
          </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <div className="testimonial_records">
        <section className="records">
            <div className="record_name_location">
            <section className='record_loc'>
              <FaUserAlt/>
            </section>
              <section className='name_img'>
                <h2>safdar anis</h2>
              </section>
              <section className='record_loc'>
              <CiLocationOn />
              </section>
            </div>
            <div className="message">
              <h4>UNITED GROUP is my go-to store for top-quality tools. They offer renowned brands like Bosch, Stihl, and Philips, with everything I need for civil work, carpentry, plumbing, and more. From breakers and drills to grinders and chainsaws, their range is unmatched. The after-sales repair service is excellent, ensuring my tools are always in perfect working condition...</h4>
              <div className="ratings_others"><Ratings/> </div>
            </div>
          </section>
          {/* another one */}
          <section className="records">
            <div className="record_name_location">
            <section className='record_loc'>
              <FaUserAlt/>
            </section>
              <section className='name_img'>
                <h2>safdar anis</h2>
              </section>
              <section className='record_loc'>
              <CiLocationOn />
              </section>
            </div>
            <div className="message">
              <h4>UNITED GROUP is my go-to store for top-quality tools. They offer renowned brands like Bosch, Stihl, and Philips, with everything I need for civil work, carpentry, plumbing, and more. From breakers and drills to grinders and chainsaws, their range is unmatched. The after-sales repair service is excellent, ensuring my tools are always in perfect working condition...</h4>
              <div className="ratings_others"><Ratings/> </div>
            </div>
          </section>
        </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <div className="testimonial_records">
        <section className="records">
            <div className="record_name_location">
            <section className='record_loc'>
              <FaUserAlt/>
            </section>
              <section className='name_img'>
                <h2>safdar anis</h2>
              </section>
              <section className='record_loc'>
              <CiLocationOn />
              </section>
            </div>
            <div className="message">
              <h4>UNITED GROUP is my go-to store for top-quality tools. They offer renowned brands like Bosch, Stihl, and Philips, with everything I need for civil work, carpentry, plumbing, and more. From breakers and drills to grinders and chainsaws, their range is unmatched. The after-sales repair service is excellent, ensuring my tools are always in perfect working condition...</h4>
              <div className="ratings_others"><Ratings/> </div>
            </div>
          </section>
          {/* another client */}
          <section className="records">
            <div className="record_name_location">
            <section className='record_loc'>
              <FaUserAlt/>
            </section>
              <section className='name_img'>
                <h2>safdar anis</h2>
              </section>
              <section className='record_loc'>
              <CiLocationOn />
              </section>
            </div>
            <div className="message">
              <h4>UNITED GROUP is my go-to store for top-quality tools. They offer renowned brands like Bosch, Stihl, and Philips, with everything I need for civil work, carpentry, plumbing, and more. From breakers and drills to grinders and chainsaws, their range is unmatched. The after-sales repair service is excellent, ensuring my tools are always in perfect working condition...</h4>
              <div className="ratings_others"><Ratings/> </div>
            </div>
          </section>
        </div>
        </SwiperSlide>
       
       
        
        
      </Swiper>
    </div>
    </>
  )
}

export default Testimonial;