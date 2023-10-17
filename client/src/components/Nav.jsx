import { Link, } from 'react-router-dom'
import { ContextHolder } from '@frontegg/react'

export default function Nav() {
    const linkClasses = "text-white sm:text-lg lg:text-3xl hover:text-[#85929e] transition duration-[3000]";

    // a function to make sure everything appears as a title
    // no matter how it's written in the links array's objects
    const toTitle = (t) =>{
        var title = '';

        for (var i = 0; i < t.length; i++) {
            if (i === 0 || t[i - 1] === ' ') title += t[i].toUpperCase();
            else title += t[i].toLowerCase();
        }

        return title;
    }

    // a pretty self explained function
    const logout = () => {
        const baseUrl = ContextHolder.getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
      };

    // easier to map through => Render one link depending on the object
    const links = [

        {
            to: "/",
            ref: "hOmE"
        },
        {
            to: "/coin-value",
            ref: "cOIN vALUE"
        },
        {
            to: "/profile",
            ref: "ProfIle"
        },
        {
            to: "/abOut",
            ref: "about"
        },
        {
            to: "/trade",
            ref: "trAde"
        }
    ]
    
    // making sure the `to` attribute is always lowercase so no crashes will occure 
    links.forEach(link => link.to = link.to.toLowerCase())

    return (
        <div className="flex flex-row gap-7">
            {links.map(link => (
                // Making sure each link is unique and allowing a redirect immdediatly after refresh thanks to localStorage
                <Link 
                    to ={link.to}
                    key = {link.ref + link.to} 
                    className={linkClasses} 
                    onClick={() => localStorage.setItem('currentRoute', link.to)}>
                    {toTitle(link.ref)}
                </Link>
            ))}
            <button onClick={logout} className={linkClasses}>{toTitle('log out')}</button>
        </div>
  )
}
