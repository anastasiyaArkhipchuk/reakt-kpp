import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
type PageTitlePropsType = {
    title: string
}
function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <Accordion title={'Menu'}
                       collapsed={collapsedValue}
                       onClick={setCollapsedValue}
            />
            <UncontrolledRating/>
           <UncontrolledAccordion title={'Homework'}/>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
            <UncontrolledOnOff
                onChange={setSwitchOn}
            />
            {switchOn.toString()}
            {/*<OnOff*/}
            {/*    on={switchOn}*/}
            {/*    onChange={setSwitchOn}*/}
            {/*/>*/}
        </div>
    )
}
 const PageTitle = (props:PageTitlePropsType) =>{
    return (
       <h1>{props.title}</h1>
    )
 }

export default App;
