import React from "react";
type AccordionPropsType={
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean)=>void
}
type AccordionTitlePropsType={
    title: string
    onClick: (collapsed: boolean)=>void
    collapsed: boolean
}
export const Accordion = (props:AccordionPropsType) => {
        return (
            <div>
                <AccordionTitle
                    title={props.title}
                    onClick={props.onClick}
                    collapsed={props.collapsed}
                />
                { !props.collapsed && <AccordionBody/>}
            </div>
        )

}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <div>
            <h3
                onClick={()=>{props.onClick(!props.collapsed)}}
            >{props.title}</h3>
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