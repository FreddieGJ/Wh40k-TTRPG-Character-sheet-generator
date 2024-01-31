//assigning divs in the HTML to variables in JavaScript
var mainDisplay = document.getElementById('mainDisplay');
var officerDisplay = document.getElementById('officerDisplay')
var trainingDocDisplay = document.getElementById('trainingDoc');
var regimentType = document.getElementById("regimentTypeDisp");
var specialEquptmentDisp = document.getElementById("specialEquiptmentDisp");
var className = document.getElementById("className");
var HomeWorldDisp = document.getElementById("HomeWorldDisp");

var regSkills = document.getElementById("regSkills");
var officerSkills = document.getElementById("officerSkills");
var officerTalents = document.getElementById("officerTalents");
var trainingAptitudes = document.getElementById("trainingAptitudes");
var trainingTalents = document.getElementById("trainingTalents");
var trainingSkills = document.getElementById("trainingSkills");
var trainingEquip = document.getElementById("trainingEquip");
var trainingWS = document.getElementById("trainingWS");
var specialEquip = document.getElementById("specialEquip");
var specialSkills = document.getElementById("specialSkills");

var regTalents = document.getElementById("regTalents");
var regTraits = document.getElementById("regTraits");
var regAptitudes = document.getElementById("regAptitudes");
var regEquip = document.getElementById("regEquip");
var regWS = document.getElementById("regWS");
var regBS = document.getElementById("regBS");
var regStr = document.getElementById("regStr");
var regTough = document.getElementById("regTough");
var regAGY = document.getElementById("regAGY");
var regINT = document.getElementById("regINT");
var regPER = document.getElementById("regPER");
var regWILL = document.getElementById("regWILL");
var regFEL = document.getElementById("regFEL");
var regHP = document.getElementById("regHP");
var regBonusEquip = document.getElementById("regBonusEquip");
var allRegSkillDisps = document.getElementsByClassName("regAddition").innerHTML;
var regimentBonus = document.getElementById("regimentBonus");
var homeWorldBonus = document.getElementById("homeWorldBonus");
var regimentstandardEquiptment = document.getElementById("regimentstandardEquiptment");

var favoredWeapons1Disp = document.getElementById("favoredWeapons1Disp");
var favoredWeapons2Disp = document.getElementById("favoredWeapons2Disp");
var aptitudes = document.getElementById("aptitudes");
var startingSkills = document.getElementById("startingSkills");
var startingTalents = document.getElementById("startingTalents");
var startingTraits = document.getElementById("startingTraits");
var specialistEquip = document.getElementById("specialistEquip");
var HP = document.getElementById("HP");
var halfMove = document.getElementById("halfMove");
var fullMove = document.getElementById("fullMove");
var charge = document.getElementById("charge");
var run = document.getElementById("run");

var weaponDisp = document.getElementById('weaponSkill');
var balisticDisp = document.getElementById('balisticSkill');
var strengthDisp = document.getElementById('strength');
var toughnesDisp = document.getElementById('toughnes');
var agilityDisp = document.getElementById('agility');
var intelengenceDisp = document.getElementById('intelligence');
var perceptionDisp = document.getElementById('perception');
var willDisp = document.getElementById('willpower');
var felDisp = document.getElementById('fellowship');
var stats = [ weaponDisp, balisticDisp, strengthDisp, toughnesDisp, agilityDisp, intelengenceDisp, perceptionDisp, willDisp, felDisp];

//Names for the regiment items
var officerTypeList = ['Bilious 2', 'Circumspect 2', 'Cholerick 2', 'Fixed 1', 'Maverick 2', 'Melanchoic 2', 'Phelgmatic 1', 'Sanguine 2', 'Supine 1'];
var trainingDocs = ['Close Order Drill 2', 'Die hards 3', 'Favored Foe 3', 'hardened Fighters 2', 'Iron Dicipline 2', 'Sharp Shooters 4', 'Survivalists 4'];
var regimentTypes = ['Armored Regiment 4', "Recon Type 3", "Drop Troops 3", "Hunter Killer 3", "Light Infantry 2", "Line Infantry 2", "Mechanised Infantry 3", "Seige Infantry 2"];
var specialEquipDocs = ["Augmetics 2", "Chameleoline 3", "Combat Drugs 2", "Demolitions3", "Scavengers 3", "Warrior Weapons 3", "Well-Provisioned 3"];
var favoredWeapons = [
    "Heavy Bolter",
    "Heavy Stubber",
    "M41 Multi-Laser",
    "Laspistol",
    "Accatran-PatternMKII Heavy Laspistol",
    "Lascarbine",
   " M36 Lasgun",
    "Laslock",
    "Long Las",
    "Triplex Pattern Lasgun",
    "Bullpup Lasgun",
    "Hot-shot laspistol",
    "Hot-shot Lasgun",
    "Accatran-patternMKIV Lasgun",
    "Lucius-Pattern Lasgun",
    "Man Portable Lascannon",
    "Autopistol",
    "Stub Automatic",
    "Stub revolver",
    "Hand Cannon",
    "Naval Pistol",
    "Sniper Rifle",
    "AutoGun",
    "Shotgun(pump action)",
    "Shotgun",
    "Combat Shotgun",
    "Ripper Gun",
    "Heavy Stubber",
    "M34 AutoCannon",
    "Bolt Pistol",
    "Hash-patternM38 MkII Bolt pistol",
    "Boltgun",
    "MeltaGun",
    "Plasma Pistol",
    "PlasmaGun",
    "Hand Flamer",
    "Flamer",
    "Hades Assault Flamer",
    "Bolas",
    "Javelin",
    "Throwing Knife",
    "Hand Bow",
    "FlintLock Pistol",
    "Signaling Device (flare gun)",
    "Blowgun",
    "Flintlock Musket", 
    "Bow",
    "Sling",
    "Crossbow",
    "Grenade Launcher",
    "Missile Launcher",
    "Morter",
    "Accatran Automatic Grenade Launcher",
    "Needle Pistol",
    "Needle Rifle",
    
    "Chainsword",
    "Chainaxe",
    "Chain flail",
    "Chain Glaive",
    "Chain Knife",
    "Eviscerator",
    "Cavalry Sabre",
    "Command Baton",
    "Power Axe",
    "Power Fist",
    "Power Maul(High)",
    "Power Maul(low)",
    "Power Sword",
    "Axe",
    "Cavalry Spear",
    "Flail",
    "Knife",
    "Shields",
    "Spear",
    "Staff",
    "Sword",
    "Truncheon",
    "Warknife"];
var HomeWorlds = ["Death World", "Fortress World", "Highborn", "Hive World", "Imperial World", "Penal Colony", "Pentent", "Schola Progenium"];

