import {useHash} from "react-use";
import _ from 'lodash'
import './index.less'
const Page1 = () => 'page1'
const Page2 = () => 'page2'
const Page3 = () => 'page3'
const Page4 = () => 'page4'
const MyRouter = ({children}) => {
    const routes = _.keyBy(children.map(c=>c.props),'path')
    const [hash] = useHash()
    const Route = routes[hash.replace('#','')]?.component
    return Route?<Route/>:'Not found.'

}
const Route = ()=>null
export default () => {
    return (
        <>
            <div className='my-router'>
                <div className='my-router-sider'>
                    <a href="#page1">page 1</a>
                    <a href="#page2">page 2</a>
                    <a href="#page3">page 3</a>
                    <a href="#page4">page 4</a>
                </div>
                <div className='my-router-container'>
                    <MyRouter>
                        <Route path='page1' component={Page1}></Route>
                        <Route path='page2' component={Page2}></Route>
                        <Route path='page3' component={Page3}></Route>
                        <Route path='page4' component={Page4}></Route>
                    </MyRouter>
                </div>

            </div>
        </>
    )
}
