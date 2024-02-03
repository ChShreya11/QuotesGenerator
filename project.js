//variables
let btn=document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[
    {
        quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        person:'Samuel Beckett'
    },
    {
        quote:"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
        person:'Norman Vincent Peale'
    },
    {
        quote:"Either you run the day or the day runs you.",
        person:'Jim Rohn'
    },
    {
        quote:"If you fell down yesterday, stand up today.",
        person:'H.G.Wells'
    },
    {
        quote:"If you're going through hell, keep going.",
        person:'Winston Churchill'
    },
    {
        quote:"Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        person:'St.Jerome'
    },
    {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        person:'Thomas A.Edison'
    },
    {
        quote:"It always seems impossible until it's done.",
        person:'Nelson Mandela'
    },
    {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        person:'Confucius'
    },
    {
        quote:"Once you replace negative thoughts with positive ones, you'll start having positive results.",
        person:'Willie Nelson'
    },
];

btn.addEventListener('click',function(){
let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})