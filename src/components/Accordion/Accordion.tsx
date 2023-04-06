import React from "react";
type AccordionPropsType={
    title: string
    collapsed: boolean
}
type AccordionTitlePropsType={
    title: string
}
export const Accordion = (props:AccordionPropsType) => {
    if(props.collapsed === true){
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    }else{
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }

}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
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