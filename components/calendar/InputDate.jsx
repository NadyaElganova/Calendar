import InputMask from 'react-input-mask';
import {useState} from 'react';
import Calendar from './calendar';

export default function InputDate(){
     const
        [startDate, setStartDate] = useState('__/____'),
        [window, setWindow] = useState(false), 
        [resultData, setResult] = useState('_');

    return <>
        <fieldset>
            <legend>Дата</legend>
            <div style={{display: 'flex'}}>
                <label style={{alignSelf: 'center'}}>Вы выбрали дату: </label>
                <p> {resultData}/{startDate} г.</p>
            </div>
            <InputMask
                mask='99/9999'
                value={startDate}
                onChange={e => {setStartDate(e.target.value)
                }}
            />
            <button onClick={()=>{setWindow(window=>!window)}}>Открыть календарь</button>
            {window && <Calendar date={startDate} 
                        setResult={setResult}/>}
        </fieldset>
    </>
}