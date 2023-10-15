'use client'
import * as React from 'react';
import dayjs from 'dayjs';
import Card from '../utils/Card';
import Search from '../utils/Search';
import { Divider } from 'antd';
import MobileTable from './MobileTable';
import MobileChart from "./MobileChart"
import LoadingSpinner from '../utils/LoadingSpinner';

const MobileScreen = () => {
    const [reportData, setReportData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [date, setDate] = React.useState(dayjs('2023-03-01').format('MMM YYYY'))
    const [situation, setSituation] = React.useState('cases')

    React.useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const res = await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=10000`)
        const data = await res.json()
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        let dataMap = []
        const date = Object.keys(data.cases)
        const cases = Object.values(data.cases)
        const deaths = Object.values(data.deaths)
        const recovered = Object.values(data.recovered)
        date.forEach((e, i) => {
            dataMap.push({
                date: e,
                dateFormat: dayjs(e).format('DD MMM YYYY'),
                cases: cases[i],
                deaths: deaths[i],
                recovered: recovered[i]
            })
        })
        setReportData(data)
        setIsLoading(false)
        setReportData(dataMap)
    }

    const filterByDate = reportData.filter(item => item.dateFormat.includes(date));

    const handleOnChangeDate = (dateString) => {
        setDate(dayjs(dateString).format('MMM YYYY'))
    }

    const handleChangeSituation = (situation) => {
        setSituation(situation)
    }
    return (
        <>
            {isLoading && <LoadingSpinner />}
            <div className='w-full p-2 md:p-5'>
                <div className='w-full flex items-center justify-center text-[32px] font-bold py-5'>Coronavirus (COVID-19) Dashboard</div>
                <div className='w-full flex gap-5'>

                    <Card
                        title={'Cases'}
                        allCases={filterByDate[filterByDate.length - 1]?.cases}
                        date={date}
                    />
                    <Card
                        title={'Deaths'}
                        allCases={filterByDate[filterByDate.length - 1]?.deaths}
                        date={date}
                    />
                    <Card
                        title={'Recovered'}
                        allCases={filterByDate[filterByDate.length - 1]?.recovered}
                        date={date}
                    />
                </div>
                <Divider />
                <Search
                    handleChangeSituation={handleChangeSituation}
                    handleOnChangeDate={handleOnChangeDate}
                    situation={situation}
                />
                <MobileChart
                    filterByDate={filterByDate}
                    date={date}
                    situation={situation}
                />
                <Divider />
            </div>
            <MobileTable
                filterByDate={filterByDate}
            />
        </>
    )
}

export default MobileScreen