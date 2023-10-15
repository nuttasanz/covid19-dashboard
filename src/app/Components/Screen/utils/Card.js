const Card = ({ allCases, date, title }) => {
    return (
        <>
            <div className="card w-full hidden md:block p-5">
                <div className="text-[32px] font-bold text-[#7FB5FF]">{title}</div>
                {
                    allCases > 1000000
                        ?
                        <div className="font-bold text-[24px]">{((allCases) / 1000000).toFixed(2)}M</div>
                        :
                        <div className="font-bold text-[24px]">{allCases}</div>
                }
                <div className="text-[16px]">{'In ' + date}</div>
            </div>
            <div className="card max-w-full w-[500px] block md:hidden p-2">
                <div className="text-[18px] leading-[25.5px] font-bold text-[#7FB5FF]">{title}</div>
                {
                    allCases > 1000000
                        ?
                        <div>{((allCases) / 1000000).toFixed(2)}M</div>
                        :
                        <div>{allCases}</div>
                }
                <div>{'In ' + date}</div>
            </div>
        </>
    )
}

export default Card
