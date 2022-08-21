import React from 'react';
import './Page.css';
import Patient from '../../sections/Patient';
import Contacts from '../../sections/Contacts';
import Passport from '../../sections/Passport';
import PaymentMethod from '../../sections/PaymentMethod';
import DateTime from '../../sections/DateTime';
import Comment from '../../sections/Comment';
import { currentDate, today, months } from '../../utils/constants.js';


function Page() {

  const [decade, setDecade] = React.useState([]);
  const [dateTitle, setDateTitle] = React.useState('');

  function renderDataCalendar(counter) {
    const newDecade = [today];
    for (let i = 1; i < counter; i++) {
      currentDate.setDate(currentDate.getDate() + 1);
      const day = {
        month: currentDate.getMonth(),
        weekDay: currentDate.getDay(),
        day: currentDate.getDate(),
        boolean: false
      }
      newDecade.push(day)
    }

    setDecade(newDecade)
    checkDecade(newDecade)
  }

  function handleButtonRightClick(counter) {
    currentDate.setMonth(decade[decade.length - 1].month, decade[decade.length - 1].day);

    const newDecade = []
    for (let i = 0; i < counter; i++) {
      currentDate.setDate(currentDate.getDate() + 1);
      const day = {
        month: currentDate.getMonth(),
        weekDay: currentDate.getDay(),
        day: currentDate.getDate(),
        boolean: false
      }
      newDecade.push(day)
    }

    setDecade(newDecade)
    checkDecade(newDecade)
  }

  function handleButtonLeftClick(counter) {

    currentDate.setMonth(decade[0].month, decade[0].day);

    const newDecade = []
    for (let i = 0; i < counter; i++) {
      currentDate.setDate(currentDate.getDate() - 1);
      const day = {
        month: currentDate.getMonth(),
        weekDay: currentDate.getDay(),
        day: currentDate.getDate(),
        boolean: false
      }
      newDecade.unshift(day)
    }

    setDecade(newDecade)
    checkDecade(newDecade)
  }

  function checkDecade(days) {
    if (days[0].month === days[days.length - 1].month) {
      setDateTitle(months[days[0].month])
    } else {
      setDateTitle(`${months[days[0].month]} - ${months[days[days.length - 1].month]}`)
    }
  }

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      renderDataCalendar(10)
    } else if (window.innerWidth < 768 && window.innerWidth > 575) {
      renderDataCalendar(7)
    } else if (window.innerWidth < 576) {
      renderDataCalendar(4)
    }
  }, [])


  return (
    <div className="page">
      <div className="arrow page__arrow-back"></div>
      <h1 className="page__title">Оформление заказа</h1>
      <Patient />
      <Contacts />
      <Passport />
      <PaymentMethod />
      <DateTime decade={decade} dateTitle={dateTitle} handleButtonRightClick={handleButtonRightClick} handleButtonLeftClick={handleButtonLeftClick} />
      <Comment />
    </div>
  );
}

export default Page;
