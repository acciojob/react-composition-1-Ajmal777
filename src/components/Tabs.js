import React , {useState} from "react";

const Tabs = () =>{
    const [currentTab, setCurrentTab] = useState('');

    return (
        <div className="tabs">
            <li onClick={()=>setCurrentTab('Tab 1')}>Tab 1</li>
            <li onClick={()=>setCurrentTab('Tab 2')}>Tab 2</li>
            <li onClick={()=>setCurrentTab('Tab 3')}>Tab 3</li>
            {currentTab && 
                <p>This is the content for {currentTab}.</p>
            }
        </div>
    )
}

export default Tabs;