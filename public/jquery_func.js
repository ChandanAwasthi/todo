$( function (){
    var today = new Date();
    var nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    var dd = nextDay.getDate();
    var mm = nextDay.getMonth()+1; 
    var yyyy = nextDay.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} nextDay = yyyy+'-'+mm+'-'+dd;
    
    $('#NewDue').attr('value', nextDay);
    
    let todoList = $('#List')
    
    $.get("/todo/",  function(data){
        
          
         
      todoList.empty()
    getter()
    function getter(){
      let i=0
      for (todo of data) {
         var m=""
          $.get("/todo/notes/"+todo.id,  function(data1){
           
            var x=""
            for(notes of data1){x=x.concat("<li><textarea readonly>"+notes.note+"</textarea></li>")}
            a(x)
            
          });
        
       function a(x){
          
           
          let status="Complete"
          if(!data[i].done)
          {status="Incomplete"}
             todoList.append("<li>"+ data[i].task 
              +"<ul  > <table><tr><td>Description</td><td><textarea readonly>"+ 
              data[i].description +"</textarea></td></tr><tr><td>Due Date: </td><td>"
              +data[i].due+"</td></tr><tr><td>Priority</td><td>"+data[i].priority+
              "</td></tr><tr><td>Status</td><td>"+status+
              "</td></tr></table><button  onclick=clickEdit('"+data[i].id+"','"
              +data[i].due+"','"+ status+"','"+data[i].priority+
              "') class='btn btn-link' >Edit Details</button><br><span>Notes:</span>"+x+"<li><input id='addnote"+data[i].id+"' type=text placeholder='Add New Note'><button id='addNotes' class='btn btn-success' onclick=addNote('"+data[i].id+"')>Add Note</button></li></ul></li>")
              i++      }   
               
      }
    }
      
      
    });
    
    
    
    
    let NewTask = $('#NewTask') 
    let NewDescription = $('#NewDescription') 
    let NewDue = $('#NewDue') 
    let priority = $('#priority') 
    $( "#formadd" ).submit(function() {  
     let NewTaskV=NewTask.val()
     let   NewDescriptionV=NewDescription.val()
     if(NewDescriptionV==="")
     {NewDescriptionV="null"}
     let  NewDueV=NewDue.val()
     let  priorityV=priority.val()
    
     let done=false
     
    
      $.post(
      '/todo/',
      {task: NewTaskV,
      done:done,
      priority: priorityV,
      due: NewDueV,
      description: NewDescriptionV,
      },
      function (data) {}
    )
    location.reload(true);
    
    
    })
    
    
    
    });