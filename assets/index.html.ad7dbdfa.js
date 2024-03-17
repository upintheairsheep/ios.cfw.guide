import{_ as l,r as a,o as n,c as r,a as e,b as t,d as s,e as o}from"./app.393effbf.js";const c={},d=e("p",null,`This will take you through installing the iOS 17 "tvOS profile" to block updates on your device. It's easy to install and ensures you'll stay on the firmware you're currently on. This is useful if you're waiting for a jailbreak for a lower version and don't want to update in case it gets patched.`,-1),u=e("h2",{id:"installing-the-tvos-profile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-tvos-profile","aria-hidden":"true"},"#"),t(" Installing the tvOS profile")],-1),p=e("li",null,[t("Set your device's date to any point before December 14th, 2023 "),e("ul",null,[e("li",null,"This is so that the profile can be installed despite an expired certificate, and can be set back to normal after the profile is installed.")])],-1),h={href:"http://152.53.13.42:6969/17.mobileconfig",target:"_blank",rel:"noopener noreferrer"},f=o("<li>Select &quot;Allow&quot; if prompted</li><li>Open the Settings application</li><li>Navigate to <code>General</code> -&gt; <code>Profile</code><ul><li>This may also be called <code>Profile and Device Management</code></li></ul></li><li>Tap on the tvOS Beta Profile you just installed</li><li>Tap &quot;Install&quot;</li><li>Confirm by tapping &quot;Install&quot; again <ul><li>Enter your passcode if you have one</li></ul></li><li>Tap &quot;Install&quot; for a third time</li><li>Restart your device when prompted</li>",8),g=o('<p>Your device should no longer receive software updates. You can confirm this by going to <code>Settings &gt; General &gt; Software Update</code>, and if it shows that &quot;iOS is up to date&quot;, you are successfully blocking updates.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can now set your devices date back to the current date.</p></div><h2 id="uninstalling-the-tvos-profile" tabindex="-1"><a class="header-anchor" href="#uninstalling-the-tvos-profile" aria-hidden="true">#</a> Uninstalling the tvOS Profile</h2><p>If you want to update your system again, follow the following steps to remove update blocking.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>By removing update blocking, you may unintentionally update to a higher firmware, and be unable to jailbreak.</p></div><ol><li>Open the Settings application</li><li>Go to <code>General</code> -&gt; <code>Profile</code></li></ol><ul><li>This may also be called <code>Profile and Device Management</code></li></ul><ol start="3"><li>Tap on the tvOS Beta Profile</li><li>Tap &quot;Remove Downloaded Profile&quot;</li></ol><p>Your device should now be able to update again.</p>',9);function v(m,y){const i=a("ExternalLinkIcon");return n(),r("div",null,[d,u,e("ol",null,[p,e("li",null,[t("Open "),e("a",h,[t("http://152.53.13.42:6969/17.mobileconfig"),s(i)]),t(" in your device's browser")]),f]),g])}var _=l(c,[["render",v],["__file","index.html.vue"]]);export{_ as default};
