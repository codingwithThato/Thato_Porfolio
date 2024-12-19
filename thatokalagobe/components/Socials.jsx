import Link from 'next/link';

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
    {
        icon: <FaGithub />,
        path: ""
    },
    {
        icon: <FaLinkedin />,
        path: ""
    },
    {
        icon: <FaInstagram />,
        path: ""
    },
    {
        icon: <FaYoutube />,
        path: ""
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