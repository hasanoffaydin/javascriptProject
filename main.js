document.getElementById('words').innerText = "''Welcome  To  Watch  Meaningful  Words. If You Want To See Meaningful Words Tap The Rose Below''";
function Process()
{
    let number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    document.getElementById('huc').innerText = "Advice #" + number;
}
function OtherProcess()
{
    var things = ['"No one can make you feel inferior without your consent.Never give it ( - Eleanor Roosevelt)"', 
    '"It was a high counsel that I once heard given  to a young person ,always do what you are afraid to do ( - Ralph Waldo Emerson)"', 
    '"Death is not the greatest loss in life.The greatest loss is what dies inside us while we live ( - Norman Cousins)"',
    '"Love does not make the world go round .Love is what makes the ride worthwhile ( - Franklin P.Jones)"',
    '"Seek opportunity,not security .A boat in a harbour is safe ,but in time its bottom will rot out ( - H.Jackson Brown Jr)"',
    '"Do not wait to strike till the iron is hot ;but make it hot by striking ( - William B.Sprague)"',
    '"A happy person is not a person in a certain set of circumstances ,but rather a person with a certain set of attitudes ( - Hugh Downs)"',
    '"You are never too old to set another goal or to dream a new dream ( - C.S.Lewis)"',
    '"Life shrinks or expands in proportion to one is courage ( - Anais Nin)"',
    '"You do not get choose how you are going to die. or when. But you can decide how you are going to live now ( - Joan Baez)"'
];
    var thing = things[Math.floor(Math.random()*things.length)];
    document.getElementById('words').innerText = thing;
}