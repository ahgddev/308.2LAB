function growth_check(num_of_plants, weeks){
    const max_area = 78.5375;
    const PI = 3.1415;
    let current_plant_amt = (num_of_plants * 2) * weeks;
    let plant_space = current_plant_amt * 0.8

    //Activity 3: try/catch block
    try{
        //Activity 2: Rapid Growth with 100 plants
      if (num_of_plants == 100) {
        return "We need " + (plant_space - max_area) + " more space to plant 100 plants. The radius of this new area would be " + (Math.sqrt(plant_space)/PI)
        } else if (plant_space > max_area){
            throw new Error("This is beyond the maximum garden area!")
        }
        else if (plant_space > (max_area*.80)){
            return "Pruned"
        } else if (plant_space <= (max_area*.80) || plant_space >= (max_area*.50)) {
            return "Monitored"
        } else {
            return "Planted"
        }
    } catch (Error){
        console.error(Error)
    }
  
}

console.log(growth_check(20,1))
console.log(growth_check(20,2))
console.log(growth_check(20,3))
console.log(growth_check(100,10))