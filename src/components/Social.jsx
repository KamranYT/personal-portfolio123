import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
 
const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
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