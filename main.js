//confirm the js file has been imported correctly into index.html
document.getElementById("test").style.color = "green"

//Dice Rolls
function d20() {
    return Math.floor(Math.random() * 20) + 1
}

class Creature {
    constructor(name, species, level, tags, vision, languages, skills, abilityScoreModifiers, defenses, maxHP, weaknesses, passives) {
        this.name = name
        this.species = species
        this.level = level        
        this.creatureTags = tags
        this.skillPerception = vision[0]
        this.vision = vision[1]
        this.languages = languages


        this.hpMax = maxHP
        this.hpCurrent = this.hpMax
        this.ac = defenses[0]
        this.saveFortitude = defenses[1]
        this.saveReflex = defenses[2]
        this.saveWill = defenses[3]


    }

    //Saving Throws
    get savingThrowFortitude() {
        let roll = d20()
        console.log(roll === 1 ? "**Natural 1**" : roll === 20 ? "***NATURAL TWENTY***" : roll)
        return roll + this.saveFortitude
    }
    get savingThrowReflex() {
        let roll = d20()
        console.log(roll === 1 ? "**Natural 1**" : roll === 20 ? "***NATURAL TWENTY***": roll)
        return roll + this.saveReflex
    }
    get savingThrowWill() {
        let roll = d20()
        console.log(roll === 1 ? "**Natural 1**" : roll === 20 ? "***NATURAL TWENTY***": roll)
        return roll + this.saveWill
    }
}

let succubus = ["Succubus", 7, ["Chaotic Evil", "Medium", "Fiend", "Demon"], [15, "Darkvision"],["Abyssal", "Celestial", "Common", "Draconic", "", "", "", "Telepathy: 100 ft", "Tongues"],[],[], [23, 15, 14, 17], 100, ["Cold Iron: 5", "Good: 5"], ["+1 status to all saves vs. magic", "Rejection Vulnerability", "Seductive Presence"]]

let test = new Creature("Samantha", ...succubus)


/* optimizations

add skills
add combat abilities
add more monsters

*/