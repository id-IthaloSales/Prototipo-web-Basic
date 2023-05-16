var header           = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content          = document.getElementById('content');
var showSidebar      = false;

function toggleSidebar()

    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(1px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }




function closeSidebar()
{
    if(showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
};