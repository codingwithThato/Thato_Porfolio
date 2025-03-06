import Link from 'next/link';

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
    {
        icon: <FaGithub />,
        path: "https://github.com/codingwithThato"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/thato-kalagobe-b1a091311"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/thato.xvii"
    },
    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/@thatokalagobe"
    },

];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socialLinks.map((item, index) => {
            return (
                <Link className={iconStyles} href={item.path} key={index}>
                    {/* <a className={iconStyles}>{item.icon}</a> */}
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials