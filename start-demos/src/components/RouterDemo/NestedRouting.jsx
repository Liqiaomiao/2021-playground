import {BrowserRouter,Link,Route} from 'react-router-dom'
import './index.less'
const Page2 = ()=> 'page2'
const Page3 = ()=> 'page3'
const Page1 = ()=>{
    return (
        <div className='nested-routing-container-page1'>
            <div className='nested-routing-container-page1-tab'>
                <Link to='/NestedRouting/page1/General'>General</Link>
                <Link to='/NestedRouting/page1/Profile'>Profile</Link>
                <Link to='/NestedRouting/page1/Setting'>Setting</Link>
            </div>
            <div>
                <Route path='/NestedRouting/page1/General'>General pages</Route>
                <Route path='/NestedRouting/page1/Profile'>Profile pages</Route>
                <Route path='/NestedRouting/page1/Setting'>Setting pages</Route>
            </div>
        </div>
    )
}
export default ()=>{
    return (
        <BrowserRouter>
            <h1>Nested Routing</h1>
            <div className='nested-routing'>
                <div className='nested-routing-sider'>
                    <Link to='/NestedRouting/page1'>Page 1</Link>
                    <Link to='/NestedRouting/page2'>Page 2</Link>
                    <Link to='/NestedRouting/page3'>Page 3</Link>
                </div>
                <div className='nested-routing-container'>
                    <Route path='/NestedRouting/page1'>
                        <Page1/>
                    </Route>
                    <Route path='/NestedRouting/page2'>
                        <Page2/>
                    </Route>
                    <Route path='/NestedRouting/page3'>
                        <Page3/>
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    )
}
