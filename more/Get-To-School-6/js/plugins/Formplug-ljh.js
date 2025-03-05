/*:
 * @target MZ
 * @plugindesc Allows users to give a thumbs up, down or wiggle to Formbar and interact with Formbar API via socket.io-client.
 * @author Bryce Lynd & Landon Harnish
 * 
 * @command thumbsUp
 * @text Thumbs Up
 * @desc Sends a ThumbsUp
 * 
 * @command thumbsDown
 * @text Thumbs Down
 * @desc Sends a ThumbsDown
 * 
 * @command wiggle
 * @text Wiggle
 * @desc Sends a Wiggle
 * 
 * @command remove
 * @text Remove
 * @desc Removes the user's vote
 * 
 * @command help
 * @text Need Help
 * @desc Sends a help ticket
 * 
 * @command requestBreak
 * @text Request a Break
 * @desc Requests a break
 * 
 * @command endBreak
 * @text End Break
 * @desc Ends a break
 * 
 * @help
 * This plugin allows users to give a thumbs up, down or wiggle to Formbar.
 * 
 * Plugin Commands:
 *  Formplug-ljh thumbsUp
 *  Formplug-ljh thumbsDown
 *  Formplug-ljh wiggle
 *  Formplug-ljh remove
 *  Formplug-ljh help
 *  Formplug-ljh requestBreak
 *  Formplug-ljh endBreak
 * 
 * 
 */

(() => {
    const FORMBAR_URL = 'https://formbeta.yorktechapps.com/';
    const API_KEY = 'bf38b28a0dfebb6b73a1e08a5b84c7e9a46d2b3b34bb371d372eab1f786181b17d55b85ed08ebddf65de5044ed40350e0916309dbf0ac5f07157c913ba5a6f9c';
    let response = '';
    
    // Check if Socket.IO is already loaded
    if (typeof io === "undefined") {
        let script = document.createElement("script");
        script.src = "https://cdn.socket.io/4.7.2/socket.io.min.js";
        script.onload = function () {
            console.log("Socket.IO loaded!");
            startSocketConnection(); // Call function to initialize socket after loading
        };
        document.head.appendChild(script);
    } else {
        startSocketConnection();
    }

    function startSocketConnection() {
        const socket = io(FORMBAR_URL, {
            extraHeaders: {
                api: API_KEY
            }
        }); // Replace with your server URL

        socket.on('connect', () => {
            console.log('Connected');
            socket.emit('getActiveClass');
        });

        socket.on('setClass', (classId) => {
            console.log(`The user is currently in the class with id ${classId}`);
        });

        socket.on('connect_error', (error) => {
            if (error.message == 'xhr poll error') {
                console.log('no connection');
            } else {
                console.log(error.message);
            }

            setTimeout(() => {
                socket.connect();
            }, 5000);
        });

        let classId = 0;
        socket.on('setClass', (userClass) => {
            classId = userClass;
        });

        socket.on('classEnded', () => {
            socket.emit('leave', classId);
            classId = '';
            socket.emit('getUserClass', { api: API_KEY });
        });

        socket.on('joinRoom', (classCode) => {
            if (classCode) {
                socket.emit('vbUpdate');
            }
        });

        socket.on('vbUpdate', (data) => {
            //console.log(data);
            const pollOptions = Object.keys(data.polls);
            let pollString = '';
            pollOptions.forEach((option) => {
                pollString += `[${data.polls[option].answer}: ${data.polls[option].responses}] (${data.polls[option].color}) | `;
            });

            console.log(`Current Data: | ${pollString}|`)
        });

        /*-------------------------------------------------*/
        /*  */

        PluginManager.registerCommand("Formplug-ljh", "thumbsUp", () => {
            console.log("Voted: Up");
            response = 'up';
            socket.emit("pollResp", "Up");
        });
        PluginManager.registerCommand("Formplug-ljh", "thumbsDown", () => {
            console.log("Voted: Down");
            response = 'down';
            socket.emit('pollResp', "Down");
        });
        PluginManager.registerCommand("Formplug-ljh", "wiggle", () => {
            console.log("Voted: Wiggle");
            response = 'wiggle';
            socket.emit('pollResp', 'Wiggle');
        });
        PluginManager.registerCommand("Formplug-ljh", "remove", () => {
            console.log("Removed Vote");
            response = 'none';
            socket.emit('pollResp','remove');
        });
        PluginManager.registerCommand("Formplug-ljh", "help", () => {
            console.log("Asked for help...");
            
            socket.emit('help');
        });
        PluginManager.registerCommand("Formplug-ljh", "requestBreak", () => {
            console.log("Requested a break...");
            
            socket.emit('requestBreak', 'landons here pal');
        });
        PluginManager.registerCommand("Formplug-ljh", "endBreak", () => {
            console.log("Ended a break...");
            
            socket.emit('endBreak');
        });
    }

})();