//Simulate a D10 Dice roll
const roll10 = () => {
    return Math.floor(Math.random() * 10) + 1;
};
//simulate a D100 dice roll
const roll100 = () => {
    return Math.floor(Math.random() * 99) +1;
};
//simulate a D5 dice roll
const roll5 = () => {
    return Math.floor(Math.random() * 4) +1
}

//the class that makes the regiments
class RegimentGenerator{
    constructor(stats){
        this.stats = stats;
    }
    //autofill all the regiment boxes
    generateRegiment(){
        //reset the display
        officerTalents.innerHTML = "";
        officerSkills.innerHTML = "";
        HomeWorldDisp.innerHTML = "";
        homeWorldBonus.innerHTML = "";
        trainingTalents.innerHTML = "";
        trainingSkills.innerHTML = "";
        trainingAptitudes.innerHTML = ""
        trainingEquip.innerHTML = "";
        trainingWS.innerHTML = "";
        specialEquip.innerHTML = "";
        specialSkills.innerHTML = "";
        regWS.innerHTML = "";
        regBS.innerHTML = "";
        regStr.innerHTML = "";
        regTough.innerHTML = "";
        regAGY.innerHTML = "";
        regINT.innerHTML = "";
        regPER.innerHTML = "";
        regWILL.innerHTML = "";
        regFEL.innerHTML = "";
        regBonusEquip.innerHTML = "";

        this.createCommandingOfficer();
        this.selectTrainingDocs();
        this.generateSpecialEquiptment();
        this.selectRegimentType();
        this.generateFavoredWeapons();
        this.generateHomeWorld();
    }

    generateHomeWorld() {
        var choice = HomeWorlds[Math.floor(Math.random() * HomeWorlds.length)]
        HomeWorldDisp.innerHTML = choice;
        
        if(choice === HomeWorlds[0]){
            homeWorldBonus.innerHTML += "Charactaristics: Choose 2 to add +3: Perception, Strength, Toughness";
            homeWorldBonus.innerHTML += "<p>Skills: Survival</p>";
            homeWorldBonus.innerHTML += "<p>Fluency: You can speak Low Gothic, but you cannot read or write</p>";
            homeWorldBonus.innerHTML += "<p>Hardened: Choose Between Lightning Reflexes, Light Sleeper or Resistance(poison)</p>";
            homeWorldBonus.innerHTML += "<p>Wary of Outsiders: You take a -10 penalty on all interactions made within a formal surrounding and a -10 penalty on all interactions with non-Death Worlders. These penalties can be waved if dealing with those who have gained their trust</p>";
            homeWorldBonus.innerHTML += "<p>HP +2</p>";
        }else if (choice === HomeWorlds[1]){
            homeWorldBonus.innerHTML += "Charactaristics: Choose 2 to add +3: Balistic Skill, Willpower, Toughness";
            homeWorldBonus.innerHTML += "<p>Skills: Common Lore(War, Imperium, Imperial Guard), Linguistics(Low Gothic)</p>";
            homeWorldBonus.innerHTML += "<p>Hated Enemy: Hatred(any) At the GMs discression, you must make a Willpower(10) check to avoid attacking that Enemy without mercy on sight</p>";
            homeWorldBonus.innerHTML += "<p>Combat doctrine: Choose Between Nerves Of Steel or Sprint</p>";
            homeWorldBonus.innerHTML += "<p>Bred For War: You must pass a Willpower(+0) test to go against the ruls and regulations of the Imperial Guard</p>";
        }else if(choice === HomeWorlds[2]){
            homeWorldBonus.innerHTML += "Charactaristics: Choose 2 to add +3: Fellowship, Intelligence, Weapon Skill";
            homeWorldBonus.innerHTML += "<p>Skills: Common Lore(Administratum), Inquiry, Linguistics(High Gothic)</p>";
            homeWorldBonus.innerHTML += "<p>Fluency: You can speak Low Gothic, but you cannot read or write it</p>";
            homeWorldBonus.innerHTML += "<p>Duty And Honor: You take a penalty of -10 on all Charm, Inquiry and Deceive Tests on non Nobles. However, you gain a +10 to those same tests on Nobles</p>";
            homeWorldBonus.innerHTML += "<p>Abundant Resources: A squad from a Highborn World gains a +10 to their Logistics rating</p>";
            homeWorldBonus.innerHTML += "<p>The Finest Tutors: Choose Between the following Talents: Air Of Authority OR Peer(Nobels)</p>";
            homeWorldBonus.innerHTML += "<p>HP -1</p>";
        }else if(choice === HomeWorlds[3]){
            homeWorldBonus.innerHTML += "Charactaristics: Choose 2 to add +3: Agility, Fellowship, Perception";
            homeWorldBonus.innerHTML += "<p>Skills: Deceive, Linguistics(Low Gothic)</p>";
            homeWorldBonus.innerHTML += "<p>Accustomed To Crowds: When running or charging through dense crowds, you take no penalty for Agility tests to keep your feet</p>";
            homeWorldBonus.innerHTML += "<p>Hivebound: When outside of an enclosed or artificial environment (E.G Hive city or Starship), you tke a -10 to all survival tests</p>";
            homeWorldBonus.innerHTML += "<p>Urban Violence: Choose 1: Hightened Senses(Hearing), Paranoia, Unremarkable</p>";
            homeWorldBonus.innerHTML += "<p>HP -1</p>"
        }else if (choice === HomeWorlds[4]){
            homeWorldBonus.innerHTML += "Charactaristics: +3 to Willpower and +3 to any other Charactaristic";
            homeWorldBonus.innerHTML += "<p>Skills: Common Lore(Imperial Creed, Imperium), Linguistics(Low Gothic)</p>";
            homeWorldBonus.innerHTML += "<p>Blessed Ignorance: -5 Penalty on all Forbidden Lore tests</p>";
            homeWorldBonus.innerHTML += "<p>Kill The Mutant: Hatred(Mutant)</p>";
        }else if (choice === HomeWorlds[5]){
            homeWorldBonus.innerHTML += "Charactaristics: Choose 2 to add +3: Agility, Strength, Toughness";
            homeWorldBonus.innerHTML += "<p>Skills: Intimidate, Linguistics(Low Gothic)</p>";
            homeWorldBonus.innerHTML += "<p>Honor Among Thieves: Choose 1 of the following Talents: Peer(Underworld) or Street Fighting</p>";
            homeWorldBonus.innerHTML += "<p>Larcenous: You gain a +10 to all Logistics tests made to obtain illigal or contraband items</p>";
            homeWorldBonus.innerHTML += "<p>Scum and Villiny: You have only 15 points to determine starting Equiptment</p>";
            homeWorldBonus.innerHTML += "<p>HP +1</p>";
        }else if (choice === HomeWorlds[6]){
            homeWorldBonus.innerHTML += "Charactaristics: Choose 2 to add +3: Fellowship, Toughness, Willpower";
            homeWorldBonus.innerHTML += "<p>Skills: Common Lore(Ecclesiarchy, Imperial Creed), Intimidate, Linguistics(Low Gothic)</p>";
            homeWorldBonus.innerHTML += "<p>Blood Of Martyrs: Choose 1 of the following Talents: Nerves Of Steel, Orthoproxy, Unshakable Faith</p>";
            homeWorldBonus.innerHTML += "<p>Only One Life To Give: You must take a Willpower(+10) Test in order to retreat from battle or otherwise act in the interest of self preservation</p>";
            homeWorldBonus.innerHTML += "<p>Untempered Zeal: You can re-roll any failed test made to insire religious fervor or righteous hatred in others</p>";
            homeWorldBonus.innerHTML += "<p>HP +2</p>"
        }else if (choice === HomeWorlds[7]){
            homeWorldBonus.innerHTML += "Charactaristics: +3 to Willpower and +3 to either Weapon Skill or Balistics Skill";
            homeWorldBonus.innerHTML += "<p>Skills: Common Lore(Imperial Guard, Imperium, War), Linguistics(High Gothic and Low Gothic)</p>";
            homeWorldBonus.innerHTML += "<p>Only In Death Does Duty End: Choose between the following Talents: Air Of Authority or Unshakable Faith</p>";
            homeWorldBonus.innerHTML = "<p>HP +1</p>;"
        }
        
    }

