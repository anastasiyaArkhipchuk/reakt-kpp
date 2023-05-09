import React, {Dispatch, SetStateAction, useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}
type UncontrolledAccordionTitlePropsType = {
    title: string
}
export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle
                title={props.title}
            />
            <button onClick={()=>{setCollapsed(false)}}>+</button>
            <button onClick={()=>{setCollapsed(true)}}>-</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}
const AccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
    return (
        <div>
            <h3 >{props.title}</h3>
        </div>
    )
}
const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}