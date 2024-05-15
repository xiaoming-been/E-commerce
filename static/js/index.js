// 头部选项卡
// 初始化页面时加载第一个选项卡的数据
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab_links');
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
});

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

    // 检查当前选项卡是否为第一个选项卡
    if (tabName === "overview") {
        document.getElementById("overview").style.display = "flex";
    } else {
        document.getElementById("overview").style.display = "none";
    }
}

/* 总览选项卡 */
// 初始化页面时加载第一个选项卡的数据
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.overview_tab_links');
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
});
function open_overview_tab(evt, tabName) {
    var i, tab_content, tab_links;
    tab_content = document.getElementsByClassName("overview_tab_content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
    tab_links = document.getElementsByClassName("overview_tab_links");
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
    // 检查当前选项卡是否为第一个选项卡
    if (tabName === "overview_tab") {
        document.getElementById("overview_tab").style.display = "flex";
    } else {
        document.getElementById("overview_tab").style.display = "none";
    }
}