    createCommandingOfficer(){
        //randomly choose a Officer
        var choice = officerTypeList[Math.floor(Math.random() * officerTypeList.length)];
        officerDisplay.innerHTML = choice;
        
        //Assign Telents or Skills based on Officer chosen
        if(choice === officerTypeList[0]){
            officerTalents.innerHTML += "Paranoia";
        } else if(choice === officerTypeList[1]){
            officerTalents.innerHTML += "Foresight";
        } else if (choice === officerTypeList[2]){
            officerTalents.innerHTML += "Rapid Reaction";
        } else if (choice === officerTypeList[3]){
            officerSkills.innerHTML += "Command";
        } else if (choice === officerTypeList[4]){
            officerTalents.innerHTML += "Resistance(Fear)";
        } else if (choice === officerTypeList[5]){
            officerTalents.innerHTML += "Air Of Authority";
        } else if (choice === officerTypeList[6]){
            officerSkills.innerHTML += "Common Lore(Imperial Guard, War)"
        } else if (choice === officerTypeList[7]){
            officerTalents.innerHTML += "Die Hard";
        } else if (choice === officerTypeList[8]){
            officerSkills.innerHTML += "Common Lore(Ecclesiarchy, Imperial Creed)";
        }
    }

    selectTrainingDocs() {
        //randomly choose a traningDoc
        var choice = trainingDocs[Math.floor(Math.random() * trainingDocs.length)]
        trainingDocDisplay.innerHTML = choice;

        //assign stuff based on choice made
        if(choice === trainingDocs[0]){
            trainingTalents.innerHTML += "Combat Formation OR Double Team";
        } else if(choice === trainingDocs[1]){
            trainingAptitudes.innerHTML += "Toughness";
        } else if (choice === trainingDocs[2]){
            trainingTalents.innerHTML += "Hatred(Choose 1)";
            trainingSkills.innerHTML += "Forbidden lore(Choose 1)";
        } else if (choice === trainingDocs[3]){
            trainingWS.innerHTML += "Weapon Skill +2";
            trainingTalents.innerHTML += "Street Fighting";
            trainingEquip.innerHTML += "Replace standard Melee Weapon with Common or Low-tech melee Weapon OR apply the Mono Upgrade to standard melee weapon";
        } else if (choice === trainingDocs[4]){
            trainingAptitudes.innerHTML += "Willpower";
        } else if (choice === trainingDocs[5]){
            trainingAptitudes.innerHTML += "Balistic Skill";
            trainingTalents.innerHTML += "Deadeye Shot";
        } else if (choice === trainingDocs[6]){
            trainingAptitudes.innerHTML += "Agility"
            trainingSkills.innerHTML += "Re-Roll failed Survival and Navigate(Surface) Tests"
        }
    }

    //the rest of the selectors basically go by the previous formula

    generateSpecialEquiptment() {
        var choice = specialEquipDocs[Math.floor(Math.random() * specialEquipDocs.length)];
        specialEquptmentDisp.innerHTML = choice;
        
        if (choice === specialEquipDocs[0]){
            specialEquip.innerHTML += "+10 on all Logistics tests to gain bionic replacements and implants";
        }else if (choice === specialEquipDocs[1]){
            specialEquip.innerHTML += "Rgiment is equipped with Chameleoline cloaks OR Chameleoline armor";
        }else if (choice === specialEquipDocs[2]){
            specialEquip.innerHTML += "Regiment is equipped with an Injector OR and Inhaler, 3 doses of Frenzon OR 5 doses of Stimm. Additional doses must be obtained normally."
        }else if (choice === specialEquipDocs[3]){
            specialEquip.innerHTML += "+10 on all Logistics tests to obtain Grenades, Missiles, Explosives, special Tank Ammo";
        }else if (choice === specialEquipDocs[4]){
            specialEquip.innerHTML += "Regiment may add +10 to any Logistics Test. However, when this ability is used, any double rolled (e.g 22) garners unwanted attention from higher ups";
        }else if (choice === specialEquipDocs[5]){
            specialSkills.innerHTML += "Parry";
            specialEquip.innerHTML += "Regiment exchanges their Main Weapon for a (Common or more available) low-Tech Weapon and a Las Pistol with 2 Charge Packs";
        }else if (choice === specialEquipDocs[6]){
            specialEquip.innerHTML += "Increase all ammo clips and ration supplies by +2 and gain an additional grenade of each type. If the Regiment contains Vehacles, add +10 on Logistics tests made to obtain fuel parts for repairs";
        }
        };

