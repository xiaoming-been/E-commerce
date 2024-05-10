function openTab(evt, tabName) {
    var i, tab_content, tab_links;
    tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++) {
         tab_content[i].style.display = "none";
    }
    tab_links = document.getElementsByClassName("tab_links");
    for (i = 0; i < tab_links.length; i++) {
         tab_links[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
