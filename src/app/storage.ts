import {SuperData} from "./super-data";

export const superNames :string[] = [
  "Tiv-Taam",
  "Rami-Levi",
  "Super-Sal",
  "Mega",
  "Victory",
  "Super-Cofix"
];

export const sizes: string[] = [
  "Small",
  "Medium",
  "Large"
];

export const supers:SuperData[] = [
  {id:1,size:sizes[0],numOfEmployees:5,brand:superNames[0],owner:'AAA',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
    'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
    ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
    'sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {id:2,size:sizes[1],numOfEmployees:15,brand:superNames[1],owner:'BBB',
    info:'Barcelona (/ˌbɑːrsəˈloʊnə/ BAR-sə-LOH-nə, Catalan: [bəɾsəˈlonə],' +
    ' Spanish: [baɾθeˈlona]) is a city in Spain. It is the capital and largest' +
    ' city of Catalonia, as well as the second most populous municipality of Spain.' +
    ' With a population of 1.6 million within city limits,[5] its urban area extends' +
    ' to numerous neighbouring municipalities within the Province of Barcelona and is' +
    ' home to around 4.8 million people,[3][7] making it the sixth most populous urban ' +
    'area in the European Union after Paris, London, Madrid, the Ruhr area and Milan.[3]' +
    ' It is the largest metropolis on the Mediterranean Sea, located on the coast between ' +
    'the mouths of the rivers Llobregat and Besòs, and bounded to the west by the Serra de' +
    ' Collserola mountain range, the tallest peak of which is 512 metres (1,680 feet) high.'
  },
  {id:3,size:sizes[2],numOfEmployees:25,brand:superNames[2],owner:'CCC',
    info:'Tel Aviv is governed by the Tel Aviv-Yafo Municipality, headed by Ron Huldai,' +
    ' and is home to many foreign embassies.[6] It is a global city and is ranked 34th in' +
    ' the Global Financial Centres Index.[7] Tel Aviv has the third-largest economy in the ' +
    'Middle East after Abu Dhabi and Kuwait City.[8][not in citation given] The city has the' +
    ' 31st highest cost of living in the world.[9] Tel Aviv receives over 2.5 million international ' +
    'visitors annually.[10][11] A "party capital" in the Middle East, it has a lively ' +
    'nightlife and 24-hour culture.[12][13] Tel Aviv is home to Tel Aviv University, the ' +
    'largest university in the country with more than 30,000 students.'
  },

];

