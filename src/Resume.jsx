import styles from './resume.module.scss';
import './styles/index.scss';

import vira from './assets/img/avatar.jpg';
import classNames from 'classnames';
import { useState } from 'react';
import {
  experience,
  hardSkills,
  education,
  softSkills,
  languages,
  infosUkr,
  experienceUkr,
  softSkillsUkr,
  languagesUkr,
  contacts,
  headings,
  headingsUkr,
  educationUkr,
} from './infos/Infos';

const tabs = {
  UA: 'UA',
  ENG: 'ENG',
};

const navList = Object.values(tabs);

const Resume = () => {
  const [tab, setTab] = useState(tabs.ENG);

  return (
    <div>
      {tab === tabs.UA ? (
        <div className={styles.resume}>
          <div className={styles.firstContainer}>
            <div className={classNames(styles.imgContainer)}>
              <img src={vira} alt='Vira Matiiash' />
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[0]}</h2>
              <div className={styles.contactsBox}>
                {contacts.map((contact) => (
                  <div className={styles.text}>
                    <a href={contact.href}>
                      {contact.name}{' '}
                      <span className={styles.contact}>{contact.info}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[1]}</h2>
              <div className={styles.hardSkillsBox}>
                <ul className={styles.description}>
                  {hardSkills.map((item, index) => (
                    <li key={`li-${index}`} className={styles.text}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[2]}</h2>
              <div className={styles.softSkillsBox}>
                <ul className={styles.description}>
                  {softSkillsUkr.map((item, index) => (
                    <li key={`li-${index}`} className={styles.text}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[3]}</h2>
              <ul className={styles.description}>
                {languagesUkr.map((item, index) => (
                  <li key={`li-${index}`} className={classNames(styles.text)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.secondContainer}>
            <div className={styles.headingContainer}>
              <div className={styles.nameGroup}>
                <div className={classNames(styles.imgContainerMobile)}>
                  <img src={vira} alt='Vira Matiiash' />
                </div>
                <div className={styles.headings}>
                  <h1 className={styles.mainHeading}>
                    <span className={styles.name}>ВІРА</span> <br />
                    <span className={styles.surname}>МАТІЯШ</span>
                  </h1>
                  <h2 className={styles.littleHeading}>Front-End розробник</h2>
                </div>
              </div>

              <nav className={styles.nav}>
                <ul className={styles.langContainer}>
                  {navList.map((el, index) => (
                    <li
                      key={`li-${index}`}
                      onClick={() => setTab(el)}
                      className={classNames(
                        styles.el,
                        tab === el && styles.clicked
                      )}
                    >
                      {el}
                    </li>
                  ))}
                  {/* <div className={styles.verticalLine}></div> */}
                </ul>
              </nav>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[4]}</h2>
              <div className={styles.description}>
                Працьовита і цілеспрямована веб-розробниця початкового рівня із
                вмінням вчитися та працювати в команді. Більш ніж 1 рік досвіду
                розробки веб-сайтів. Мотивована забезпечувати клієнтів зручними
                аплікаціями.
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[6]}</h2>
              {experienceUkr.map((info) => (
                <div className={classNames(styles.description, styles.work)}>
                  <div className={styles.positionInfo}>
                    <div className={styles.position}>{info.position}</div>
                    <div className={styles.place}>{info.place}</div>
                  </div>
                  <ul className={styles.descriptionBox}>
                    {info.description.map((item, index) => (
                      <li key={`li-${index}`} className={styles.item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[5]}</h2>
              {educationUkr.map((info) => (
                <div className={styles.infoBlock}>
                  <div
                    className={classNames(styles.description, styles.education)}
                  >
                    <div className={styles.year}>{info.year}</div>

                    <div className={styles.educationPlace}>
                      {info.place.map((place) => (
                        <div>{place}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[7]}</h2>
              <div className={styles.description}>
                <ul className={styles.courses}>
                  <li className={styles.course}>
                    Softserve IT Academy, серпень 2021 (Фронтенд)
                  </li>
                  <li className={styles.course}>
                    Beetroot Academy, січень 2021 - липень 2022 (Фронтенд)
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headingsUkr[8]}</h2>
              <div className={styles.description}>
                <div className={styles.project}>
                  <a
                    className={styles.link}
                    href='https://ottohansschool.com.ua/'
                  >
                    Website: Otto Hans - Duolanguage School{' '}
                  </a>
                  <span className={styles.technologies}>
                    [React JS, SCSS, Firebase]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {tab === tabs.ENG ? (
        <div className={styles.resume}>
          <div className={styles.firstContainer}>
            <div className={styles.imgContainer}>
              <img src={vira} alt='Vira Matiiash' />
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[0]}</h2>
              <div className={styles.contactsBox}>
                {contacts.map((contact) => (
                  <div className={styles.text}>
                    <a href={contact.href}>
                      {contact.name}{' '}
                      <span className={styles.contact}>{contact.info}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[1]}</h2>
              <div className={styles.hardSkillsBox}>
                <ul className={styles.description}>
                  {hardSkills.map((item, index) => (
                    <li key={`li-${index}`} className={styles.text}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[2]}</h2>
              <div className={styles.softSkillsBox}>
                <ul className={styles.description}>
                  {softSkills.map((item, index) => (
                    <li key={`li-${index}`} className={styles.text}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[3]}</h2>
              <ul className={styles.description}>
                {languages.map((item, index) => (
                  <li key={`li-${index}`} className={classNames(styles.text)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.secondContainer}>
            <div className={styles.headingContainer}>
              <div className={styles.nameGroup}>
                <div className={classNames(styles.imgContainerMobile)}>
                  <img src={vira} alt='Vira Matiiash' />
                </div>
                <div className={styles.headings}>
                  <h1 className={styles.mainHeading}>
                    <span className={styles.name}>VIRA</span> <br />
                    <span className={styles.surname}>MATIIASH</span>
                  </h1>
                  <h2 className={styles.littleHeading}>Front-End Developer</h2>
                </div>
              </div>

              <nav className={styles.nav}>
                <ul className={styles.langContainer}>
                  {navList.map((el, index) => (
                    <li
                      key={`li-${index}`}
                      onClick={() => setTab(el)}
                      className={classNames(
                        styles.el,
                        tab === el && styles.clicked
                      )}
                    >
                      {el}
                    </li>
                  ))}
                  {/* <div className={styles.verticalLine}></div> */}
                </ul>
              </nav>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[4]}</h2>
              <div className={styles.description}>
                Hardworking and self-motivated Trainee Web Developer with
                ability to learn and collaborate. More than 1 year experience in
                maintaining websites. Motivated to provide clients with
                user-friendly applications.
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[6]}</h2>
              {experience.map((info) => (
                <div className={classNames(styles.description, styles.work)}>
                  <div className={styles.positionInfo}>
                    <div className={styles.position}>{info.position}</div>
                    <div className={styles.place}>{info.place}</div>
                  </div>
                  <ul className={styles.descriptionBox}>
                    {info.description.map((item, index) => (
                      <li key={`li-${index}`} className={styles.item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[5]}</h2>
              {education.map((info) => (
                <div className={styles.infoBlock}>
                  <div
                    className={classNames(styles.description, styles.education)}
                  >
                    <div className={styles.year}>{info.year}</div>

                    <div className={styles.educationPlace}>
                      {info.place.map((place) => (
                        <div>{place}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[7]}</h2>
              <div className={styles.description}>
                <ul className={styles.courses}>
                  <li className={styles.course}>
                    Softserve IT Academy, August 2021 (Frontend)
                  </li>
                  <li className={styles.course}>
                    Beetroot Academy, January 2021 - July 2022 (Frontend)
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.heading}>{headings[8]}</h2>
              <div className={styles.description}>
                <div className={styles.project}>
                  <a
                    className={styles.link}
                    href='https://ottohansschool.com.ua/'
                  >
                    Website: Otto Hans - Duolanguage School{' '}
                  </a>
                  <span className={styles.technologies}>
                    [React JS, SCSS, Firebase]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Resume;
