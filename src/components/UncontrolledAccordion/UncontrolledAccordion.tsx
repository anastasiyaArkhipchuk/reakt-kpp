import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}
type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}
export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle
                title={props.title}
                onClick={()=>{setCollapsed(!collapsed)}}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    )

}
const AccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
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