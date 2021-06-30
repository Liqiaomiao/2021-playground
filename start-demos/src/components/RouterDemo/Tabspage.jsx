import {useCallback} from "react";
import {useHistory,useParams} from 'react-router-dom'
import { useSearchParam } from "react-use";
import data from '../NiceMoal/data'
import {Tabs, Table} from 'antd'
const {TabPane} = Tabs



export default () => {
    const { activeTab = "users" } = useParams();
    const history = useHistory()
    const page = parseInt(useSearchParam('page'),10) || 1
    const handleChangeTab = useCallback(
        (tab) => history.push(`/TabsPage/${tab}`),
        [history],
    );
    const pagination = {
        pageSize: 3,
        current: page,
        onChange: (p) => {
            history.push(`/TabsPage/${activeTab}?page=${p}`);
        },
    };
    return (
        <>
            <h1>Tabs Page</h1>
            <Tabs defaultActiveKey='Users' onChange={handleChangeTab}>
                <TabPane tab='Users' key='users'>
                    <Table
                        dataSource={data}
                        columns={[
                            { dataIndex: "name", title: "User Name" },
                            { dataIndex: "city", title: "City" },
                        ]}
                        pagination={pagination}
                    />
                </TabPane>
                <TabPane tab='Jobs' key='jobs'>
                    <Table
                        dataSource={data}
                        columns={[
                            { dataIndex: "job", title: "Job Title" }
                        ]}
                        pagination={pagination}
                    />
                </TabPane>
            </Tabs>
        </>
    )
}
