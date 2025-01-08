function BellBoy  (name, age, hasPermit, Languages) {
    this.name = name;
    this.age = age;
    this.hasPermit = hasPermit;
    this.Languages = Languages;
}
const bellBoy1 = new BellBoy("Ousmane", 24, true, ["French, English"] )
console.log(bellBoy1.age)