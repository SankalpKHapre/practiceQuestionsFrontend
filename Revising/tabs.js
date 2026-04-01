{/* <div class="tabs">
  <button class="tab" data-target="panel1">Tab 1</button>
  <button class="tab" data-target="panel2">Tab 2</button>
  <button class="tab" data-target="panel3">Tab 3</button>
</div>
<div id="panel1" class="panel">Content 1</div>
<div id="panel2" class="panel">Content 2</div>
<div id="panel3" class="panel">Content 3</div> */}



const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((items)=>items.classList.remove('active'))
        panels.forEach((items)=>items.classList.remove('active'))
        tab.classList.add('active')
        document.getElementById(tab.target.dataset).classList.add('active')
        

    })
})

// TODO: clicking a tab should:
// 1. highlight the clicked tab
// 2. show its matching panel
// 3. hide all other panels




// .panel { display: none; }
// .panel.active { display: block; }
// .tab.active { background: dodgerblue; color: white; }