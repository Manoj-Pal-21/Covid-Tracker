import React, { useState, useEffect } from 'react';
import "./Covid.css";

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {

        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            // console.log(res);
            const data = await res.json();
            // console.log(data.statewise[0]);
            setData(data.statewise[0])
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div>
            <section>

                <h1> 🔴 LIVE </h1>
                <h2> COVID-19 CORONAVIRUS TRACKER </h2>

                <ul>
                    <li className='card'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span> OUR </span> STATE CODE </p>
                                <p className='card__total card__small'>{data.statecode}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className='card'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span> OUR </span> RECOVERED </p>
                                <p className='card__total card__small'>{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className='card'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span> OUR </span> CONFIRMED </p>
                                <p className='card__total card__small'>{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className='card'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span> OUR </span> ACTIVE </p>
                                <p className='card__total card__small'>{data.active}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className='card'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span> OUR </span> DEATHS </p>
                                <p className='card__total card__small'>{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className='card'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span> OUR </span> LAST UPDATED TIME </p>
                                <p className='card__total card__small'>{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>

            </section>
        </div>
    )
}

export default Covid;