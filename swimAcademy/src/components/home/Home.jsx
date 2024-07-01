import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import React from 'react'

const Home = () => {

  return (
    <div className='home'>
        <div className='titlediv'>
            <div className='titles'>
                <h1 className='title'>KIDS <span className='camp'>CAMP</span></h1>
                <h1 className='title1'><span className='summer'>Summer</span> in Dobrich</h1>
            </div>
            <img src="/images/swimmingAcademy.jpeg" alt="" className='swimmingAcademy'/>
            <img src="/images/polqna.jpeg" alt="img" className='imgHome'/>
            <img src="/images/bulgaria.png" alt="" className='bulgariaImg'/>
        </div>
        <div className='text'>
            <p>Лятна занималня 2024 г. в  Swim Academy – Добрич е подходяща за деца от 6 до 14 години. Подготвили сме интересна креативна програма с образователни елементи и възможности за развитие и забавление, които да останат незабравим спомен за Вашето дете!</p>
            <p>Освен учебните занимания, съобразени с материала в училище, по време на престоя си при нас през лятото, детето Ви ще има възможност да се научи да плува или да усъвършенства този спорт, както и да се потопи в множество занимания на открито със страхотни игри и забавления.</p>
        </div>
        <div className='aboutSummerCamp'>
            <img src="/images/lagerdeca.jpg" alt="" className='lagerdeca'/>
            <div className='info'>
                <h4><FaCalendarAlt className='miniIcon'/> от 1 юни до 31 август</h4>
                <h4><FaClock className="miniIcon"/> От 8:00 до 17:30 часа</h4>
                <h4><FaPhoneAlt className='miniIcon'/> +359 888 358 308</h4>
                <h4><MdEmail className="miniIcon"/>dobrudzha2021@gmail.com</h4>
            </div>
            <div className="teacher">
                <img src="/images/antoniya.jpeg" alt="" className="antoniya"/>
                <h4>Антония Михова</h4>
            </div>
        </div>
        
        
    </div>
  )
}

export default Home