import {Link, Route} from 'react-router-dom'
import {useState} from "react";
import {Button} from "antd";
import './index.less'

export default () => {
    const [isLogined, setIsLogin] = useState(false)
    const Page1 = () => 'Page 1'
    const Page2 = () => 'Page 2'
    const UnauthedPage = () => (
        <span style={{color: "red"}}>Unauthorized, please log in first.</span>
    );
    const routes = isLogined ? [
        {path: '/RouterAuth/page1', components: Page1},
        {path: '/RouterAuth/page2', components: Page2}
    ] : [{path: '/RouterAuth', components: UnauthedPage}]
    return (
        <>
            <h1>Router Auth</h1>
            <Button onClick={()=>setIsLogin((v)=>!v)}>
                {isLogined ? 'Log out' : 'Log In'}
            </Button>
            <div className='my-router'>
                <div className='my-router-sider'>
                    <Link to='/RouterAuth/page1'>page 1</Link>
                    <Link to='/RouterAuth/page2'>page 2</Link>
                </div>
                <div className='my-router-container'>
                    {
                        routes.map((r,index)=>(<Route key={index} path={r.path} component={r.components}></Route>))
                    }
                </div>
            </div>
        </>
    )
}
