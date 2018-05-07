// GLOBAL VARIABLES

var onRepeat = 0;
var rB;

// Load function: called onLoad of body
function load()
{
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.loadManifest([
		{id: "s1", src: "The Beaver!.mp3"},
        {id: "s2", src: "The Beezer!.mp3"},
        {id: "s3", src: "That's Quite the Tug.mp3"},
        {id: "s4", src: "Not The Beaver.mp3"},
        {id: "s5", src: "Daddy's Enjoying This.mp3"},
        {id: "s6", src: "I've Done It!!.mp3"},
        {id: "s7", src: "The Angry Dragons!.mp3"},
		{id: "s8", src: "Yeah This Game Sucks.mp3"}
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