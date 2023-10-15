import dayjs from "dayjs"
import { DatePicker, Select, Form, Row, Col } from "antd"

const Search = ({ handleChangeSituation, situation, handleOnChangeDate }) => {
    return (
        <>
            <div className="my-10">
                <Form layout="vertical">
                    <Row gutter={[20, 20]}>
                        <Col>
                            <Form.Item label='Select Period'>
                                <DatePicker
                                    inputReadOnly={true}
                                    allowClear={false}
                                    size="large"
                                    name="date"
                                    label='test'
                                    format='MMM YYYY'
                                    onChange={handleOnChangeDate}
                                    picker="month"
                                    defaultValue={dayjs('2023-03-01')}
                                    disabledDate={(current) => current && current.isAfter(dayjs('2023-03'), 'month')}
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label='Select Situation'>
                                <Select
                                    size="large"
                                    defaultValue={situation}
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChangeSituation}
                                    options={[
                                        {
                                            value: 'cases',
                                            label: 'Cases',
                                        },
                                        {
                                            value: 'deaths',
                                            label: 'Deaths',
                                        },
                                        {
                                            value: 'recovered',
                                            label: 'Recovered',
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form >
            </div>
        </>
    )
}

export default Search