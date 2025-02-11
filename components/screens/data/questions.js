import { Image,View,Text} from "react-native";
import React, { Component } from "react";
const GetSeason = (props) => {
    const month = new Date().getMonth() + 1 + parseInt(props.month);
    if(month==2||month==3||month==4||month==5)
    {
        return (<View><Text>Summer</Text></View>);
    }
    else if(month==6||month==7||month==8||month==9)
    {
        return (<View><Text>Rainy</Text></View>);
    }
    else 
        return (<View><Text>Winter</Text></View>);
    }
;

  const GetMonthOfYear =(props) =>{

    const weekday = ["January","February","March","April","May","June","July","August", "September", "October","November","December"];
    const d = new Date();
    let month = weekday[d.getMonth() + parseInt(props.month)] ;
    return (<View><Text>{month}</Text></View>);
};


const GetDayOfWeek =(props) =>{

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = (weekday[d.getDay() + parseInt(props.day)]) ;
    return (<View><Text>{day}</Text></View>);
};

const GetDayNight = () => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) 
    {
        return 0;
    } 
    else if (curHr < 16) 
    {
        return 1;
    } 
    else if (curHr < 19)
    {
        return 2;
    }
    else 
    {
        return 3
    }

 };


export default [
            //question 1
            {
            question: "What is today's date.",
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: (new Date().getDate())+1,
                   
                },
                {
                    id:"1",
                    options:"B",
                    answer:(new Date().getDate())+2 ,
                },
                {
                    id:"2",
                    options:"C",
                    answer:(new Date().getDate())-1,
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:new Date().getDate().toString(),
                },
            ],
            correctAnswerIndex: 3,
            score:1
        },
        //question 2
        {question: "What is current Month?",
        options:[
            {
                id:"0",
                options:"A",
                answer:<GetMonthOfYear month="-1"/>,
            },
            {
                id:"1",
                options:"B",
                answer:<GetMonthOfYear month="1"/>,
            },
            {
                id:"2",
                options:"C",
                answer:<GetMonthOfYear month="0"/>,
            },
            {
                id:"3",
                options:"D",
                answer:<GetMonthOfYear month="2"/>,
            },
        ],
        correctAnswerIndex: 2,
        score:1
    },
    //question 3
    {
        question: "What is today's Day ?",
        options:[
            {
                id:"0",
                options:"A",
                answer:<GetDayOfWeek day="-2"/>,
            },
            {
                id:"1",
                options:"B",
                answer:<GetDayOfWeek day="0"/>,
            },
            {
                id:"2",
                options:"C",
                answer:"Sunday",
            },
            {
                id:"3",
                options:"D",
                answer:<GetDayOfWeek day = "-1"/>,
            },
        ],
        correctAnswerIndex: 1,
        score:1
    },
    //question 4
    {
        question: "What is current season ?",
        options:[
            {
                id:"0",
                options:"A",
                answer:<GetSeason month ="7"/>,
            },
            {
                id:"1",
                options:"B",
                answer:<GetSeason month ="0"/>,
            },
            {
                id:"2",
                options:"C",
                answer:"Rainy",
            },
            {
                id:"3",
                options:"D",
                answer:"Dont know",
            },
        ],
        correctAnswerIndex: 1,
        score:1
    },
    //question 5
    {
        question: "You lived in _________ country",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Africa",
            },
            {
                id:"1",
                options:"B",
                answer:"United States",
            },
            {
                id:"2",
                options:"C",
                answer:"India",
            },
            {
                id:"3",
                options:"D",
                answer:"Bhutan",
            },
        ],
        correctAnswerIndex: 2,
        score:1
    },
    //question 6
    {
        question: "You lived in _________ state",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Madhya Pradesh",
            },
            {
                id:"1",
                options:"B",
                answer:"Manipur",
            },
            {
                id:"2",
                options:"C",
                answer:"Maharashtra",
            },
            {
                id:"3",
                options:"D",
                answer:"Meghalaya",
            },
        ],
        correctAnswerIndex: 2,
        score:1,
    },

    //question 7
    {
        question: "How many months are there in a year",
        options:[
            {
                id:"0",
                options:"A",
                answer:"10",
            },
            {
                id:"1",
                options:"B",
                answer:"11",
            },
            {
                id:"2",
                options:"C",
                answer:"12",
            },
            {
                id:"3",
                options:"D",
                answer:"13",
            },
        ],
        correctAnswerIndex: 2,
        score:1,
    },

    //question 8
    {
        question: "Is it Morning / Afternoon / Evening / Night",
        options:[
            {
                id:"0",
                options:"A",
                answer:"Morning",
            },
            {
                id:"1",
                options:"B",
                answer:"Afternoon",
            },
            {
                id:"2",
                options:"C",
                answer:"Evening",
            },
            {
                id:"3",
                options:"D",
                answer:"Night",
            },
        ],
        correctAnswerIndex: GetDayNight(),
        score:1,
    },

    //question 9
    {
        question: "How many days are in a week",
        options:[
            {
                id:"0",
                options:"A",
                answer:"5",
            },
            {
                id:"1",
                options:"B",
                answer:"7",
            },
            {
                id:"2",
                options:"C",
                answer:"6",
            },
            {
                id:"3",
                options:"D",
                answer:"8",
            },
        ],
        correctAnswerIndex: 1,
        score:1,
    },
    

    //question 10
    {
        question: "Guess the correct sequence for 1 to 7 digits",
        options:[
            {
                id:"0",
                options:"A",
                answer:"1 2 3 4 5 7 6",
            },
            {
                id:"1",
                options:"B",
                answer:"1 3 2 4 5 7 6 7",
            },
            {
                id:"2",
                options:"C",
                answer:"1 2 3 4 5 6 7",
            },
            {
                id:"3",
                options:"D",
                answer:"1 2 4 3 5 6 7",
            },
        ],
        correctAnswerIndex: 2,
        score:1,
    },

]