import React from 'react';

import WhatsApp from '../../assets/img/whatsapp.svg';
import Telegram from '../../assets/img/telegram.svg';
import VK from '../../assets/img/vk.svg';
import './Contacts.css';

export const Contacts = () => {
  const copyNumber = event => {
    /* Select the text field */
    const copyText = event.target.innerHTML;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    alert('Номер скопирован');
  };

  return (
    <div className="contacts">
      <div className="contacts__text_primary" data-aos="fade-down" data-aos-duration="1000">
        Если у вас есть вопросы, предложения, сюрпирзы для Артемки - напишите Дашулику
      </div>
      <br />
      <div className="contacts__content">
        <div className="contacts__content__item">
          <div className="content__item__contact">
            <span className="contact__phone" onClick={e => copyNumber(e)}>
              8 988 492 50 24
            </span>
            <br />
            <br />
            <span className="contact__phone-desc">(нажмите на номер, чтобы скопировать)</span>
            <br />
            <br />
            <div className="socials">
              <a href="https://vk.com/shchepetnova" className="socials--button" target="norefferer">
                <img src={VK} alt="vk-app-icon" />
              </a>
              <a href="https://wa.clck.bar/79884925024" className="socials--button" target="norefferer">
                <img src={WhatsApp} alt="whats-app-icon" />
              </a>
              <a
                href="https://web.telegram.org/a/#1911648607"
                className="socials--button"
                target="norefferer">
                <img src={Telegram} alt="whats-app-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__warning">
        <span>Просьба сообщить о своем присутствии на мероприятии до 01.06.2026</span>
      </div>
    </div>
  );
};
