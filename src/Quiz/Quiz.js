import React, {Component} from 'react'

class Quiz extends Component {
    constructor(){
        super()
        
        this.state = {
            playerScore : 0,
            questions: [
                {
        
                  title: "What animal barks?",
                  possibleAnswers: ["Dog", "Cat"],
                  rightAnswer: "Dog",
                  playerChoice: null
                },
                {
                  title: "What animal is more closely related to a tiger?",
                  possibleAnswers: ["Dog", "Cat"],
                  rightAnswer: "Cat",
                  playerChoice: null
                }]
        }
    }

    updatePlayerScore() {
        const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length

        this.setState({playerScore})
        console.log("PlayerScore: ", this.state.playerScore)
    }

    displayQuestion(index) {
        const question = this.state.questions[index]

        return(
            <div>
                <p>{question.title}</p>
                <br />
                <button 
                onClick={() => this.answerQuestion(index, question.possibleAnswers[0])}>
                    {question.possibleAnswers[0]}</button>


                <button
                onClick={() => this.answerQuestion(index, question.possibleAnswers[1])}>
                    {question.possibleAnswers[1]}</button>
                    
                <br />
                <p>our answer is correct</p>
                <p>our answer is incorrect</p>
            </div>
        )
    }

    answerQuestion(index, choice)
    {   
        console.log(index + ", " + choice)
        const answeredQuestion = this.state.questions[index]
        answeredQuestion.playerChoice = choice

        const allQuestions = this.state.questions
        allQuestions[index] = answeredQuestion

        this.setState({ questions : allQuestions}, () => this.updatePlayerScore())
        



    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Quiz!</h1>
                {this.displayQuestion(0)}
                {this.displayQuestion(1)}
            </div>
        )
    }
}


export default Quiz;

