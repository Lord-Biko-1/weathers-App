const form=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');


const updateUI=(data)=>{
    // const cityDets=data.cityDets;
    // const weather=data.weather;
    const {cityDets,weather}=data;
    console.log(cityDets,weather);
//updating template
        details.innerHTML=`<h5 class="my-5">${cityDets.EnglishName}</h5>
        <div class="my-5">${weather[0].WeatherText }</div>
        <div class="display-4 my-4">
            <span>${weather[0].Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;
        const iconsrc =`/img/icons/${weather[0].WeatherIcon}.svg`;
        icon.setAttribute('src',iconsrc);
        let timesrc=weather[0].IsDayTime ? 'img/day.svg':'img/night.svg';


    time.setAttribute('src',timesrc);


    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
        }
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input=form.city.value.trim();
    console.log(input);
    form.reset();
    updateCity(input).then(data=>updateUI(data)).catch(err=>console.log(err));
});
const updateCity= async(city)=>{
    console.log(city); 
    const cityDets = await getCity(city);
    const weather=  await  getCondetion(cityDets.Key);
    return {
        cityDets,
        weather    
    };
};