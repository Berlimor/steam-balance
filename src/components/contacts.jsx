import React from "react";

import { RiTelegramLine } from "react-icons/ri"
import { SlSocialVkontakte } from "react-icons/sl"
import { GrMail } from "react-icons/gr"

export default function Contacts() {
    return(
        <>
            <nav className="contacts">
                <a href=""><RiTelegramLine /></a>
                <a href=""><SlSocialVkontakte /></a>
                <a href=""><GrMail /></a>
            </nav>
        </>
    )
}