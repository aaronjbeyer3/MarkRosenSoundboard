// GLOBAL VARIABLES

var onRepeat = 0;
var rB;

// Load function: called onLoad of body
function load()
{
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.loadManifest([
		{id: "s1", src: "mp3/theBeaver.mp3"},
        {id: "s2", src: "mp3/theBeezer.mp3"},
        {id: "s3", src: "mp3/thatsQuiteTheTug.mp3"},
        {id: "s4", src: "mp3/notTheBeaver.mp3"},
        {id: "s5", src: "mp3/daddysEnjoyingThis.mp3"},
        {id: "s6", src: "mp3/iveDoneIt.mp3"},
        {id: "s7", src: "mp3/theAngryDragons.mp3"},
		{id: "s8", src: "mp3/yeahThisGameSucks.mp3"}
    ]);

    rB = document.getElementById("repeatBtn");
}

function playSound(sound_name)
{
    createjs.Sound.play(sound_name, "none", 0, 0, onRepeat, 1, 0, null, null);
}

function repeat()
{
    if(onRepeat == 0)
    {
        onRepeat = -1;
        rB.textContent = "Repeat: On"
    }
    else
    {
        onRepeat = 0;
        rB.textContent = "Repeat: Off"
    }

}