    selectRegimentType() {
        var choice = regimentTypes[Math.floor(Math.random() * regimentTypes.length)];
        regimentTypeDisp.innerHTML = choice;

        if(choice === regimentTypes[0]){
            regWS.innerHTML += "-3"; regINT.innerHTML += "+3";
            regSkills.innerHTML += "Operate(Surface)";
            regTalents.innerHTML += "Technical Knock";
            regBonusEquip.innerHTML += "One Leman Russ Battle Tank (or varient), One Annointed Maintenance Toolkit (Per player)"
        }else if (choice === regimentTypes[1]){
            regPER.innerHTML += "+3"; regWILL.innerHTML += "-3";
            regSkills.innerHTML += "Awareness";
            regTalents.innerHTML += "Combat Sense";
            regBonusEquip.innerHTML += "One Sentinel Scout Walker OR One ChimeraArmored Transport per Squad, One set of Magnoculars";
        }else if(choice === regimentTypes[2]){
            regAGY.innerHTML += "+3"; regFEL.innerHTML = "-3";
            regSkills.innerHTML += "Operate(Aronautica)";
            regTalents.innerHTML += "Catfall";
            regBonusEquip.innerHTML += "One lascarbine and 4 Charge Packs per player (Main Weapon), One suit of Imperial Guard Flak Armor per Character, One Respirator Per Character, One Grav-Chute per Player, Two Frak and Krak Grenades";
        }else if(choice === regimentTypes[3]){
            regBS.innerHTML += "+3"; regStr.innerHTML = "-3";
            regSkills.innerHTML += "Operate(Surface)";
            regTalents.innerHTML += "Resistance(Fear)";
            regBonusEquip.innerHTML += "One Sentinel Scout Walker OR One HellHound Support Tank per Squad";
        }else if(choice === regimentTypes[4]){
            regAGY.innerHTML += "+3";
            regTough.innerHTML += "-3";
            regSkills.innerHTML += "Navigate(Surface)";
            regTalents.innerHTML += "Sprint";
            regBonusEquip.innerHTML += "One Lascarbine and 4 Charge Pack per player (Main Weapon), One Flak Vest and One Flak Helmet Per Player, Two Frag Grenades and Two Smoke Grenades Per Player";
        }else if(choice === regimentTypes[5]){
            regStr.innerHTML += "+3"; regINT.innerHTML = "-3";
            regSkills.innerHTML += "Athetics";
            regTalents.innerHTML += "Rapid Reload";
            regBonusEquip.innerHTML += "One M36 Lasgun and 4 charge packs per Player(Main Weapon), One suit of Imperial Guard Flak Armor Per Player, Two Frak and Krak Grenades Per Player";
        }else if(choice === regimentTypes[6]){
            regAGY.innerHTML += "+3"; regPER.innerHTML = "-3";
            regSkills.innerHTML += "Operate(Surface)";
            regTalents.innerHTML += "Rapid Reload";
            regBonusEquip.innerHTML += "One M36 Lasgun and 4 charge packs per Player(Main Weapon), One suit of Imperial Guard Flak Armor Per Player, Two Frak and Krak Grenades Per Player, One Chimera Armored Transport Per Squad";
        }else if(choice === regimentTypes[7]){
            regTough.innerHTML += "+3"; regINT.innerHTML = "-3";
            regSkills.innerHTML += "Tech Use";
            regTalents.innerHTML += "Nerves Of Steel";
            regBonusEquip.innerHTML += "One M36 Lasgun with 4 charge Packs per Player (Main Weapon), One Suit of Imperial Guard Flak Armour Per Player, One respierator Per Player, 4 Empty Sandbags and One Entrenching Tool Per Player, Two Frag Grenades and two Photon Grenades Per Player";
        }
    };

    generateFavoredWeapons() {
            const choice1 = favoredWeapons[Math.floor(Math.random() * favoredWeapons.length)];
            const choice2 = favoredWeapons[Math.floor(Math.random() * favoredWeapons.length)];
            favoredWeapons1Disp.innerHTML = choice1;
            favoredWeapons2Disp.innerHTML = choice2;
        }

    generateCadiaRegiment() {
        HomeWorldDisp.innerHTML = "Cadia";
        regAGY.innerHTML = "+3";
        regBS.innerHTML = "+3";
        regPER.innerHTML = "-3";
        regWILL.innerHTML = "+3";
        regAptitudes.innerHTML = "Willpower";
        regSkills.innerHTML = "Command, Common Lore(Imperial Guard, Imperium, War), Linguistics(Low Gothic), Operate(Surface)";
        regTalents.innerHTML = "Combat Formation OR Double Team, Hatred(Chaos), Nerves Of Steel, OR Sprint, Rapid Reload";
        regimentBonus.innerHTML = "Bred For War: Cadian Guardsmen must pass a Willpower(+0) test to go against the ruls and regulations of the Imperial Guard";
        regimentBonus.innerHTML += "<p>Hated Ememy: At the GMs discretion, the players must make a willpower(+10) test in order to restrain themselves from attacking the forces of Chaos</p>"
        regimentstandardEquiptment.innerHTML = "<li>1 good Craftmanship M36 Lasgun and 4 charge Packs<li>Autopistol and 2 clips</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>2 frag grenades and 2 krak grenades</li><li>1 Knife</li><li>1 Flak Vest</li><li>1 Rucksack or Sling Bag</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>Gas Mask</li><li>Micro-bead</li><li>A Single Chimera Armored Transport Per Squad</li>"
        favoredWeapons1Disp.innerHTML = "Auto Cannon";
        favoredWeapons2Disp.innerHTML = "Grenade Launcher";
    }

