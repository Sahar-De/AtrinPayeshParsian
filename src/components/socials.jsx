import Link from "next/link"
import {FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const socialArr=[
    {icon:<FaLinkedin/>,path:""},
    {icon:<FaWhatsapp/>,path:""},
    {icon:<FaTelegram/>,path:""},
];

const Socials = ({containerStyle,iconStyle}) => {
  return (
    <div className={containerStyle}>
        {socialArr.map((item,index)=>{
            return(<Link className={iconStyle} href={item.path} key={index}>{item.icon}</Link>)
        })}
    </div>
  )
}

export default Socials