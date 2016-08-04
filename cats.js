var catData = [
  { id: '1', name: 'rupert', readyForHome: 'No', age: 12, personality: ['friendly', 'lazy', 'loving']},
  { id: '2', name: 'mrs fluffy', readyForHome: 'Yes', age: 2, personality: ['affectionate', 'playful', 'shy', 'aggressive']},
  { id: '3', name: 'tabitha', readyForHome: 'Yes', age: 4, personality: ['aggressive', 'independent']},
  { id: '4', name: 'lily', readyForHome: 'No', age: 8, personality: ['friendly', 'playful', 'mischievous']},
  { id: '5', name: 'stripe', readyForHome: 'Yes', age: 1, personality: ['haughty', 'independent']},
  { id: '6', name: 'bob', readyForHome: 'Yes', age: 1, personality: ['aggressive', 'antisocial', 'nervous']},
  { id: '7', name: 'jean claude cat damme', readyForHome: 'Yes', age: 11, personality: ['sleepy', 'shy', 'loving']},
  { id: '8', name: 'tilly', readyForHome: 'Yes', age: 4, personality: ['playful', 'social', 'attention-seeking']},
  { id: '9', name: 'milo', readyForHome: 'No', age: 7, personality: ['mischievous', 'friendly']},
  { id: '10', name: 'mr claws', readyForHome: 'Yes', age: 13, personality: ['affectionate', 'shy', 'nervous']},
  { id: '11', name: 'robert zimmercat', readyForHome: 'Yes', age: 3, personality: ['folksy', 'prolific', 'neurotic']}
];

var cats = function (cats) {

  return cats.filter(function (cat) {
    return cat.readyForHome === 'Yes' &&
    cat.personality.indexOf('aggressive') === -1;
  }).map(function (cat) {
    cat.readyForHome = true;
    cat.yearOfBirth = new Date().getFullYear() - cat.age;
    cat.name = cat.name.split(' ').reduce(function (memo, word) {
      return memo + capitaliseWord(word + ' ');
    }, '').trim();
    return cat;
  });

};

function capitaliseWord(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}


if (typeof module !== 'undefined') {
  module.exports = cats;
}
