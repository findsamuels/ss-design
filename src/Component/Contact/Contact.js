import React from 'react'
import classes from './Contact.module.scss'
import ContentWrapper from '../UI/ContentWrapper/ContentWrapper'
import Icon from '../UI/Icons/Icons'

const contact = (props) => {

    const icons = {
      instagram: {
        icon: ["fab", "instagram"],
        link: "https://www.instagram.com/findsamuel/"
      },
      facebook: {
        icon: ["fab", "facebook"],
        link: "https://www.facebook.com/"
      },
      linkden: {
        icon: ["fab", "linkedin"],
        link: "https://www.linkedin.com/in/sam-simon-a23900189/"
      },
      Git: {
        icon: ["fab", "github"],
        link: "https://github.com/findsamuels"
      }
    };
   let iconArray = []

    for(let icon in icons){
iconArray.push({
    id: icon,
    config: icons[icon]
})
    }

  let contactIcons = iconArray.map(icon => (
    <div key={icon.id} className={classes.Icons}>
      <a  href={icon.config.link} rel="noopener noreferrer" target="_blank">
        <Icon
          
          icon={icon.config.icon}
          color="white"
          fontSize="lg"
        />
      </a>
    </div>
  ));
    return (
      <div ref={props.contactRef} className={classes.Contact}>
        <div className={classes.contactContainer}>
          <h1 className={classes.ContactHead}>GET IN TOUCH</h1>
          <div className={classes.IconDiv}>{contactIcons}</div>
          <h4 className={classes.EmailHeader}>
            Or email me at{" "}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/u/0/"
              >
                findsamuels@gmail.com
              </a>
            </li>
          </h4>
        </div>
      </div>
    );
}

export default contact
