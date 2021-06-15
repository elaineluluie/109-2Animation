

// 網頁的主程式寫在這裡
// .ad-toggle-btn click event
$(".ad-toggle-btn").click(function () {
    console.log('[.ad-toggle-btn被點擊了]');

});

// .navbar .nav-link click event
$(".navbar .nav-link").click(function () {
    console.log('[nav-link was clicked]', this);
    // this在這邊代表我們用滑鼠點到的標籤 
    // Get the scrolling target for this anchor tag(this) 
    var target = $(this).attr("href");
    console.log(["target"], target);
    // Get the position of the target  
    var position = $(target).offset().top;
    console.log(["position"], position);
    // Set animation time for scrolling  
    var duration = 1000;
    // Run scrolling animation 
    // .animate( JavaScriptObject{} , duration秒數) 
    $("html,body").animate( {
        scrollTop: position
    } , duration )
});


