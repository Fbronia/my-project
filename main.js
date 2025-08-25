let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let para = document.querySelectorAll('.parag');
let rabil = document.querySelectorAll('.rab');
let drag = null;

btn.onclick = function(){
    if(inp.value != ''){
        para[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
        inp.value = '';
    }
    dragItem()
}

function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = '0.5';
        })
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = '1';
        })

        rabil.forEach(rab=>{
            rab.addEventListener('dragover', function(e){
                e.preventDefault()
            this.style.background = 'green';
            this.style.color = 'white';

        })
         rab.addEventListener('dragleave', function(){
            this.style.background = 'white';
            this.style.color = 'black';

        })
        rab.addEventListener('drop', function(){
            rab.append(drag);

        })
        })

    })
}
