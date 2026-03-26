// <!-- They give you this HTML -->
// <div class="tabs">
//   <button class="tab active" data-target="panel1">Tab 1</button>
//   <button class="tab" data-target="panel2">Tab 2</button>
//   <button class="tab" data-target="panel3">Tab 3</button>
// </div>
// <div id="panel1" class="panel active">Content 1</div>
// <div id="panel2" class="panel">Content 2</div>
// <div id="panel3" class="panel">Content 3</div>

// CSS they provide or you add:
// .panel { display: none; }
// .panel.active { display: block; }
// .tab.active { background: blue; color: white; }


const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
tabs.forEach((tab)=>{
  
    tab.addEventListener('click',()=>{
        
        tabs.forEach((tabs)=>{
            tabs.classList.remove('active');
        })
        tab.classList.add('active')
        panels.forEach((panel)=>{
            panel.classList.remove('active')
        })
        const target = tab.dataset.target
        document.getElementById(target).classList.add('active');
    })

})