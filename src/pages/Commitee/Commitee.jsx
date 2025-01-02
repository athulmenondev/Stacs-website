import React from "react";
import "./Commitee.css";
import Riya from "./assets/RiyaS.jpg";
import Achuth from "./assets/Achuth R Kumar.jpg";
import Abijith from "./assets/Abijith V S.jpg";
import Keerthana from "./assets/Keerthana.jpg";
import NandanaKrishnadas from "./assets/Nandana Krishnadas.jpg";
import DrSruthy from "./assets/Dr.Sruthy Manmadhan.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Committee() {
    // Sample data representing team members
    const teamMembers = [
        {
            id: 1,
            name: "Dr.Sruthy Manmadhan",
            role: "Faculty In-Charge",
            image: DrSruthy,
            socials: {
                platform: "link",
            },
        },
        {
            id: 2,
            name: "Achuth R Kumar",
            role: "Chariman",
            image: Achuth,
            socials: {
                platform: "link",
            },
        },
        {
            id: 3,
            name: "Riya S",
            role: "Secretary",
            image: Riya,
            socials: {
                platform: "link",
            },
        },
        {
            id: 4,
            name: "Abijith V S",
            role: "Joint Secretary",
            image: Abijith,
            socials: {
                platform: "link",
            },
        },
        {
            id: 5,
            name: "Keerthana",
            role: "Treasurer",
            image: Keerthana,
            socials: {
                platform: "link",
            },
        },
        {
            id: 6,
            name: "Nandana Krishnadas B",
            role: "Join Treasurer",
            image: NandanaKrishnadas,
            socials: {
                platform: "link",
            },
        },

        // Add more team members as needed
    ];

    return (
        <section className="Commitee">
            <div className="title">
                <span> COMMITEE</span>
            </div>
            <div className="rows">
                {teamMembers.map((member) => (
                    <div key={member.id} className="row2">
                        <div className="image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="info">
                            <h2>{member.name}</h2>
                            <p>{member.role}</p>
                        </div>
                        <div className="social">
                            {Object.keys(member.socials).map((social) => {
                                return (
                                    <a href={member.socials[social]}>
                                        <FaLinkedin size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
