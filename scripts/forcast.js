const key='	wm8AzD54ssgQaY7WN9C5iGdFIUEZ0uIA'; 
const getCondetion = async (id)=>{
    const base= 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    const respons=await fetch(base+query);
    const data= respons.json();
    return data;
};
const getCity = async(city)=>{

    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const apikey=`?apikey=${key}&q=${city}`;
    const respons= await fetch(base+apikey);
    const data= await respons.json();
    return data[0];

};
