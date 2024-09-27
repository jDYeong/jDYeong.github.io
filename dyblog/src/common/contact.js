import React, { useEffect } from 'react';
import { ReactComponent as IconPhone } from "../assets/images/icons/icon-phone.svg";
import { ReactComponent as IconMail } from "../assets/images/icons/icon-mail.svg";

const Contact = () => {
    
    return (
        <div className='contact_container'>
            <dl>
                <dt>Contact</dt>
                <dd>
                    <ul>
                        <li>
                            +82&#41; 01-9496-2811
                            <IconPhone />
                        </li>
                        <li>
                            dayeong310@daum.net
                            <IconMail />
                        </li>
                    </ul>
                </dd>
            </dl>
            <span></span>
        </div>
    );
};

export default Contact;