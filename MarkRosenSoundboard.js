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
		{id: "s8", src: "mp3/yeahThisGameSucks.mp3"},	
		{id: "s9", src: "mp3/69.mp3"},
		{id: "s10", src: "mp3/maybe69.mp3"},
		{id: "s12", src: "mp3/69v3.mp3"},
		{id: "s13", src: "mp3/69v4.mp3"},
		{id: "s14", src: "mp3/69v5.mp3"},
		{id: "s15", src: "mp3/askForItYouGotIt.mp3"},
		{id: "s16", src: "mp3/backUp.mp3"},
		{id: "s17", src: "mp3/comeOnWilly.mp3"},
		{id: "s18", src: "mp3/goodGod.mp3"},
		{id: "s19", src: "mp3/idahoPotatoSack.mp3"},
		{id: "s20", src: "mp3/imReady.mp3"},
		{id: "s21", src: "mp3/lookWhatYaDoneStarted.mp3"},
		{id: "s22", src: "mp3/nipple.mp3"},
		{id: "s23", src: "mp3/pass.mp3"},
		{id: "s24", src: "mp3/seeYaLaterImGone.mp3"},
		{id: "s25", src: "mp3/stillNotAPlaya.mp3"},
		{id: "s26", src: "mp3/swedishSombrero.mp3"},
		{id: "s27", src: "mp3/texasChiliBowl.mp3"},
		{id: "s29", src: "mp3/theHellChannelIsThis.mp3"},
		{id: "s30", src: "mp3/wellImStupid.mp3"},
		{id: "s31", src: "mp3/wheresSecurity.mp3"}
    ]);

    rB = document.getElementById("repeatBtn");
}

function playSound(sound_name)
{
    createjs.Sound.resume(sound_name, "none", 0, 0, onRepeat, 1, 0, null, null);
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