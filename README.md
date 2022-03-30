# MyBitburnerScripts
<h2>Description</h2>
Filled with my scripts.
<h2>Usage and Dependencies</h2>
<h3>GeneralHack-</h3>Pass 'Target-Server' for target(eg.n00dles),Then pass instance number for identification(eg.1)
<h3>GeneralHackV2-</h3>
<h4>Dependencies</h4>
autoupdater.js
<h4>Usage</h4>
Pass 'Target-Server' for target(eg.n00dles),Then pass a bool for changelog,The third argument is only used for autoupdater.js and programs that use GeneralHackV2 as an Asynchronous distributed attack script.
<h3>autoupdater.js-</h3>Just install it into home root directory.No need to setup.
<h4>For Programmers</h4>
autoupdater.js format Goes as follows:Name of Current Program,Host server,Threads,High-priority Alarm(bool),Additional data to pass into your script
<br />This Script is Local Only,autodownloader.js will be implemented later
<h3>PlayMusic.js-</h3><s>Just Install and run it.It will install and execute musicComputer.js by itself</s><br />
It will install and execute it fine,if you change some code in computerMusic.js <br />
You may have to change it every update(which is an hour after last update time and you execute the launcher)
<h4>Additional Changes</h4>
In order for PlayMusic.js to work its magic,you must change stuff in the original musicComputer.js script.<br />
change <br />	
<code>if (!ns.fileExists("Music.txt") || ns.args[0] != null) {
		await ns.wget(formatPathFile(ns.args[0]), "Music.txt")
	}</code><br />
to
<br /><code>if (!ns.fileExists("Music.txt") || ns.args[0] != (null || 0)) {
		await ns.wget(formatPathFile(ns.args[0]), "Music.txt")
}
  </code>
  <h4>Usage</h4>
 First pass the server argument. This will go to the specified server. Any vaild server name will do(including Home!). Enter a zero for default,which is MusicServer.<br />
 Then,pass a bool,0 or 1 for comfimation to purchase the server with the name if the server you're asking for is not available.<br />
 The third argument is the location of your listMusicBitburner.txt. Follow computerMusic.js' instructions in https://github.com/MatiasCardullo/JavaScripts-Bitburner
 <h3>autodownloader.js-</h3>Just like autoupdater.js,very easy to install but you will have to run the program yourself.<br />Commands is listed using the command help.<br />It also comes with dev protection.
 <h4>How to enable dev protection</h4>By changing the false to a true in datamgr.txt.
 
