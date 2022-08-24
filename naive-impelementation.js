// Run this code in dev tools console
// Doesn't work upon initial opening of file but double clicking in
// either file explorer or tabs seems to resolve it

// Stop it by running "observer.disconnect()" in console


// div which contains lines of code
var target = document.getElementsByClassName('view-lines')[0]
const config = { childList: true, subtree: true };
const transform = function(){
    // Bind $x to const to execute XPath in function later on
    const asd = $x;
    const keywords = {
        'believers': 'https://cdn.betterttv.net/emote/6260126d3c6f14b68845c0df/3x',
        'doubters': 'https://cdn.betterttv.net/emote/626012843c6f14b68845c0f6/3x',
        'COGGERS': 'https://cdn.betterttv.net/emote/608af9bb39b5010444d089ee/3x',
        'POGSLIDE': 'https://cdn.betterttv.net/emote/6085d04139b5010444d062ab/3x',
        'Bedge': 'https://cdn.betterttv.net/emote/6175f4321f8ff7628e6ae02a/3x',
        'Prayge': 'https://cdn.betterttv.net/emote/62c323668fd4516906a8e61f/3x',
        'Sadge': 'https://cdn.betterttv.net/emote/62e72c24d991a3e26c13bc2a/3x',
        'KEKW': 'https://cdn.betterttv.net/emote/5ea831f074046462f768097a/3x',
        'WirtuaL': '',
        'peepoHey': 'https://cdn.betterttv.net/emote/62b0faf76ef7a5f0b7df8fe4/3x',
        'peepoLeave': 'https://cdn.betterttv.net/emote/629b79f73c6f14b688497eb4/3x',
        'peepoTalk': 'https://cdn.betterttv.net/emote/62b0eb2f6ef7a5f0b7df8ea2/3x',
        'PepoG': 'https://cdn.betterttv.net/emote/607c108f39b5010444d018f4/3x',
        'WAYTOODANK': 'https://cdn.betterttv.net/emote/62bba10865092c1291b9e05f/3x',
        'speed': 'https://static-cdn.jtvnw.net/emoticons/v2/305526380/default/light/1.0',
        'CODDERS': 'https://cdn.betterttv.net/emote/6006ea35f4d51165fed87b6e/3x',
        'peepoPing': 'https://cdn.betterttv.net/emote/60d9cefe8ed8b373e421abc7/3x',
        'peepoD': 'https://cdn.betterttv.net/emote/624d34783c6f14b688448955/3x',
        'NODDERS': 'https://cdn.betterttv.net/emote/62b101876ef7a5f0b7df9092/3x',
        'NOPERS': 'https://cdn.betterttv.net/emote/62b105936ef7a5f0b7df90fd/3x',
        'Pog': 'https://cdn.betterttv.net/emote/5ff827395ef7d10c7912c106/3x',
        'Nog': '',
        'PETTHEMOD': 'https://cdn.betterttv.net/emote/61092aa92d1eba5400d321ac/3x',
        'YEP': 'https://cdn.betterttv.net/emote/61523af7b63cc97ee6d3a36d/3x',
        'NOP': 'https://cdn.betterttv.net/emote/5eb90a3a9af1ea16863a9581/3x',
        'less': '',
        'loe': '',
        'greater': '',
        'goe': '',
        'WaitWhat': 'https://cdn.betterttv.net/emote/629a5e443c6f14b688496f42/3x',
        'GIGASHY': 'https://cdn.betterttv.net/emote/62192e3e06fd6a9f5be594c7/3x',
        'modCheck': 'https://cdn.betterttv.net/emote/62b04a396ef7a5f0b7df84e3/3x',
        'GIGACHAD': 'https://cdn.betterttv.net/emote/62aef6bc6ef7a5f0b7df75c5/3x',
        'wirtHomi': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e06b8735fa48437fbec91885e8858557/default/light/1.0',
        'COPIUM': 'https://cdn.betterttv.net/emote/62d70d78d991a3e26c12d7c4/3x',
        'wirtCut': 'https://static-cdn.jtvnw.net/emoticons/v2/301488926/default/light/1.0',
        'DinkDonk': 'https://cdn.betterttv.net/emote/6083732039b5010444d051e8/3x',
        'peepoShy': 'https://cdn.betterttv.net/emote/62f24c74ecbd41815423b446/3x',
    };
    const func = function(mutationList, observer){
        observer.disconnect();
        target = document.getElementsByClassName('view-lines')[0]
        for (const [word, link] of Object.entries(keywords)){
            const xpath = "//*[text()='" + word + "']";
            const elems = asd(xpath);
            for (const ele of elems){
                if (ele.style.display == 'None'){
                    continue;
                }
                if (ele.nextElementSibling && ele.nextElementSibling.nodeName == 'IMG'){
                    continue;
                }
                let a = new Image;
                a.src = link;
                const size = window.getComputedStyle(ele).getPropertyValue('font-size');
                a.width = size.substring(0, size.length-2);
                ele.parentNode.insertBefore(a, ele.nextSibling);
                ele.style.display = 'None';
            }
        }
        observer.observe(target, config);
    }
    return func
}();

// Observe changes in div
const observer = new MutationObserver(transform);
observer.observe(target, config);
function open_file(){
    target = document.getElementsByClassName('view-lines')[0];
    transform([], observer);
    observer.observe(target, config);
}

// Click in file tabs
document.getElementsByClassName('tabs-container')[0].addEventListener('click', open_file);
// Click in file explorer
document.getElementsByClassName('explorer-viewlet')[0].addEventListener('click', open_file);