import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
 
const socials = [
    { icon: <FaGithub />, path: "https://github.com/KamranYT" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/muhammad-kamran-916b752b4" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100080963443012&mibextid=ZbWKwL" },
    { icon: <FaTwitter />, path: "https://twitter.com/MuhammadKa31378" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;



















// import Link from "next/link";

// import { FaGitHub, FaLinkedIn, FaYoutube, FaTwitter } from 'react-icons/fa';

// export default const socials = [
//     { icon: <FaGitHub />, path: '' },
//     { icon: <FaLinkedIn />, path: '' },
//     { icon: <FaYoutube />, path: '' },
//     { icon: <FaTwitter />, path: '' },
// ];


// export const Social = ({containerStyles, iconStyles}) => {
//     return (
//      <div classNane={containerStyles}>
//         {socials.map((item, index) => {
//             return (
//                 <Link key={index} href={item.path} classNane={iconStyles}>
//                     {item.icon}
//                 </Link>
//             );
//         })}
//         </div>
//     );
// };

// // export default socials;