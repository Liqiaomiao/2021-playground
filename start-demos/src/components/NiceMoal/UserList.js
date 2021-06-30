import {useState, useMemo} from "react";
import _ from 'lodash'
import {Button, Table} from "antd";
import {EditOutlined} from '@ant-design/icons'
import data from './data'
import {useNiceModal} from "./NiceModal";

export default () => {
    const {show: showModal} = useNiceModal('user-info-modal')
    const [users, setUsers] = useState(data.slice(0, 5))
    const columns = useMemo(() => {
        return [
            {
                title: 'Name',
                dataIndex:'name'
            },
            {
                title: 'Job Title',
                dataIndex: 'job'
            },
            {
                title: 'Actions',
                render(value,user){
                    return (
                        <Button
                            type='link'
                            icon={<EditOutlined/>}
                            onClick={()=>{
                                showModal({user}).then((newUser)=>{
                                    console.log('resolve workingn',newUser);
                                    setUsers((users) => {
                                        // Modify users immutablly
                                        const byId = _.keyBy(users, "id");
                                        byId[newUser.id] = newUser;
                                        return _.values(byId);
                                    });
                                })
                            }}
                        />
                    )
                }
            }
        ]
    },[showModal])
    return (
        <Table
            size='small'
            pagination={false}
            columns={columns}
            dataSource={users}
        />
    )
}
