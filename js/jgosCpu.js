import{ questionCpuParts001,optionsCpuParts001, optionsCpuParts002, optionsCpuParts003, l, j} from './variables.js'



function intiGameCpu(){
    disappearcpuParts001.innerHTML = "";
messagecpuParts001.innerHTML = questionCpuParts001[0];
messagecpuParts002.innerHTML = optionsCpuParts001;
numbercpuParts001.innerHTML = l++; 
}

function qCpuPart1c() {
    messagecpuParts003.innerHTML = "Correcto";
    messagecpuParts002.innerHTML = "";
    scorecpuParts001.innerHTML = j++;
    messagecpuParts004.innerHTML = "<button class=buttons002 onclick=nextCpuPart001()>Siguiente</button>";
    }
    
    function qCpuPart1i() {
    messagecpuParts003.innerHTML = "Incorrecto";
    messagecpuParts002.innerHTML = "";
    messagecpuParts004.innerHTML = "<button class=buttons002 onclick=nextCpuPart001()>Siguiente</button>";
    }
    
    function nextCpuPart001() {
    if (l == "2") {
        messagecpuParts001.innerHTML = questionCpuParts001[1];
        messagecpuParts002.innerHTML = optionsCpuParts002;
        messagecpuParts003.innerHTML = "";
        numbercpuParts001.innerHTML = l++;
        messagecpuParts004.innerHTML = "";
    }
    }
    /* 
    else if (i == "3") {
        messagecpuParts001.innerHTML = questionCpuParts001[2];
        messagecpuParts002.innerHTML = optionsCpuParts003;
        messagecpuParts003.innerHTML = "";
        numbercpuParts001.innerHTML = i++;
        messagecpuParts004.innerHTML = "";
    }
    
    
    else if (i == "4") {
        messagecpuParts001.innerHTML = questionCpuParts001[3];
        messagecpuParts002.innerHTML = optionsPMFailures004;
        messagecpuParts003.innerHTML = "";
        numbercpuParts001.innerHTML = i++;
        messagecpuParts004.innerHTML = "";
    }
    
    else if (i == "5") {
        messagecpuParts001.innerHTML = questionCpuParts001[4];
        messagecpuParts002.innerHTML = optionsPMFailures005;
        messagecpuParts003.innerHTML = "";
        numbercpuParts001.innerHTML = i++;
        messagecpuParts004.innerHTML = "";
    }
    
    else if (i == "6") {
        messagePM001.innerHTML = questionPMFailures001[5];
        messagePM002.innerHTML = optionsPMFailures006;
        messagePM003.innerHTML = "";
        numberPM001.innerHTML = i++;
        messagePM004.innerHTML = "";
    }
    
    else if (i == "7") {
        messagePMFailures001.innerHTML = questionCpuParts001[6];
        messagePMFailures002.innerHTML = optionsPMFailures007;
        messagePMFailures003.innerHTML = "";
        numbercpuParts001.innerHTML = i++;
        messagePMFailures004.innerHTML = "";
    }
    
    else if (i == "8") {
        messagePMFailures001.innerHTML = questionCpuParts001[7];
        messagePMFailures002.innerHTML = optionsPMFailures008;
        messagePMFailures003.innerHTML = "";
        numberPMFailures001.innerHTML = i++;
        messagePMFailures004.innerHTML = "";
    }
    
     else {
        messagePMFailures001.innerHTML = "Fin del  Quiz";
        messagePMFailures002.innerHTML = "";
        messagePMFailures003.innerHTML = "";
        messagePMFailures004.innerHTML = "<button class=buttons002 onclick=repeat001()>Salir</button>";
    }
    }
     
    function repeat001() {
    location.reload();
    }
    */
    
    export{qCpuPart1c, qCpuPart1i, nextCpuPart001, intiGameCpu}