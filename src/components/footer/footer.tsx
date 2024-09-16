import React from "react";
import { LabelsProps } from "../data/interfaces";

export const Footer = ({overallMessage} : LabelsProps) =>{
    return(
        <p className="footer">{overallMessage}</p>
    )
}

export const SubFooter = ({copyrightMessage} : LabelsProps) => {
    return (
        <p className="footer">{copyrightMessage}</p>
    )
}