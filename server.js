const express =  require('express');
const app = express();

let todos = [
    {title: 'Learn Node JS', description: 'Quite a good', dueDate: '2020-04-05', priority: 'medium', notes = ['This is first note', 'Second note']}
]
//, status: 'Incomplete'
app.get('/todos', (request, response) => {
    response.send(todos);
});

app.get('/todos/:id', (request,response) => {
    if(isNaN(parseInt(request.params.id))){
        console.log('Invalid');
        response.status(404).send({
            error: 'Invalid todo id'
     })
     return
    };
    response.send('');

});
app.listen(5432, () => console.log('listening at 5432'));
//app.use(express.static('public'));

