    // You are given a list of countries and a search input.
    //  As the user types, filter the list to show only countries that 
    //  contain the typed string. The search should be debounced (300ms).
    //   If no countries match, show "No results found".
    // <!-- index.html -->
    // <div class="container">
    //   <input type="text" id="search" placeholder="Search countries..." />
    //   <ul id="country-list"></ul>
    // </div>

    // script.js
    const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia',
    'Austria', 'Bangladesh', 'Belgium', 'Brazil', 'Canada',
    'Chile', 'China', 'Colombia', 'Croatia', 'Czech Republic',
    'Denmark', 'Egypt', 'Finland', 'France', 'Germany',
    'Greece', 'Hungary', 'India', 'Indonesia', 'Iran',
    'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan'
    ];

    const search = document.getElementById('search')
    let timer
    const list = document.getElementById('country-list')
    search.addEventListener('input',()=>{
        
        clearTimeout(timer)
        timer=setTimeout(()=>{
            const query = search.value

            const filtered = countries.filter((data)=>data.toLowerCase().includes(query.toLowerCase()))
            if (filtered.length===0) {
                list.innerHTML='<li>No Elements found</li>'
                return;
            }
            list.innerHTML = filtered.map((s)=>`<li>${s}</li>`).join('')
        },300)
        
    })