$(document).ready(function(){
  // whatever we write, it only execute after the page is load
  let addTask= $('.submit-btn');
  let newTask = $('.add-task');
  let tasks = $('.tasks');
  //take text from input field and create new li
  addTask.on('click', function(){
    let newElement = `<li class="task">
           <div class="task-check col-1">
             <input type="checkbox">
           </div>
           <div class="task-text col-2">${field.val()}</div>
           <div class="task-remove col-3"></div>
         </li>`;
         tasks.append(newElement);
         field.val('');
  })

  // Remove the task
  let removeBtn = $('.task-remove');
  tasks.on('click','.task-remove', function(){
    $(this).parent().remove();
    // event handler existed when the page loaded. when click on spefici btn
  })

  let checkBox = $('.task-check input');
  tasks.on('change','.text-check input', function(){
    $(this).parent().nect().toggleClass('.check');

  })
  //sortable jquery ui
  $('#tasks.list').sortable();
})
