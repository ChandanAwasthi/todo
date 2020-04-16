const list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }


  },false);

  function clickEdit(id,valueDate,valueDone,valuePrio){

    document.getElementById('edit').style.display='block'
    $('#modifyDate').attr('value', valueDate);
    $("#select1").val(valuePrio);
    $("#select2").val(valueDone);
    let NewMDue = $('#modifyDate') 
          let Mpriority = $('#select1') 
          let Mstatus = $('#select2') 
          $( "#formedit" ).submit(function() {  
           
           let  NewDueV=NewMDue.val()
           let  priorityV=Mpriority.val()
           let  statusV=Mstatus.val()
         let done
           if(statusV==='Complete')
          { done=true}
          else{
             done=false
          }
          console.log(done)
          const resp =  fetch('/todo/'+id,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              done:done,
              priority: priorityV,
              due: NewDueV,
              })
          }
          )
    
        
          jQuery(document).ready(function($) {
            alert("Task Details Modified !");
          });
          location.reload(true);
        })
    
    }
    
    function addNote(id){
      let Note=$('#addnote'+id).val();
      
      
      $.post(
        '/todo/notes/'+id,
        {note: Note,
        main_id: id
        },
        function (data) {console.log("hi")} ) 
        jQuery(document).ready(function($) {
          alert("Note Added Successfully !");
        });
        location.reload(true);
        
    }

    function SortByDateAesc(){
      let todoList = $('#List')
      todoList.empty()
      $.get("/todo/",  function(data){
        data.sort(function(a, b){
          let conv_a=Date.parse(a.due)
          let conv_b=Date.parse(b.due)
          return conv_a - conv_b
        
        })
       
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
        
      })
    }

    function SortByDateDesc(){
      let todoList = $('#List')
      todoList.empty()
      $.get("/todo/",  function(data){
        data.sort(function(a, b){
          let conv_a=Date.parse(a.due)
          let conv_b=Date.parse(b.due)
          return conv_b - conv_a
        
        })
        let i=0
        for (todo of data) {
           
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
      })
    }


    function SortByStatus(){
      let todoList = $('#List')
      todoList.empty()
      $.get("/todo/",  function(data){
        data.sort(function(a, b){
         let conv_a=a.done
          let conv_b=b.done
          
          return conv_a - conv_b
        
        })
        console.log(data)
        let i=0
        for (todo of data) {
           
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
      })
    }


    function SortByPriority(){
      let todoList = $('#List')
      todoList.empty()
      $.get("/todo/",  function(data){
        data.sort(function(a, b){
          let x=a.priority
          let y=b.priority
          var conv_a
          let conv_b

          if(x==='High')
          {
            conv_a=1
          }
          else if(x==='Medium'){conv_a=2}
          else{
            conv_a=3
          }
          if(y==='High')
          {
            conv_b=1
          }
          else if(y==='Medium'){conv_b=2}
          else{
            conv_b=3
          }
          
          return   conv_a - conv_b
        
        })
        
        let i=0
        for (todo of data) {
           
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
      })
    }