    generateCatachanRegiment() {
        HomeWorldDisp.innerHTML = "Catachan";
        regStr.innerHTML = "+3";
        regAGY.innerHTML = "+3";
        regAptitudes.innerHTML = "Agility";
        regSkills.innerHTML = "Navigate(Surface), Survival";
        regTalents.innerHTML = "Lightning Reflexes OR Light sleeper OR Resistance(Poison), Resistance(Fear), Sprint";
        regimentBonus.innerHTML = "Fluency: Catachans don't start with the Fluency(Low Gothic) Skill. They can still communicate Verbally with no skill test";
        regimentBonus.innerHTML += "<p>Survivalists(Jungle): Catachans can reroll failed Survival(Jungle) Tests and Navigate(Surface) tests when within a Jungle</p>";
        regimentBonus.innerHTML += "<p>Wary of Outsiders: Catachans take a -10 penalty on all interactions made within a formal surrounding and a -10 penalty on all interactions with non-Catachans. These penalties can be waved if dealing with those who have gained their trust</p>";
        regHP.innerHTML = "+2"
        regimentstandardEquiptment.innerHTML = "<li>1 Lascarbine and 4 charge Packs</li><li>1 Best Craftmanship Sword</li><li>1 Knife</li><li>Flak Vest and FLak Helmet</li><li>3 Frag Grenades And 2 Smoke Grenades</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>1 Knife</li><li>1 Flak Vest</li><li>1 Rucksack</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>Grapnel</li>"
        favoredWeapons1Disp.innerHTML = "Flamer";
        favoredWeapons2Disp.innerHTML = "Heavy Bolter"
    }
    generateKriegRegiment() {
        HomeWorldDisp.innerHTML = "Krieg";
        regINT.innerHTML = "-3";
        regTough.innerHTML = "+6";
        regWILL.innerHTML = "+3";
        regAptitudes.innerHTML = "Toughness, Willpower";
        regSkills.innerHTML = "Common Lore(Ecclesiachy, Imperial Creed, Imperial Guard, War), Intimidate, Linguistics(Low Gothic), Tech Use";
        regTalents.innerHTML = "Nerves Of Steel, Orthoproxy OR Unshakable Faith";
        regimentBonus.innerHTML = "Only One Life To Give: Kriegsmen must take a Willpower(+10) Test in order to retreat from battle or otherwise act in the interest of self preservation.";
        regimentBonus.innerHTML += "<p>Faceless, Nameless and Selfless: When required to take a fear or pinning test, ignore any and all modifiers and treat it as a Willpower(+0) test.</p>";
        regHP.innerHTML = "+2";
        regimentstandardEquiptment.innerHTML = "<li>1 M36 lasgun and 6 Chargepacks</li><li>1 Mono Knife</li><li>Flak Armor</li><li>1 Respirator</li><li>4 Empty Sandbags</li><li>1 Entrenching Tool(Shovel)</li><li>4 Frag Grenades, 4 Photon Flash Grenades, 2 Smoke Grenades</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>1 Rucksack</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>1 Box of 6 Screamers</li>";
        favoredWeapons1Disp.innerHTML = "Heavy Bolter";
        favoredWeapons2Disp.innerHTML = "Meltagun";
    }
    generateElysianRegiment() {
        HomeWorldDisp.innerHTML = "Elysia";
        regAGY.innerHTML = "+3";
        regBS.innerHTML ="+3";
        regFEL.innerHTML = "-3";
        regWILL.innerHTML = "+3"
        regAptitudes.innerHTML = "Willpower";
        regSkills.innerHTML = "Common Lore(Imperial Creed, Imperium), Linguistics(Low Gothic), Operate(Aronautica)";
        regTalents.innerHTML = "Catfall, Die Hard, Hatred(Mutants)";
        regimentBonus.innerHTML = "Blessed Ignorance: -5 Penalty on all Forbidden Lore tests";
        regimentBonus.innerHTML += "<p>Demolitions Doctrine: +10 bonus on all Logistics tests made to obtain Grenades, Explosives, Missiles and special tank ammuntion</p>";
        regHP.innerHTML = ""
        regimentstandardEquiptment.innerHTML = "<li>1 Combat Shotgun and 4 Clips</li><li>1 Knife</li><li>Flak Armor</li><li>1 Respirator</li><li>1 Grav Chute</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>1 Rucksack</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>Micro-bead</li><li>Survival Suit</li><li>Photo Visor(Night vision goggles)</li>"
        favoredWeapons1Disp.innerHTML = "Heavy Bolter"
        favoredWeapons2Disp.innerHTML = "Plasma Gun";
    }
    generateJanissariesRegiment(){
        HomeWorldDisp.innerHTML = "Maccabeus Quintus"
        regFEL.innerHTML = "+3";
        regINT.innerHTML = "-3";
        regStr.innerHTML = "+3";
        regWS.innerHTML = "+2";
        regWILL.innerHTML = "+3";
        regSkills.innerHTML = "Athetics, Common Lore(Ecclesiarchy, Imperial Creed), Intimidate, Linguistics(Low Gothic)";
        regTalents.innerHTML = "Combat Formation OR Double Team, Nerves Of Steel OR Orthoproxy OR Unshakable Faith, Paranoia, Rapid Reload, Street Fighting";
        regimentBonus.innerHTML = "Only One Life To Give: Janissaries must take a Willpower(+10) Test in order to retreat from battle or otherwise act in the interest of self preservation.";
        regimentBonus.innerHTML += "<p>Untempered Zeal: Janissaries can re-roll any failed test made to insire religious fervor or righteous hatred in others</p>"
        regHP.inenrHTML = "+2";
        regimentstandardEquiptment.innerHTML = "<li>1 good Craftmanship M36 Lasgun and 4 charge Packs<li>Autopistol and 2 clips</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>2 frag grenades and 2 krak grenades</li><li>1 Knife</li><li>1 Flak Vest</li><li>1 Rucksack or Sling Bag</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>Gas Mask</li><li>Micro-bead</li><li>Purity Seals</li>"
        favoredWeapons1Disp.innerHTML = "Lascannon";
        favoredWeapons2Disp.innerhTML = "Plasma Gun";
    }
    generateMordianRegiment() {
        HomeWorldDisp.innerHTML = "Mordian";
        regAGY.innerHTML = "+3";
        regINT.innerHTML = "+3";
        regPER.innerHTML = "-3";
        regWS.innerHTML = "-3";
        regSkills.innerHTML = "Common Lore(Imperial Guard, Imperium, War), Decive, Linguistics(Low Gothic), Operate(Surface)";
        regTalents.innerHTML = "Combat Formation OR Double Team, Hightened Senses(Hearing) OR Paranoia, OR Unremarkable, Technical Knock";
        regimentBonus.innerHTML = "Accustomed To Crowds: When running or charging through dense crowds, you take no penalty for Agility tests to keep your feet";
        regimentBonus.innerHTML += "<p>Hivebound: When outside of an enclosed or artificial environment (E.G Hive city or Starship), you tke a -10 to all survival tests</p>";
        regHP.innerHTML = "-1";
        regimentstandardEquiptment.innerHTML = "<li>1 Laspistol and 2 Charge Packs</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>2 frag grenades and 2 krak grenades</li><li>1 Knife</li><li>1 Flak Vest</li><li>1 Injector and 5 doses of Stimm</li><li>1 Annointed Maintenance Toolkit</li><li>1 Rucksack</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>Gas Mask</li><li>Micro-bead</li><li>A Single Leman Russ Battle Tank Per Squad</li>"
        favoredWeapons1Disp.innerHTML = "Lascannon";
        favoredWeapons2Disp.innerHTML = "Grenade Launcher"
    }
    generateTallarnRegiment() {
        HomeWorldDisp.innerHTML = "Tallarn"
        regAGY.innerHTML = "+3";
        regPER.innerHTML = "+3";
        regAptitudes.innerHTML = "Ballistic Skill";
        regSkills.innerHTML = "Navigate(Surface), Survival";
        regTalents.innerHTML = "Deadeye Shot, Foresight, Sprint";
        regimentBonus.innerHTML = "Fluency: Tallarn Desert Raiders don't start with the Fluency(Low Gothic) Skill. They can still communicate Verbally with no skill test";
        regimentBonus.innerHTML += "Guerrilla Warfare: After sucessfully attacking and hitting an emeny who is Surprised, "
        regimentstandardEquiptment.innerHTML = "<li>1 M36 lasgun and 6 Chargepacks</li><li>1 Mono Knife</li><li>Flak Vest and Flak Helmet</li><li>1 Respirator</li><li>4 Empty Sandbags</li><li>1 Entrenching Tool(Shovel)</li><li>2 Frag Grenades, 3 Smoke Grenades</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>1 Rucksack</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>Magnoculors</li><li>Micro Bead</li>";
        favoredWeapons1Disp.innerHTML = "Missile Launcher";
        favoredWeapons2Disp.innerHTML = "Plasma Gun"
    }
    generateVostroyanRegiment() {
        HomeWorldDisp.innerHTML = "Vostroya";
        regINT.innerHTML = "-3";
        regStr.innerHTML = "+3";
        regTough.innerHTML = "+3";
        regWS.innerHTML = "+3";
        regWILL.innerHTML = "+3";
        regAptitudes.innerHTML = "Balistic Skill";
        regSkills.innerHTML = "Athetics, Common Lore(Imperial Creed, Imperium), Linguistics(Low Gothic)";
        regTalents.innerHTML = "Deadeye Shot, Hatret(Mutants), Rapid Reaction, Rapid Reload, Street Fighting";
        regimentBonus.innerHTML = "Blessed Ignorance: -5 Penalty on all Forbidden Lore tests";
        regimentstandardEquiptment.innerHTML = "<li>1 Good Craftmanship M36 Lasgun and 4 Charge Packs</li><li>1 Sword</li><li>Flak Armor</li><li>Good Craftmanship Carapace Breastplate</li><li>2 Frag Grenades and 2 Krak Grenades</li><li>1 Uniform</li><li>1 set of bad weather gear</li><li>1 Rucksack</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li><li>Respirator</li><li>Micro Bead</li><li>Survival Suit</li>"
        favoredWeapons1Disp.innerHTML = "Longlas";
        favoredWeapons2Disp.innerHTML = "Heavy Bolter";
    }
    //<li>1 Uniform</li><li>1 set of bad weather gear</li><li>1 Rucksack</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li>
}

