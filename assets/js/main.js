let shellBefehle = document.getElementById('shellBefehle');
let gitBefehle = document.getElementById('gitBefehle');

function slideInShell() {
    shellBefehle.style.visibility = 'visible';
    gitBefehle.style.visibility = 'hidden';

}

function slideOutShell() {
    shellBefehle.style.visibility = 'hidden';
    gitBefehle.style.visibility = 'visible';
}