import './App.css';
import { useState } from 'react';

function App() {
  const [questionscount , setquestioncount] = useState(0)
  const [score , setScore]=useState(0)
  const [result, setResult] = useState(false)
  const questionData = [
    {
      question: "What is the Full Form Of HTML",
      options: [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HyperText Markup Lame",
        "HyperTate Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "What is the full form of CPU?",
      options:[
          "Computer Processing Unit",
          "Computer Proces Unit",
          "Central Processing Unit",
          "Control Processing Unit",
      ],
  
      answer:  "Computer Processing Unit",
  
    },
    {
      question: "what is css",
      options: [
        "color",
        "sturcture",
        "funtion",
        "Cascading Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Who is making the Web standards?",
      options: [
        "microsoft ",
        "google ",
        "mozila",
        "Null"
      ],
      answer: "Microsoft"
    },
  ]

  const move = (e)=>{
    const next = questionscount+1
    if(next<questionData.length){
      setquestioncount(move)    
    }else{
      console.log("Stop");
      setResult(true)
      
    }
    if(e==questionData[questionscount].answer){
      setScore((prev)=>prev+1)
    }
    
  }
  console.log(result);
    return (
     result ? <div>
      resutlt {score}
     </div>
     :
     <div><h1>QUIZ APP</h1>
     <div><h3>QUESTIONS {questionscount+1}/{questionData.length}</h3></div>
     <div>
       {
         questionData[questionscount].question
       }
       </div>
     <div>
       {
         questionData[questionscount].options.map((e,i)=>{
           return <button key={i} onClick={()=>move(e)}>
             {
               e
             }
           </button>
          }) }  
       
       </div>
       <div>
         {
           score
         }
       </div>
     
     
     
     
     </div>
      
    );

}

export default App;