import { Table } from "antd"
import dayjs from "dayjs";
import { numberWithComma } from '../../hooks/common'

const MobileTable = ({ filterByDate }) => {
    const columns = [
        {
            title: <div style={{ textAlign: "center" }}>Date</div>,
            dataIndex: "date",
            key: "date",
            align: "center",
            sorter: (a, b) => a.date - b.date,
            render: (text, record, index) => {
                return <div>{dayjs(record?.date).format('DD MMM YYYY')}</div>;
            },
        },
        {
            title: <div style={{ textAlign: "center" }}>Cases</div>,
            dataIndex: "cases",
            key: "cases",
            align: "center",
            sorter: (a, b) => a.cases - b.cases,
            render: (text, record, index) => {
                return <div>{numberWithComma(record?.cases)}</div>;
            },
        },
        {
            title: <div style={{ textAlign: "center" }}>Deaths</div>,
            dataIndex: "deaths",
            key: "deaths",
            align: "center",
            sorter: (a, b) => a.deaths - b.deaths,
            render: (text, record, index) => {
                return <div>{numberWithComma(record?.deaths)}</div>;
            },
        },
        {
            title: <div style={{ textAlign: "center" }}>Recovered</div>,
            dataIndex: "recovered",
            key: "recovered",
            align: "center",
            sorter: (a, b) => a.recovered - b.recovered,
            render: (text, record, index) => {
                return <div>{numberWithComma(record?.recovered)}</div>;
            },
        },
    ]
    return (
        <>
            <div className='w-full'>
                <Table
                    dataSource={filterByDate}
                    columns={columns}
                    pagination={{
                        showSizeChanger: true,
                        pageSizeOptions: ["10", "20", "50", "100"],
                    }}
                />
            </div>
        </>
    )
}

export default MobileTable