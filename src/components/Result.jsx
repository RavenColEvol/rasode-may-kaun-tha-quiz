import React, { useContext } from 'react'
import { Result, Button, Card, Radio, Form } from 'antd'
import { Link } from 'react-router-dom'

import globalContext from '../utils/globalContext'

export default () => {
    const { name, questions, answers, time } = useContext(globalContext);
    
    const getScore = () => {
        let count = 0;
        Object.entries(answers).map((question, id) => {
            if(question[1] === questions[id]['correct']) 
                ++count;
        })
        return count;
    }

    const Question = ({question, id}) => {
        
        return (
            <Form.Item hasFeedback validateStatus={`${question[1] === questions[id]['correct'] ? 'success' : 'error'}`}>
                <Card>
                    <p>{`Q${id + 1} ${questions[id]['statement']} (Completed at ${time['questions'][id]}s)`}</p>
                    <Radio.Group disabled defaultValue={question[1]}>
                        {questions[id]['options'].map(option => <Radio className='block' key={option} value={option}>{option}</Radio>)}
                    </Radio.Group>
                </Card>
            </Form.Item>
        )
    }

    return (
        <div>
            <Result
                status="success"
                title={`${getScore()} / 5`}
                subTitle={`Congratulations ${name} you completed in ${time.totalTime}s !`}
                extra={[
                <Button type="primary" key="console">
                    <Link to='/quiz'>Take a Retest</Link>
                    
                </Button>,
                <Button key="buy">
                    <Link to='/'>Exit to Home</Link>
                </Button>,
                ]}
            />
            
            <Form>
                {
                    Object.entries(answers).map((question, id) => <Question key={id} id={id} question={question}/>)
                }
            </Form>
            
        </div>
    )
}
