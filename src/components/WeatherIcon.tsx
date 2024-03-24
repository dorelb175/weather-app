const WeatherIcon = ({ iconNumber }: { iconNumber: number }) => {
    const iconIdentifier = iconNumber < 10 ? `0${iconNumber}` : iconNumber;
    return (
    <img 
        src={`https://developer.accuweather.com/sites/default/files/${iconIdentifier}-s.png`}
        alt="new"
    />
)}

export default WeatherIcon;
