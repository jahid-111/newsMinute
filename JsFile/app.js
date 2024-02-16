console.log("js file")




const navApi = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => navDatas(data.data.news_category))
}



const navDatas =  navData => {
    // console.log(navData)
    const navContainer = document.getElementById('navContainer')
    console.log(navContainer);
    navData.forEach(data => {
        const ulForNav = document.createElement('ul');
        ulForNav.innerHTML = ` 
            <li><a class="border-2 hover:border-b-sky-500" href="">${data.category_name}</a></li
            `;
            navContainer.appendChild(ulForNav)

        // console.log(data.category_name)
    });
}



navApi()