var btn1 = document.getElementById("theme_btn1");
var btn2 = document.getElementById("theme_btn2");
var link = document.getElementById("theme_link");

btn1.addEventListener("click", function () { ChangeTheme(); });
btn2.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "../style/light.css";
    let darkTheme = "../style/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
        currTheme = darkTheme;
        theme = "dark";
    }
    else
    {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}