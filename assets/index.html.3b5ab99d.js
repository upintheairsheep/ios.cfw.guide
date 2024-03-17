import{_ as r}from"./Odysseyn1x.f106730e.js";import{_ as c,r as l,o as u,c as d,a as e,b as o,d as t,w as s,e as a}from"./app.393effbf.js";const h={},p=a('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide, and will need to obtain a bootable medium and follow the below steps using that bootable medium.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This guide does not currently account for the Apple TV 4K (1st Generation) at this time.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div>',3),y=e("p",null,"Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking the Apple TV HD and Apple TV 4K (1st Generation) on firmwares 12.0 to 14.7.",-1),m=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),o(" Requisiti")],-1),_=e("li",null,[o("A 256MB or greater USB Drive "),e("ul",null,[e("li",null,"If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive")])],-1),f={href:"https://github.com/raspberryenvoie/odysseyn1x/releases",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[o('For 64-bit computers, download the "AMD64" version '),e("ul",null,[e("li",null,`It doesn't matter if you have an AMD processor or not, "AMD64" is just the name of the architecture`)])],-1),g=e("li",null,'For 32-bit computers, download the "i686" version',-1),w=e("li",null,"An Apple TV Siri remote (any generation)",-1),k={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},x=a('<p><img src="'+r+'" alt="Uno screenshot del menu Odysseyn1x"></p><h2 id="installing-ventoy" tabindex="-1"><a class="header-anchor" href="#installing-ventoy" aria-hidden="true">#</a> Installing Ventoy</h2><ol><li>Scarica ed estrai il contenuto del file <code>Ventoy.zip</code></li><li>Inserisci l&#39;unit\xE0 USB se non l&#39;hai gi\xE0 fatto e apri il file <code>Ventoy2Disk.exe</code></li><li>Select the USB drive you would like to boot Odysseyn1x from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Fai clic su <code>Install</code> e conferma di essere d&#39;accordo con il cancellare l&#39;unit\xE0 USB <ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once it has installed, copy the Odysseyn1x iso file that you downloaded onto the USB drive</li></ol><h2 id="booting-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#booting-odysseyn1x" aria-hidden="true">#</a> Booting Odysseyn1x</h2><ol><li>Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li><li>Press enter once you see the Ventoy screen to boot into Odysseyn1x</li></ol><h2 id="running-checkra1n" tabindex="-1"><a class="header-anchor" href="#running-checkra1n" aria-hidden="true">#</a> Running checkra1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',7),S=e("li",null,[o("Una volta caricato odysseyn1x, seleziona "),e("code",null,"checkra1n"),e("ul",null,[e("li",null,[o("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),o(", then enable the "),e("code",null,"Allow Untested Versions")])])],-1),B=e("li",null,[o("Clicca "),e("code",null,"Start"),o(" e segui le istruzioni a schermo")],-1),U=e("code",null,"Start",-1),A=e("ul",null,[e("li",null,"Follow the instructions until your device reboots to a black screen")],-1),D=e("li",null,"Once your device boots, you can quit checkra1n, but do not shut down your computer",-1),V=e("p",null,":::",-1),I=e("p",null,"You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.",-1);function O(C,N){const i=l("router-link"),n=l("ExternalLinkIcon");return u(),d("div",null,[p,e("p",null,[o("Odysseyra1n is a "),t(i,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:s(()=>[o("semi-tethered jailbreak")]),_:1}),o(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.")]),y,m,e("ul",null,[_,e("li",null,[o("L'ultima versione di "),e("a",f,[o("Odysseyn1x"),t(n)]),e("ul",null,[e("li",null,[o("Se sei su un dispositivo A7, dovresti utilizzare la versione v2.12-checkra1n-0.10.1 di "),e("a",b,[o("Odysseyn1x"),t(n)])]),v,g])]),w,e("li",null,[e("a",k,[o("Ventoy"),t(n)])])]),x,e("ol",null,[S,B,e("li",null,[o("Ora vedrai le istruzioni su come riavviare il tuo dispositivo in "),t(i,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[o("modalit\xE0 DFU")]),_:1}),o(", clicca "),U,o(" per iniziare "),A]),D]),V,I])}var M=c(h,[["render",O],["__file","index.html.vue"]]);export{M as default};
