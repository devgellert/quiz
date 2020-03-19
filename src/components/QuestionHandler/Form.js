import React, { useState } from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from '../includes';
import RightAnswer from './RightAnswer';
import uuid from 'react-uuid'
import Errors from './Errors';


const Form = ({addQuestion, questions}) => {
    let [question, setQuestion] = useState('');
    let [answers, setAnswers] = useState(['', '', '', '']);
    let [rightId, setRightId] = useState(1);
    let [errors, setErrors] = useState([])
    
    function handleRightQuestion(e, option){
        e.preventDefault();
        if(option === 'increase' && rightId < 4) {
            setRightId(rightId + 1);
        }else if(option === 'decrease' && rightId > 1) {
            setRightId(rightId - 1);
        }
    }
    function handleAnswers (e, id) {
        let newAnswers = answers;
        newAnswers[id-1] = e.target.value;
        setAnswers(newAnswers);
    }
    function saveQuestion(e) {
        e.preventDefault();
        let newErrors = [];
        if(question === '' || answers.filter(answer => answer === '').length > 0) {
            newErrors.push('All the fields should be filled');
        }
        if(newErrors.length === 0) {
            addQuestion({
                rightId,
                question,
                answers,
                id: uuid()
            })
        }else {
            setErrors(newErrors);
        }
    }

    return (
        <form>
            <h2>Post a question</h2>
            
            <label >New question:</label>
            <br/>
            <input
                name="question"
                placeholder="New question.." 
                onChange={ e => {
                    setQuestion(e.target.value);
                }}
            />
            {[1,2,3,4].map(i => (
                <Input
                    handleAnswers={handleAnswers}
                    key={i}
                    id={i}
                    rightId={rightId}
                />
            ))}
            <RightAnswer
                handleRightQuestion={handleRightQuestion}
                id={rightId}
            />
            <button 
                id='submit'
                onClick={e => saveQuestion(e)}
            > Save </button>
            <Errors question={question} answers={answers} errors={errors}/>
        </form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);