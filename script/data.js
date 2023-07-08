const loadData = (dataLimit) =>{
    fetch("https://recruit-edge-apis.vercel.app/all-candidates")
    .then(res=>res.json())
    .then(data=>displayData(data , dataLimit))
}

const displayData = (data , dataLimit) =>{


    if(dataLimit === true){
         data = data.slice(0,6)
    }


    const candidateContainer = document.getElementById("candidate-container");
    data.forEach(singleData => {
        console.log(singleData);


        const {experience,location,name,rank,rating,role,skills} =singleData;
        
        const allSkills = () =>{
            let value = '';
            for(const skill of skills){
                if(skills.length > 0){
                    value += `<li><i class="fa-solid fa-chevron-right"></i> ${skill}</li>`
                }
            }
            return value;
        }

        candidateContainer.innerHTML += `<div class="candidate">
<h1 class="candidate-name">${name}</h1>
<h3 class="candidate-role">${role}</h3>
<div class="candidate-info">
<ul class="skill-container"> 
<p class="skills-title">Skills</p>
${allSkills()}
</ul>

<div>

<div>
<p class="candidate-experience"><i class="fa-solid fa-briefcase"></i> ${experience}+ experience</p>
<p class="candidate-location"><i class="fa-solid fa-location-arrow"></i> ${location}</p>
</div>
<div>
<p class="candidate-rank">Rank: ${rank}</p>
<p class="candidate-rating"><i class="fa-solid fa-star"></i> ${rating}</p>
</div>
</div>

</div>
<button class="btnSec">Hire Now</button>
        </div>`
    });
}

loadData(true);