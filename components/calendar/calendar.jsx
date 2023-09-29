import { useState } from "react";
import style from './calendar.module.css';

export default function Calendar({date, setResult}){

    const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const [monthStr, yearStr] = date.split('/'); 
    const month = Number(monthStr);
    const year = Number(yearStr);
    const firstDayOfMonth = new Date(year, month-1, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    function DaysInMonth () { 
        return new Date(year, month, 0).getDate();
    }
    //кол-во дней в месяце
    const countDaysInMonth = DaysInMonth();
    //кол-во дней пустых
    const startShift = dayOfWeek == 0 ? 6 : dayOfWeek-1;

    const checkDate = (date) =>{
        console.log(date+"calendar");
        setResult(date.id);
        date.className=style.redDay;
    };

    function MonthRow({startShift, days}) 
    { // startShift - пустых дней в начале, days - дней в месяце  
        const result = [];
        for (let m = 1 - startShift; m <= days; m += 7) 
        {    
            result.push(<WeekRow key={m} monday={m} days={days}
            />);        
            console.log(result)
        }

        return <>{result}</>;
    }
    
    function WeekRow({monday, days}) 
    {  
        const rows = [];
        
        for (let i = monday; i < monday + 7; i++) {
        let cell = String(i); 
        if (i < 1) cell = '<';    
        if (i > days) cell = '>';       
        rows.push(
              <td 
                key={i} 
                id={i} 
                onClick={(e)=>{
                    if(e.target.id > 0 && e.target.id <= days){
                        checkDate(e.target)}
                    }}
              >{' ' + cell.padStart(2, '_')}</td>);
        }
        
        return <tr>{rows} </tr>
    }
    
    
    return <>
        <table>
            <thead>
                <tr>
                {week.map((day)=>
                    (<th key={day}>{day}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                <MonthRow startShift={startShift} 
                                days={countDaysInMonth}/>
            </tbody>
        </table>
    </>
}