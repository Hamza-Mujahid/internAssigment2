import React, { useState, useEffect } from 'react'
// import axios, { Axios } from 'axios'
import Axios from 'axios'
import './Ques.css'

function Quiz() {
    const [data, setData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // console.log(data.result)
    const getApiData = async () => {
        await Axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            .then(res => {
                setData(res.data.results);
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const inctOp = data[currentQuestion]?.incorrect_answer;
    // let correctAnswer = data[currentQuestion]?.correct_answer;
    // inctOp?.push(correctAnswer)
    useEffect(() => {
        getApiData();
    }, [])
    // console.log(data[currentQuestion].correct_answer)
    return (
        <div className='main'>
            <div className="question mt-5">
                <h2>{data[currentQuestion]?.question}</h2>
            </div>
            <div className="question-option">
                <div className="d-grid mt-4 col-6 gap-3">
                    {/* {
                        inctOp?.map((e, i) => <button className="btn btn-outline-primary btn-lg rounded-pill"
                            key={i} type="button" value={e}>{e}</button>)
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Quiz