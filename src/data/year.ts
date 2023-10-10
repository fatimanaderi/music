
const genrateYear=()=>{
    const d = new Date();
    let newyear = d.getFullYear();
    let years = []
    let i=newyear-10;
    while (i < newyear) {
        years.push({name:i})
        i++;
    }
    return years

}

export default genrateYear;