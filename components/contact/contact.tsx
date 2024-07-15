import React from "react";
import { LabelsProps ,UserProps } from "../data/interfaces";
import { MyUsers } from "../data/users";
import UserFullDatas from "../helper/users-comp";

const mapDatas = MyUsers.map((data: UserProps, index) =>
    <p key={`el-${index}`}>{data.name}</p>
);

const Contact = ({overallMessage} : LabelsProps) => {
  return(
    <>
        <h1>{overallMessage}</h1>
        
        <ul className="userList">
            {MyUsers.map((data: UserProps, index) =>
                <li key={`el-${index}`}>
                    <UserFullDatas
                    name = {data.name} 
                    last_name = {data.last_name}
                    city = {data.city}
                    country = {data.country}
                    books = {data.books}
                    />  
                </li>
            )}
        </ul>

        {mapDatas}

    </>
)
}

export default Contact;