        var parent = document.getElementById("terminal");
        var div = document.createElement('div');
        div.innerHTML = `
        <pre>              /\\____/\\    __
             .'  """"  \`,-'  \`--.__
        __,- :   -  -  ;  " ::     \`-. -.__
     ,-sssss \`._  \`' _,'"     ,'~~~::\`.sssss-.
    |ssssss ,' ,_\`--'_    __,' ::  \`  \`.ssssss|
   |sssssss \`-._____~ \`,,'_______,---_;; ssssss|
    |ssssssssss     \`--'~{__   ____   ,'ssssss|
     \`-ssssssssssssssssss ~~~~~~~~~~~~ ssss.-'
          \`---.sssssssssssssssssssss.---'</pre>
          <div id='info'><a>[iucc@grandma-does.tech]</a><br><br><a id="note">Type "help" for a list of commands</a></div>`;
        div.setAttribute('class', 'terminalOutput');
        div.setAttribute('id', 'welcome');
        div.style.opacity = 0;
        setTimeout(function(){
            div.style.opacity = 1;
        }, 100)
        parent.appendChild(div);
        var commandList = [ "ls", "cd", "help", "open", "clear", "cat" ]
        var dir = '~'
        function sendCommand(){
            var command = document.getElementById("inputField").value;
            executeCommand(command)
        }
        function executeCommand(command){
            command = command.replaceAll('<', '').replaceAll('>', '') // nop.
            const args = command.split(' ')
            var parent = document.getElementById("terminal");
            var div = document.createElement('div');
            div.innerHTML = `[iucc@grandma-does.tech ${dir}] ${command}`
            div.setAttribute('class', 'terminalOutput');
            parent.appendChild(div);
            if(!commandList.includes(args[0])) {
                var div = document.createElement('div');
                div.innerHTML = `bash: ${args[0]}: command not found`
                div.setAttribute('class', 'terminalOutput');
                parent.appendChild(div);
                return;
            }
            if(args[0] == 'help'){
                var div = document.createElement('div');
                div.innerHTML = `GNU bash, version 5.2.21(1)-release (x86_64-pc-linux-gnu)<br>These shell commands are defined internally.  Type "help" to see this list.<br>A star (*) next to a name means that the command is disabled.<br><br>help<br>cd [dir]<br>ls<br>open [file]<br>clear<br>cat [file]`
                div.setAttribute('class', 'terminalOutput');
                parent.appendChild(div);
            }
            if(args[0] == "ls"){
                if(dir === '~'){
                    var div = document.createElement('div');
                    var a = document.createElement('a');
                    a.innerText = `pages`
                    div.setAttribute('class', 'terminalOutput');
                    div.appendChild(a)
                    parent.appendChild(div);
                }
                else if(dir === '~/pages'){
                    var div = document.createElement('div');
                    var a = document.createElement('a');
                    a.innerText = `index.html`
                    div.setAttribute('class', 'terminalOutput');
                    div.appendChild(a)
                    parent.appendChild(div);
                }
            }
            if(args[0] == "cd"){
                if(args[1] == 'pages'){
                    dir = '~/pages'
                    var div = document.createElement('div');
                    var a = document.createElement('a');
                    a.innerText = `[iucc@grandma-does.tech ${dir}] `
                    div.setAttribute('class', 'terminalOutput');
                    div.appendChild(a)
                    parent.appendChild(div);
                }
                if(args[1] == '..'){
                    if (dir !== '~'){
                        dir = dir.substring(0, dir.lastIndexOf('/'))
                        var div = document.createElement('div');
                        var a = document.createElement('a');
                        a.innerText = `[iucc@grandma-does.tech ${dir}] `
                        div.setAttribute('class', 'terminalOutput');
                        div.appendChild(a)
                        parent.appendChild(div);
                    }
                }
            }
            if(args[0] == "open"){
                if(dir == '~/pages'){
                    if(args[1] == 'index.html'){
                        window.open('https://grandma-does.tech', '_blank')
                    }
                }
            }
            if(args[0] == "clear"){
                var parent = document.getElementById("terminal");
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            if(args[0] == "cat"){
                if(dir == '~/pages'){
                    if(args[1] == 'index.html'){
                        var page = document.documentElement.innerHTML
                        var div = document.createElement('div');
                        var pre = document.createElement('pre');
                        pre.innerText = `${page}`
                        div.setAttribute('class', 'terminalOutput');
                        div.appendChild(pre)
                        parent.appendChild(div);
                    }
                }
            }
        }
        var input = document.getElementById("inputField");
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("enterBtn").click();
                setTimeout(function(){
                    input.value = ''
                }, 100)
            }
        });