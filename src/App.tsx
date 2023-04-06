import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
type PageTitlePropsType = {
    title: string
}
function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3} />
            <Accordion title={'Menu'}
                       collapsed={true}
            />
            <Accordion title={'Home task'}
                       collapsed={false}
            />
            Article 2
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    )
}
 const PageTitle = (props:PageTitlePropsType) =>{
    return (
       <h1>{props.title}</h1>
    )
 }

export default App;
