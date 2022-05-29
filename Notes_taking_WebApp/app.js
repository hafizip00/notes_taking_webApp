
showNotes();

let addbtn = document.getElementById('add-btn');
// Event listener for btn


addbtn.addEventListener('click' ,function(e){
    let addtext = document.getElementById('add-text')
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj  = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem('notes' , JSON.stringify(notesObj));
    addtext.value = '';
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = ""

    notesObj.forEach(function (element , index){
        html += ` 
        <div class="m-4 flex flex-col justify-start border p-2 w-72">
        <h2 class="text-2xl mt-2"> Note ${index +1}</h2>
        <p class="mt-2">
          ${element}
        </p>
        <div class="mt-2">
          <button class="border bg-blue-500 py-4 w-32" id ="${index}" onclick ="deleteNote(this.id)">Delete Note</button>
        </div>
      </div> `
    })

    let noteEl = document.getElementById('notes');
    if(notes != null){
        noteEl.innerHTML = html;
    }
    else{
        noteEl.innerHTML = `<p> Nothing to show here tap "Add Note" for adding note</p>`
    }
}


function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index , 1);
    localStorage.setItem('notes' , JSON.stringify(notesObj));
    showNotes();

}
