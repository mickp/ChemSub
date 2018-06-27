

const replmap = {H2O: "H₂O",
                 CO2: "CO₂",
                 O2:  "O₂",
                 C6H12O6: "C₆H₁₂O₆",
                 C8H10N4O2: "C₈H₁₀N₄O₂",
                 CH3CH2OH: "CH₃CH₂OH",
                 };

var re = new RegExp(Object.keys(replmap).join("|"),"g");

var nodes = [];
var n;
walk=document.createTreeWalker(document.body,
                               NodeFilter.SHOW_TEXT,
                               null, false);
while(n=walk.nextNode()) nodes.push(n);

nodes.forEach( node => {
    node.textContent = node.textContent.replace(re, match => {
        return replmap[match];
    });
});