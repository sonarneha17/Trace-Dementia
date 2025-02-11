import { Image,View,Text} from "react-native";
import React, { Component } from "react";

export default [

        //Question 1
        {
            question: <Image
                    source={ require('../../../assets/photo_quiz.png')}style={{
                      width: 320,
                      height: 220,
                      marginLeft: 7,
                    }}
                  />,
            question_title:  'There is wild animal on the screen, what is it?',
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: 'Cat',
                   
                },
                {
                    id:"1",
                    options:"B",
                    answer: 'Cheetah',
                },
                {
                    id:"2",
                    options:"C",
                    answer:'Kangaroo',
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:'Hare',
                },
            ],
            correctAnswerIndex: 2,
            score:1
        },
         //Question 2
                {
            question: <Image
                    source={ require('../../../assets/photo_quiz.png')}style={{
                      width: 320,
                      height: 220,
                      marginLeft: 7,
                    }}
                  />,
            question_title:  'There is toy on the screen, what is it?',
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: 'Doll',
                },
                {
                    id:"1",
                    options:"B",
                    answer:'Rocking horse',
                },
                {
                    id:"2",
                    options:"C",
                    answer:'Toy train',
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:'Teddy bear',
                },
            ],
            correctAnswerIndex: 3,
            score:1
        },
         //Question 3
        {
            question: <Image
                    source={ require('../../../assets/photo_quiz.png')}style={{
                      width: 320,
                      height: 220,
                      marginLeft: 7,
                    }}
                  />,
            question_title:  'There is a piece of cleaning equipment on the screen, what is it?',
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: 'Mop',
                },
                {
                    id:"1",
                    options:"B",
                    answer:'Sponge',
                },
                {
                    id:"2",
                    options:"C",
                    answer:'Brush',
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:'Bucket',
                },
            ],
            correctAnswerIndex: 1,
            score:1
        },   
        //Question 4  
        {
            question: <Image
                    source={ require('../../../assets/photo_quiz.png')}style={{
                      width: 320,
                      height: 220,
                      marginLeft: 7,
                    }}
                  />,
            question_title:  'There is a vegetable on the screen, what is it?',
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: 'Carrot',  
                },
                {
                    id:"1",
                    options:"B",
                    answer:'Turnip',
                },
                {
                    id:"2",
                    options:"C",
                    answer:'Potato',
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:'Tomato',
                },
            ],
            correctAnswerIndex: 0,
            score:1
        },
        //Question 5    
        {
            question: <Image
                    source={ require('../../../assets/photo_quiz.png')}style={{
                      width: 320,
                      height: 220,
                      marginLeft: 7,
                    }}
                  />,
            question_title:  'There is a insect on a screen, what it is?',
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: 'Bee',  
                },
                {
                    id:"1",
                    options:"B",
                    answer:'Fly',
                },
                {
                    id:"2",
                    options:"C",
                    answer:'Centipede',
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:'Wasp',
                },
            ],
            correctAnswerIndex: 1,
            score:1
        }, 
        
            
        //Question 6
        {
            question: <Image
                    source={ require('../../../assets/photo_quiz.png')}style={{
                      width: 320,
                      height: 220,
                      marginLeft: 7,
                    }}
                  />,
            question_title:  'There is a piece of jewellery on screen, what it is?',
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: 'Brooch',  
                },
                {
                    id:"1",
                    options:"B",
                    answer:'Bracelet',
                },
                {
                    id:"2",
                    options:"C",
                    answer:'Ring',
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:'Necklace',
                },
            ],
            correctAnswerIndex: 1,
            score:1
        },

        //Question 7   
        {
            question: <Image
                    source={ require('../../../assets/photo_quiz.png')}style={{
                      width: 320,
                      height: 220,
                      marginLeft: 7,
                    }}
                  />,
            question_title:  'There is a flower on a screen, what it is?',
            options:[
                {
                    id:"0",
                    options:"A",
                    answer: 'Rose',  
                },
                {
                    id:"1",
                    options:"B",
                    answer:'Sunflower',
                },
                {
                    id:"2",
                    options:"C",
                    answer:'Mogara',
                    
                },
                {
                    id:"3",
                    options:"D",
                    answer:'Lily',
                },
            ],
            correctAnswerIndex:0,
            score:1
        },

        
]