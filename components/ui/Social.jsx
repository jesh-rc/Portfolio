import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/jesh-rc"},
    {icon: <FaLinkedin />, path: "http://linkedin.com/in/jeshurun-constantine"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
                })}
        </div>
    )
}

export default Social;