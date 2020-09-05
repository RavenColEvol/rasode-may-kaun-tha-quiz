import React, {  useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Card, Radio, Button, Statistic } from 'antd'

import getQuestions from '../utils/getQuestions'
import globalContext from '../utils/globalContext'

const { Countdown } = Statistic;

let timeTook = [0, 0, 0, 0, 0];

export default withRouter((props) => {
    
    const questions = getQuestions();
    const startTime = Date.now()
    const deadline = Date.now() + 1000 * 60 * 10

    const [form] = Form.useForm()
    const { setQuestions, setAnswers, setTime, time } = useContext(globalContext);
    
    const handleSubmit = (values) => {
        setTime({
            ...time,
            questions : timeTook,
            totalTime : Math.round((Date.now() - startTime) / 1000)
        })
        setQuestions(questions);
        setAnswers(values);
        props.history.push('/result')
    }

    const handleChange = (e, id) => {
        timeTook[id] = Math.round((Date.now() - startTime) / 1000)
    } 

    const Question = ({ question, id }) => {
        return (
            <Form.Item name={`Question ${id + 1}`}>
                <Card>
                    <p>{`Q${id + 1} ${question['statement']}`}</p>
                    <Radio.Group onChange={(e) => handleChange(e, id)}>
                        {question['options'].map(option => <Radio className='block' key={option} value={option}>{option}</Radio>)}
                    </Radio.Group>
                </Card>
            </Form.Item>
        )
    }

    const Timer = () => {
        return (
            <Countdown className='timer' format='mm:ss' value={deadline} onFinish={form.submit}/>
        ) ;
    }

    return (
        <React.Fragment>
            <Timer />
            <Form form={form} onFinish={handleSubmit}>
                {questions.map( (question, key) => <Question key={key} id={key} question={question} />)}
                <Card>
                    <Button size='large' type='primary' htmlType='submit'>
                        Submit Answers
                    </Button>
                </Card>
            </Form>
        </React.Fragment>
    )
})
