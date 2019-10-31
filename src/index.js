// fetch('https://swapi.co/api/people/1')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((body)=>{
//         console.log(body);
//     })


class SwapiService {

    _apiBase = 'https://swapi.co/api/';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`); // ожидаем выполнения 

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`) ;
        }
        
        const body = await res.json(); 
        
        return body; 
    }   
    async getAllPeople() {
        const res = await this.getResource(`people/`);
        return res.results;
    }
    getPerson(id) {
        return this.getResource(`people/${id}`)
    }
}


const swapi = new SwapiService();
swapi.getAllPeople().then((body)=>{
    console.log(body);
})
