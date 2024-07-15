import React from "react";
import { UserProps } from "../data/interfaces";

export default function UserFullDatas(props:UserProps) {
    return (
        <>
            <h2>{props.name}, {props.last_name}</h2>
            <p>{props.city}</p>
            <p>{props.country}</p>
            <p>{props.books}</p>
        </>
    )   
}