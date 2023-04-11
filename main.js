//confirm the js file has been imported correctly into index.html
document.getElementById("test").style.color = "green"

//Dice Rolls
function d20() {
    return Math.floor(Math.random() * 20) + 1
}

let succubus = ["Succubus", 7, ["Chaotic Evil", "Medium", "Fiend", "Demon"], [15, "Darkvision"],["Abyssal", "Celestial", "Common", "Draconic", "", "", "", "Telepathy: 100 ft", "Tongues"],[14,0,0,0,18,20,16,0,0,0,0,13,15,14,0,0],[2,3,4,4,2,7], [23, 15, 14, 17], 100, ["Cold Iron: 5", "Good: 5"], ["+1 status to all saves vs. magic", "Rejection Vulnerability", "Seductive Presence"]]

class Creature {
    constructor(name, species, level, tags, vision, languages, skills, abilityScoreModifiers, defenses, maxHP, weaknesses, passives) {
        this.name = name
        this.species = species
        this.level = level        
        this.creatureTags = tags
        this.skillBonusPerception = vision[0]
        this.vision = vision[1]
        this.languages = languages


        this.hpMax = maxHP
        this.hpCurrent = this.hpMax
        this.ac = defenses[0]
        this.saveFortitude = defenses[1]
        this.saveReflex = defenses[2]
        this.saveWill = defenses[3]

        this.skillBonusAcrobatics = skills[0]
        this.skillBonusArcana = skills[1]
        this.skillBonusAthletics = skills[2]
        this.skillBonusCrafting = skills[3]

        this.skillBonusDeception = skills[4]
        this.skillBonusDiplomacy = skills[5]
        this.skillBonusIntimidation = skills[6]
        this.skillBonusMedicine = skills[7]

        this.skillBonusNature = skills[8]
        this.skillBonusOccultism = skills[9]
        this.skillBonusPerformance = skills[10]
        this.skillBonusReligion = skills[11]

        this.skillBonusSociety = skills[12]
        this.skillBonusStealth = skills[13]
        this.skillBonusSurvival = skills[14]
        this.skillBonusThievery = skills[15]
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

    //skill checks, including perception

    get skillCheckPerception() {
        let roll = d20()
        return roll + this.skillBonusPerception
    }

    get skillCheckAcrobatics() {
        let roll = d20()
        return roll + this.skillBonusAcrobatics
    }
    get skillCheckArcana() {
        let roll = d20()
        return roll + this.skillBonusArcana
    }
    get skillCheckAthletics() {
        let roll = d20()
        return roll + this.skillBonusAthletics
    }
    get skillCheckCrafting() {
        let roll = d20()
        return roll + this.skillBonusCrafting
    }

    get skillCheckDeception() {
        let roll = d20()
        return roll + this.skillBonusDeception
    }
    get skillCheckDiplomacy() {
        let roll = d20()
        return roll + this.skillBonusDiplomacy
    }
    get skillCheckIntimidation() {
        let roll = d20()
        return roll + this.skillBonusIntimidation
    }
    get skillCheckMedicine() {
        let roll = d20()
        return roll + this.skillBonusMedicine
    }

    get skillCheckNature() {
        let roll = d20()
        return roll + this.skillBonusNature
    }
    get skillCheckOccultism() {
        let roll = d20()
        return roll + this.skillBonusOccultism
    }
    get skillCheckPerformance() {
        let roll = d20()
        return roll + this.skillBonusPerformance
    }
    get skillCheckReligion() {
        let roll = d20()
        return roll + this.skillBonusReligion
    }

    get skillCheckSociety() {
        let roll = d20()
        return roll + this.skillBonusSociety
    }
    get skillCheckStealth() {
        let roll = d20()
        return roll + this.skillBonusStealth
    }
    get skillCheckSurvival() {
        let roll = d20()
        return roll + this.skillBonusSurvival
    }
    get skillCheckThievery() {
        let roll = d20()
        return roll + this.skillBonusThievery
    }
}

let test = new Creature("Samantha", ...succubus)


/* optimizations

add skills
add combat abilities
add more monsters
if monsters and characters need their skills calculated in different ways, perhaps the skill section for monsters can be class extension from creature?


*/