const rename = (text: string): string => {
  switch (text) {
    case 'armor':
      return 'Armor';
    case 'armorperlevel':
      return 'Armor per level';
    case 'attackdamage':
      return 'Attack damage';
    case 'attackdamageperlevel':
      return 'Attack damage per level';
    case 'attackrange':
      return 'Attack range';
    case 'attackspeedoffset':
      return 'Attack speed offset';
    case 'attackspeedperlevel':
      return 'Attack speed per level';
    case 'crit':
      return 'Crit';
    case 'critperlevel':
      return 'Crit per level';
    case 'hp':
      return 'HP';
    case 'hpperlevel':
      return 'HP per level';
    case 'hpregen':
      return 'HP regen';
    case 'hpregenperlevel':
      return 'HP regen per level';
    case 'movespeed':
      return 'Move speed';
    case 'mp':
      return 'MP';
    case 'mpperlevel':
      return 'MP per level';
    case 'mpregen':
      return 'MP regen';
    case 'mpregenperlevel':
      return 'MP regen per level';
    case 'spellblock':
      return 'Spellblock';
    case 'spellblockperlevel':
      return 'Spellblock per level';
    default:
      return 'not handled';
  }
};

export default rename;
