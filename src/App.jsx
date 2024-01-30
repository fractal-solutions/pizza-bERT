import { createSignal } from 'solid-js'
import './App.css'
import * as tf from '@tensorflow/tfjs'
import * as qna from '@tensorflow-models/qna'
import '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
import passage from './passage'

const model = await qna.load()

const question1 = "What is offered at Sandy's Pizzeria?"
const answer1 = await model.findAnswers(question1, passage)
console.log(question1)
console.log(answer1)

const question2 = "What pizza can I get?"
const answer2 = await model.findAnswers(question2, passage)
console.log(question2)
console.log(answer2)

const selection = answer2[0]
const question3 = `What is the cost of ${JSON.stringify(selection['text'])}?`
const answer3 = await model.findAnswers(question3, passage)
console.log(question3)
console.log(answer3)

const question4 = "What is the cost of all Pizza available?"
const answer4 = await model.findAnswers(question4, passage)
console.log(question4)
console.log(answer4)

function App() {
  const [count, setCount] = createSignal(0)
  
  return (
    <>
        <p>GYATT</p>
    </>
  )
}

export default App
