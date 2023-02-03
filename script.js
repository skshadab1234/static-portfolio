let menuButton = document.getElementById('OpenButton_Menu');
let headlessui_dialog = document.getElementById("headlessui-dialog-24")
let close_navigation = document.getElementById("close_navigation")
let theme_listbox = document.getElementById('headlessui-listbox-button-16')
let HtmlTag = document.querySelector('html')
// Menu Bar Toggle 
menuButton.addEventListener('click', () => {
    headlessui_dialog.classList.remove("hidden")
    headlessui_dialog.classList.add("block")
})

close_navigation.addEventListener('click', () => {
    headlessui_dialog.classList.remove("block")
    headlessui_dialog.classList.add("hidden")
})

// Theme Toggle Logic 
theme_listbox.addEventListener('click', () => {
    // 0 = dark 
    // 1 = light 
    HtmlTag.classList.toggle('dark')

    if(HtmlTag.className == 'dark') {
        theme_listbox.children[0].classList.add('dark:hidden')
        theme_listbox.children[1].classList.remove('dark:hidden')
    }
    
    if(HtmlTag.className == '') {
        theme_listbox.children[0].classList.remove('dark:hidden')
        theme_listbox.children[1].classList.add('dark:hidden')
    }

    console.log(HtmlTag.className);

    
})