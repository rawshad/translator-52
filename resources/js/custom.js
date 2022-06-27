$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // hamburger menu function
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["একটি হার্ডওয়্যার সফটওয়্যার ইন্ট্রিগ্রেটেড ভার্চুয়াল স্মার্ট ডিভাইস।", "পৃথিবীর বিভিন্ন বক্তার আঞ্চলিক প্রভাব ও উচ্চারন প্রতিবন্ধকতা দূরীকরনে অডি ও বার্তাকে কথোপকথন, লিখন ও পঠন উপযোগী করার একটি ক্ষুদ্রতম প্রয়াস।", "একজন বধির ও প্রতিবন্ধী ব্যক্তি তার শিক্ষন প্রক্রিয়ায় অডিও বার্তাকে স্বয়ংক্রিয়ভাবে ভয়েস টু টেক্সট বার্তায় রূপান্তর এবং বার্তাকে কথোপকথন লিখন ও পঠন উপযোগী করে সামগ্রীক যোগাযোগ প্রক্রিয়ার কাজকে সম্পন্ন করে থাকে।"],
        typeSpeed: 30,
        backSpeed: 15,
        loop: true
    });
});