class CharacterGenerator{
    constructor(stats){
        this.stats = stats;
    }

    // randomly select a class to pupulate the HTML
    generateCharacter() {
        const classes = [
            this.generateHeavyGunner.bind(this),
            this.generateMedic.bind(this),
            this.generateOperator.bind(this),
            this.generateSergeant.bind(this),
            this.generateSpecialist.bind(this),
            this.generateCommisar.bind(this),
            this.generatePriest.bind(this),
            this.generateOrgyn.bind(this),
            this.generateRatling.bind(this),
            this.generatePsyker.bind(this),
            this.generateStormTrooper.bind(this),
            this.generateTechPriest.bind(this)
        ];

        const choice = Math.floor(Math.random() * classes.length);
        const selectedGenerator = classes[choice];

        // Now you can call the selected generator function within the class
        selectedGenerator();
    }
    
    generateStats() {
        //In Only War, you generate skills by rolling 2D10 and adding 20. This does that.
        stats.forEach(stat => {
            stat.innerHTML = roll10() + roll10() + 20;
            const statValue = parseInt(stat.innerHTML);
        });
        //this populates the Movement boxes based on Agility score.
        const moveValue = parseInt(stats[4/*Agility*/].innerHTML)
        if(moveValue === 0){
            halfMove.innerHTML = "1/2"
            fullMove.innerHTML = 1;
            chargeMove.innerHTML = 2;
            run.innerHTML = 3;
        } else if(moveValue <= 10){
            halfMove.innerHTML = 1
            fullMove.innerHTML = 2
            charge.innerHTML = 3
            run.innerHTML = 6
        } else if (moveValue <= 20){
            halfMove.innerHTML = 2
            fullMove.innerHTML = 4
            charge.innerHTML = 6
            run.innerHTML = 12
        }else if (moveValue <= 30){
            halfMove.innerHTML = 3
            fullMove.innerHTML = 6
            charge.innerHTML = 9
            run.innerHTML = 18
        }else if (moveValue <= 40){
            halfMove.innerHTML = 4
            fullMove.innerHTML = 8
            charge.innerHTML = 12
            run.innerHTML = 24
        }else if (moveValue <= 50){
            halfMove.innerHTML = 5
            fullMove.innerHTML = 10
            charge.innerHTML = 15
            run.innerHTML = 30
        } else if(moveValue <= 60){
            halfMove.innerHTML = 6
            fullMove.innerHTML = 12
            charge.innerHTML = 18
            run.innerHTML = 36
        } else if(moveValue <= 70){
            halfMove.innerHTML = 7
            fullMove.innerHTML = 14
            charge.innerHTML = 21
            run.innerHTML = 2
        }else if (moveValue <= 80){
            halfMove.innerHTML = 8
            fullMove.innerHTML = 16
            charge.innerHTML = 24
            run.innerHTML = 48
        }else if (moveValue <= 90){
            halfMove.innerHTML = 9
            fullMove.innerHTML = 18
            charge.innerHTML = 27
            run.innerHTML = 54
        } else if (moveValue === 100){
            halfMove.innerHTML = 10
            fullMove.innerHTML = 20
            charge.innerHTML = 30
            run.innerHTML = 60
        }
    }

//generates the Heavy gunner class
    generateHeavyGunner() {
        this.generateStats();
        stats[3].innerHTML = parseInt(stats[3].innerHTML) + 5;
        aptitudes.innerHTML = "Balistic Skill, Defence, Fellowship, Offence, Perception, Toughness";
        startingSkills.innerHTML = "Choose Athetics or survival. Common Lore(Imperial Guard) Intimidate.";
        startingTalents.innerHTML = "Iron Jaw, Weapon Training (Las or Solid Projectile, Low-Tech, Heavy)";
        specialistEquip.innerHTML = "Common missile Launcher (5 rockets) OR Heavy Stubber OR Regimental favored Heavy Weapon";
        HP.innerHTML = parseInt(10 + roll5());
        className.innerHTML = "Heavy Gunner";
    }
// generates the Medic class
    generateMedic() {
        this.generateStats();
        stats[5].innerHTML = parseInt(stats[5].innerHTML) + 5;
        aptitudes.innerHTML = "Balistic Skill, Fieldcraft, Intelligence, Knowledge, Perception, Willpower";
        startingSkills.innerHTML = "Medicae, Lore(Chemistry), Scrutiny OR Trade (Medical Supplies)";
        startingTalents.innerHTML = "Cold Hearted OR Jaded, Weapon Training(Las OR Solid Projectile, Low Tech)";
        specialistEquip.innerHTML = "Diagnostor, Injector, medikit";
        HP.innerHTML = parseInt(8 + roll5());
        className.innerHTML = "Medic";
    }
//generates the Operator class
    generateOperator() {
        this.generateStats();
        stats[4].innerHTML = parseInt(stats[4].innerHTML) + 5;
        aptitudes.innerHTML = "Agility, Balistic Skill, Fellowship, Fieldcraft, Intelligence, Tech";
        startingSkills.innerHTML = "Common Lore (Tech) OR Navigate (Surface), Operate (Surface), Tech-Use";
        startingTalents.innerHTML = "Technical Knock, Weapon Training(Las OR Solid Projectile, Low Tech)";
        specialistEquip.innerHTML = "Auspex/scanner, Common Craftmanship Mind Impulse Unit, Combi-Tool, DataSlate, Lascutter";
        HP.innerHTML = parseInt(6 + roll5());
        className.innerHTML = "Operator";
    }
//generates the Sergeant class
    generateSergeant() {
        this.generateStats();
        stats[8].innerHTML = parseInt(stats[8].innerHTML) + 5;
        aptitudes.innerHTML = "Defence, Fellowship, Leadership, Perception, Strength, Toughness, Weapon Skill";
        startingSkills.innerHTML = "Command, Navigate (surface) OR Scholalistic Lore(Tactica Imperilis)";
        startingTalents.innerHTML = "Air of Authority OR Iron Dicipline, Weapon Training(Chain Las OR Solid Projectile, Low Tech)";
        specialistEquip.innerHTML = "Common craftmanship Las Pistol, Chainsword";
        HP.innerHTML = parseInt(10 + roll5());
        className.innerHTML = "Sergeant";
    }
//generates the Specialist class
    generateSpecialist(){
        this.generateStats();
        
        regWS.innerHTML += "Add +3 to either Weapon Skill or Balistic Skill";
        aptitudes.innerHTML = "Agility, Balistic Skill, Fellowship, Fieldcraft, Finesse, Weapon Skill";
        startingSkills.innerHTML = "Athetics OR Survival, Navigate (Surface), Common Lore(Imperial Guard, War";
        startingTalents.innerHTML = "Lasgun Barrage OR Rapid Reload, Weapon Training (Bolt, Chain, Flame, Las, Launcher, Melta, Plasma, Low-Tech, Solid Projectile)";
        specialistEquip.innerHTML = "4 Frag OR Krak Grenades, Good Craftmanship Lasgun OR Common craftmanship Flamer OR Common Craftmahsip Shotgun OR Common Craftmanship Regimental Favored Weapon";
        HP.innerHTML = parseInt(8 + roll5());
        className.innerHTML = "Specialist";
    }
//gnerates the commisar class
    generateCommisar() {
        this.generateStats();
        stats[8].innerHTML = parseInt(stats[8].innerHTML) + 5;
        aptitudes.innerHTML = "Agility, Fellowship, Finesse, Leadership, Perception, Weapon Skill, Willpower";
        startingSkills.innerHTML = "Command OR Intimidate, Common Lore(Imperial Guard), Scholalistic Lore(Tactica Imperilis)";
        startingTalents.innerHTML = "Air of Authority, Cold Hearted OR Unshakable Faith, Weapon Training (Bold, Chain, Las OR Solid Projectile";
        specialistEquip.innerHTML = "Good Craftmanship Chainsword, Good Craftmanship Bolt Pistol, Commisar's Uniform";
        HP.innerHTML = parseInt(10 + roll5());
        className.innerHTML = "Commisar";
    }
//generates the Priest class
    generatePriest() {
        this.generateStats();
        stats[8].innerHTML = parseInt(stats[8].innerHTML) + 5;
        aptitudes.innerHTML = "Fellowship, Leadership, Perception, Social, Strength, Weapon Skill, Social, Strength, Weapon Skill, Willpower";
        startingSkills.innerHTML = "Charm, OR Inquiry, Common Lore(Ecclesiarchy), Forbidden Lore(Herasy), Scholastic Lore(Imperial Creed)";
        startingTalents.innerHTML = "Hated(Any), Unshakeable Faith, Weapon Training(Chain, Las OR Solid Projectile, Flame, Low-Tech";
        specialistEquip.innerHTML = "Ecclesiarchy Robes, Common Craftmanship Flamer, Common Craftmanship Chainsword, Book of scripture";
        HP.innerHTML = parseInt(9 + roll5());
        className.innerHTML = "Ministorum Priest";
    }
    //generates the Ogryn class
    generateOrgyn(){
        this.generateStats();
        stats[2].innerHTML = parseInt(stats[2].innerHTML) + 10;
        stats[3].innerHTML = parseInt(stats[3].innerHTML) + 10;
        stats[5].innerHTML = parseInt(stats[5].innerHTML) - 15;
        stats[4].innerHTML = parseInt(stats[4].innerHTML) - 10;
        aptitudes.innerHTML = "Balistic SKill, Defence, Offence, Strength, Toughness, Weapon Skill";
        startingSkills.innerHTML = "Intimidate OR Survival";
        startingTalents.innerHTML = "Die Hard, OR Iron Jaw, Weapon Training(Heavy, Solid Projectile)";
        startingTraits.innerHTML = "Auto Stabilised, But It Dark In Dere!, Clumsy, Size(Hulking), Sturdy, Unnatural Strength(+2), Unnatural Toughness(+2)";
        specialistEquip.innerHTML = `Common Craftmanship Ripper Gun, ${parseInt(roll5())} Frag Grenades`;
        HP.innerHTML = parseInt(25 + roll5());
        className.innerHTML = "Ogryn";
    }
    //generates the Ratling class
    /*Not sure why, but for some reason, the Ratling class only works if the talents and 
    skills etc are filled in first, and the stats are filled in last... */
    generateRatling() {
        aptitudes.innerHTML = "Agility, Balistic Skill, Fellowship, Fieldcraft, Finnese, Perception, Social";
        startingSkills.innerHTML = "Awareness OR Stealth, Decive, Trade(Cook)";
        startingTalents.innerHTML = "Deadeye Shot, Heightened Senses(Sight, Smell, Taste) OR Light sleeper, Weapon Training(Las, Solid Projectile)";
        startingTraits.innerHTML = "Size(I'm sorry, but the book calls it 'Weedy' and I'm not about that life. Your size is small)"
        specialistEquip.innerHTML = "Good craftmanship Long Las OR Good craftmanship Sniper Rifle with Telescopic Sight, Chameleline Cloak";
        
        HP.innerHTML = parseInt(5 + roll5());
        className.innerHTML = "Ratling";
        this.generateStats();
        stats[6].innerHTML = parseInt(stats[6].innerHTML) + 10;
        stats[9].innerHTML = parseInt(stats[9].innerHTML) + 10;
        stats[3].innerHTML = parseInt(stats[3].innerHTML) - 10;
        
    }
    //generates the Psyker class
    //maybe consider randomly generating their powers too?
    generatePsyker() {
        this.generateStats();
        stats[8].innerHTML = parseInt(stats[8].innerHTML) + 5;
        aptitudes.innerHTML = "Intelligence, Knowlage, Perception, Psyker, Strength, Willpower";
        startingSkills.innerHTML = "Comon Lore(Adeptus Astra Telepathica), Forbidden Lore(Psykers), Psyniscience, Scholastic Lore(Cryptology)";
        startingTalents.innerHTML = "Hightened Senses(Hearing), Up to 400xp worth of Psychic Powers, Weapon Traning(Las, Solid Projectile, Low Tech)";
        specialistEquip.innerHTML = "Data Slate, Psy Focus, Best Craftmanship Staff";
        HP.innerHTML = parseInt(8 + roll5());
        className.innerHTML = "Sanctioned Psyker";
    }
    //generates the Storm Trooper class
    generateStormTrooper() {
        this.generateStats();
        stats[3].innerHTML = parseInt(stats[3].innerHTML) + 5;
        aptitudes.innerHTML = "Agility, Balistic Skill, Fieldcraft, Finnese, Offence, Toughness";
        startingSkills.innerHTML = "Awarenes, Dodge OR Parry, Intimidate OR Security, Scholastic Lore(Tactica Impirialis), Stealth";
        startingTalents.innerHTML = "Quick Draw OR Rapid Reload, Takedown, Weapon Training(Las, Solid Projectile, Low Tech)";
        specialistEquip.innerHTML = "Good Craftmanship Hotshot Lasgun, Storm Trooper Carapce Armor";
        HP.innerHTML = parseInt(12 + roll5());
        className.innerHTML = "Storm Trooper";
    }
    //generates the Tech Priest class
    generateTechPriest() {
        this.generateStats();
        stats[5].innerHTML = parseInt(stats[5].innerHTML) + 5;
        aptitudes.innerHTML = "Balistics Skill, Intlligence, Knowlage, Strength, Tech, Toughness, Weapon Skill, Willpower";
        startingSkills.innerHTML = "Common Lore(Adeptus Mechanicus, Tech), Forbidden Lore(Adeptus Mechanicus,) Forbidden Lore(Archeotech) OR Logic, Tech Use";
        startingTalents.innerHTML = "Cold Hearted OR Technical Knock, Mechadendrite Use(Weapon, Utility), Weapon Training(Las, Solid Projectile, Power)";
        startingTraits.innerHTML = "Mechanicus Implants";
        specialistEquip.innerHTML = "Sacred Unguents, DataSlate, CombiTool, One Utility or balistic Mechadendrite of choice";
        HP.innerHTML = parseInt(8 + roll5());
        className.innerHTML = "Tech Priest Engineseer";
        }
    // removes all the innerHTML from all the divs
    clear(){
        stats.forEach(stat => {
            stat.innerHTML = ''
        });
        halfMove.innerHTML = "";
        fullMove.innerHTML = "";
        charge.innerHTML = "";
        run.innerHTML = "";
        officerDisplay.innerHTML = "";
        trainingDocDisplay.innerHTML = "";
        regimentTypeDisp.innerHTML = "";
        specialEquptmentDisp.innerHTML = "";
        favoredWeapons1Disp.innerHTML = "";
        favoredWeapons2Disp.innerHTML = "";
        trainingWS.innerHTML = "";
        regWS.innerHTML = "";
        regBS.innerHTML = "";
        regStr.innerHTML = "";
        regTough.innerHTML = "";
        regAGY.innerHTML = "";
        regINT.innerHTML = "";
        regPER.innerHTML = "";
        regWILL.innerHTML = "";
        regFEL.innerHTML = "";
        aptitudes.innerHTML = "";
        regAptitudes.innerHTML = "";
        trainingAptitudes.innerHTML = "";
        startingSkills.innerHTML = "";
        regSkills.innerHTML = "";
        officerSkills.innerHTML = "";
        trainingSkills.innerHTML = "";
        specialSkills.innerHTML = "";
        startingTalents.innerHTML = "";
        regTalents.innerHTML = "";
        officerTalents.innerHTML = "";
        trainingTalents.innerHTML = "";
        startingTraits.innerHTML = "";
        regTraits.innerHTML = "";
        regBonusEquip.innerHTML = "";
        HP.innerHTML = "";
        specialistEquip.innerHTML = "";
        regEquip.innerHTML = "";
        trainingEquip.innerHTML = "";
        specialEquip.innerHTML = "";
        className.innerHTML = "";
        regimentBonus.innerHTML = "";
        HomeWorldDisp.innerHTML = "";
        homeWorldBonus.innerHTML = "";
        regimentstandardEquiptment.innerHTML = "<li>1 Uniform</li><li>1 set of bad weather gear</li><li>1 Laspistol and 2 charge Packs</li><li>1 Knife</li><li>1 Flak Vest</li><li>1 Rucksack or Sling Bag</li><li>1 set of basic tools</li><li>1 Mess Kit and one water canteen</li><li>1 blanket and 1 sleep bag</li><li>1 Rechargable Lamp Pack</li><li>1 Grooming Kit</li><li>1 set of identification tags</li><li>1 Primer (very reliable instructions on enimes)</li><li>Combat Sustanence Rations, two weeks supply</li></div>"
    }
}

const characterGenerator = new CharacterGenerator(stats);
const regimentGenerator = new RegimentGenerator(stats);


/*
scrap code. Maybe find a use for it later.

Here to be copied to save me from writing it out every damn time
        aptitudes.innerHTML = 
        startingSkills.innerHTML = 
        startingTalents.innerHTML = 
        specialistEquip.innerHTML = 
        HP.innerHTML = 


the idea of this was to add modifiers nto the display.
It works, but only not very well
if (statValue <= 9) {
                stat.innerHTML += " +0";
            } else if (statValue <= 19) {
                stat.innerHTML += " +1";
            } else if (statValue <= 29) {
                stat.innerHTML += " +2";
            } else if (statValue <= 39) {
                stat.innerHTML += " +3";
            } else if (statValue <= 49) {
                stat.innerHTML += " +4";
            } else if (statValue <= 59) {
                stat.innerHTML += " +5";
            } else if (statValue <= 69) {
                stat.innerHTML += " +6";
            } else if (statValue <= 79) {
                stat.innerHTML += " +7";
            } else if (statValue <= 89) {
                stat.innerHTML += " +8";
            } else if (statValue <= 99) {
                stat.innerHTML += " +9";
            }

*/
