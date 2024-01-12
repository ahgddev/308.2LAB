function growth_check(num_of_plants, weeks){
    const max_area = 78.5375;
    let current_plant_amt = (num_of_plants * 2) * weeks;
    let plant_space = current_plant_amt * 0.8

    if(plant_space > (max_area*.80)){
        return "Pruned"
    } else if (plant_space <= (max_area*.80) || plant_space >= (max_area*.50)) {
        return "Monitored"
    } else {
        return "Planted"
    }
}

console.log(growth_check(20,1))
console.log(growth_check(20,2))
console.log(growth_check(20,3))