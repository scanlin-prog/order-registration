import React from 'react';
import { useForm } from 'react-hook-form';
import './Page.css';
import Patient from '../../sections/Patient';
import Contacts from '../../sections/Contacts';
import Passport from '../../sections/Passport';
import PaymentMethod from '../../sections/PaymentMethod';
import DateTime from '../../sections/DateTime';
import Comment from '../../sections/Comment';
import { currentDate, today, months, defaultData } from '../../utils/constants.js';
import SubmitButton from '../SubmitButton/SubmitButton';


function Page() {

  const [decade, setDecade] = React.useState([]);
  const [dateTitle, setDateTitle] = React.useState('');
  const [checkBoxesValid, setCheckBoxesValid] = React.useState([]);
  const [checkBoxesData, setcheckBoxesData] = React.useState(defaultData);
  const [allData, setAllData] = React.useState({});

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

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

  function hasValidity(container, elements, selector) {
    const valid = elements.some((element) => element.classList.contains(`${selector}_active`))
    const errorField = container.querySelector('.message-error');
    if (!valid) {
      errorField.classList.remove('message-error_hidden')
      elements.forEach((element) => {
        element.classList.add(`${selector}_invalid`)
      })
    } else {
      errorField.classList.add('message-error_hidden')
      elements.forEach((element) => {
        element.classList.remove(`${selector}_invalid`)
      })
    }
    return valid;
  }

  function checkElements(selectorContainer, selector) {
    const container = document.querySelector(`#${selectorContainer}`);
    const elements = Array.from(container.querySelectorAll(`.${selector}`));
    const valid = hasValidity(container, elements, selector)
    checkBoxesValid.push(valid)
  }

  function validateAllCheckBoxes() {
    setCheckBoxesValid([])
    checkElements('tab-container', 'tab');
    checkElements('patient-radio-container', 'radio-button-wrapper');
    checkElements('passport-radio-container', 'radio-button-wrapper');
    checkElements('date-container', 'day');
    checkElements('time-container', 'time');

    return checkBoxesValid.every((boolean) => boolean === true);
  }

  function handleElementClick(evt, selectorContainer, selector) {
    const container = document.querySelector(`#${selectorContainer}`);
    const elements = Array.from(container.querySelectorAll(`.${selector}`));
    const el = evt.target.closest(`.${selector}`);

    if (!el.classList.contains(`${selector}_active`)) {

      elements.forEach((element) => {
        if (element.classList.contains(`${selector}_active`)) {
          element.classList.remove(`${selector}_active`)
        }
      })
    }

    el.classList.toggle(`${selector}_active`)

    hasValidity(container, elements, selector)
  }

  function handleRadioButtonClick(evt, selectorContainer, selector, iconSelector) {
    const container = document.querySelector(`#${selectorContainer}`)
    const elements = Array.from(container.querySelectorAll(`.${selector}`));
    const el = evt.target.closest(`.${selector}`);
    const elIcon = el.querySelector(`.${iconSelector}`);

    if (!el.classList.contains(`${selector}_active`)) {

      elements.forEach((element) => {
        if (element.classList.contains(`${selector}_active`)) {
          const icon = element.querySelector(`.${iconSelector}`);
          element.classList.remove(`${selector}_active`)
          icon.classList.remove(`${iconSelector}_active`)
        }
      })
    }

    el.classList.toggle(`${selector}_active`)
    elIcon.classList.toggle(`${iconSelector}_active`)

    hasValidity(container, elements, selector)
  }

  function addCheckBoxValue(key, value) {
    checkBoxesData[key] = value;
  }

  function combiningData(inputsData, othersData) {
    const newObject = { ...inputsData, ...othersData };

    newObject.phoneNumber = convertPhoneNumber(newObject.codeNumber, newObject.phoneNumber)
    delete newObject.codeNumber

    setAllData(newObject)
  }

  function convertPhoneNumber(phoneCode, phoneNumber) {
    return phoneNumber = `${phoneCode}(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
  }

  function test() {
    console.log(allData)
  }

  function onSubmit(data) {

    if (!validateAllCheckBoxes()) {
      return
    }
    combiningData(data, checkBoxesData)
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
    <form className="page" onSubmit={handleSubmit(onSubmit)}>
      <div className="arrow page__arrow-back" onClick={test}></div>
      <h1 className="page__title">Оформление заказа</h1>
      <Patient handleRadioButtonClick={handleRadioButtonClick} register={register} errors={errors} addCheckBoxValue={addCheckBoxValue} />
      <Contacts register={register} errors={errors} />
      <Passport handleRadioButtonClick={handleRadioButtonClick} register={register} errors={errors} addCheckBoxValue={addCheckBoxValue} />
      <PaymentMethod register={register} errors={errors} />
      <DateTime decade={decade} dateTitle={dateTitle} handleDateTimeClick={handleElementClick} handleButtonRightClick={handleButtonRightClick} handleButtonLeftClick={handleButtonLeftClick} addCheckBoxValue={addCheckBoxValue} />
      <Comment name={`commentField`} register={register} errors={errors} />
      <SubmitButton onClick={validateAllCheckBoxes} isValid={isValid} />
    </form>
  );
}

export default Page;
