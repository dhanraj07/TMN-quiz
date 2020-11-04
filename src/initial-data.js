const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Question 1', isCorrect: true, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'},
        'task-2': { id: 'task-2', content: 'Question 2', isCorrect: true, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'},
        'task-3': { id: 'task-3', content: 'Question 3', isCorrect: false, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'},
        'task-4': { id: 'task-4', content: 'Question 4', isCorrect: false, correctResponse: 'correct response!', incorrectResponse: 'incorrect response!'}
    },
    columns: {
        'question1' : {
            id: 'question1',
            type: 'question',
            title: 'Question',
            taskIds: ['task-1'],
        },
        'question2' : {
            id: 'question2',
            type: 'question',
            title: 'Question',
            taskIds: ['task-2'],
        },
        'question3' : {
            id: 'question3',
            type: 'question',
            title: 'Question',
            taskIds: ['task-3'],
        },
        'question4' : {
            id: 'question4',
            type: 'question',
            title: 'Question',
            taskIds: ['task-4'],
        },
        'answer1' : {
            id: 'answer1',
            type: 'answer',
            taskIds: [],
        },
        'answer2' : {
            id: 'answer2',
            type: 'answer',
            taskIds: [],
        },
        'answer3' : {
            id: 'answer3',
            type: 'answer',
            taskIds: [],
        },
        'answer4' : {
            id: 'answer4',
            type: 'answer',
            taskIds: [],
        },
    },
    columnOrder: ['question1', 'question2', 'question3', 'question4', 'answer1', 'answer2', 'answer3', 'answer4'],
};

export default initialData;