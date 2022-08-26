/*
    Copy paste the code (`naive-implementation.js`) in dev tools console,
        you find it under `help` > `toggle developer tools`.

    It may not work upon initial opening of files,
        but `double-clicking` in either file explorer or tabs seems to resolve it.

    Stop it by running the function logged to the console
        by `right-clicking` > `store function as global variable`
        and then call it like `temp1();` (after switching tabs it should revert).
*/

// anonymous code block
{
    // DIV which contains lines of code in currently active tab
    //     needs to be var to be seen/used within the following arrow functions
    var target = document.getElementsByClassName('view-lines')[0],
        disable = false;
    // Configuration for observe()
    const config = Object.freeze( { childList: true, subtree: true } ),
        // Keywords and with what images to replace them
        keywords = Object.freeze( {
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
            'speed': 'https://static-cdn.jtvnw.net/emoticons/v2/305526380/default/dark/3.0',
            'CODDERS': 'https://cdn.betterttv.net/emote/6006ea35f4d51165fed87b6e/3x',
            'peepoPing': 'https://cdn.betterttv.net/emote/60d9cefe8ed8b373e421abc7/3x',
            'peepoD': 'https://cdn.betterttv.net/emote/624d34783c6f14b688448955/3x',
            'NODDERS': 'https://cdn.betterttv.net/emote/62b101876ef7a5f0b7df9092/3x',
            'NOPERS': 'https://cdn.betterttv.net/emote/62b105936ef7a5f0b7df90fd/3x',
            'Pog': 'https://cdn.betterttv.net/emote/5ff827395ef7d10c7912c106/3x',
            'Nog': 'https://cdn.frankerfacez.com/emote/289028/2',
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
            'wirtHomi': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e06b8735fa48437fbec91885e8858557/default/dark/3.0',
            'COPIUM': 'https://cdn.betterttv.net/emote/62d70d78d991a3e26c12d7c4/3x',
            'wirtCut': 'https://static-cdn.jtvnw.net/emoticons/v2/301488926/default/dark/3.0',
            'DinkDonk': 'https://cdn.betterttv.net/emote/6083732039b5010444d051e8/3x',
            'peepoShy': 'https://cdn.betterttv.net/emote/62f24c74ecbd41815423b446/3x',
        } ),
        /** @type {()=>HTMLElement[]} */
        getElementsByXPath = $x, // ( https://developer.chrome.com/docs/devtools/console/utilities/#xpath-function )
        transform = (mutationList, observer)=>{
            observer.disconnect();
            if (disable) return;
            target = document.getElementsByClassName('view-lines')[0];
            for (const [word, link] of Object.entries(keywords)){
                const elems = getElementsByXPath(`//*[text()='${word}']`);
                for (const ele of elems){
                    ele.style.backgroundImage = `url(${link})`;
                    ele.style.backgroundRepeat = 'no-repeat';
                    ele.style.backgroundPosition = 'bottom';
                    ele.style.backgroundSize = 'contain';
                    ele.style.color = 'transparent';
                    ele.title = word;
                }
            }
            observer.observe(target, config);
        },
        // Observe changes in div
        open_file = ()=>{
            if (disable){
                document.getElementsByClassName('tabs-container')[0].removeEventListener('click', open_file);
                document.getElementsByClassName('explorer-viewlet')[0].removeEventListener('click', open_file);
            } else transform([], observer);
        },
        observer = new MutationObserver(transform);
    observer.observe(target, config);

    // Click in file tabs
    document.getElementsByClassName('tabs-container')[0].addEventListener('click', open_file);
    // Click in file explorer
    document.getElementsByClassName('explorer-viewlet')[0].addEventListener('click', open_file);

    // Log the function to stop observing to console
    console.log(
        '%cCall the following function to stop the W++ mode\n%O',
        'background-color: #000; color: #0f0; font-size: larger;',
        ()=>{
            observer.disconnect();
            disable = true;
            return 'stopped observing';
        }
    );
}