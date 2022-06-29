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
        strings: ["একটি হার্ডওয়্যার সফটওয়্যার ইন্ট্রিগ্রেটেড ভার্চুয়াল স্মার্ট ডিভাইস।", "পৃথিবীর বিভিন্ন বক্তার আঞ্চলিক প্রভাব ও উচ্চারন প্রতিবন্ধকতা দূরীকরনে অডি ও বার্তাকে কথোপকথন, লিখন ও পঠন উপযোগী করার একটি ক্ষুদ্রতম প্রয়াস।", "একজন বধির ও প্রতিবন্ধী ব্যক্তি তার শিক্ষন প্রক্রিয়ায় অডিও বার্তাকে স্বয়ংক্রিয়ভাবে ভয়েস টু টেক্সট বার্তায় রূপান্তর এবং বার্তাকে কথোপকথন লিখন ও পঠন উপযোগী করে সামগ্রীক যোগাযোগ প্রক্রিয়ার কাজকে সম্পন্ন করে থাকে।","একটি হার্ডওয়্যার সফটওয়্যার ইন্ট্রিগ্রেটেড ভার্চুয়াল স্মার্ট ডিভাইস।", "পৃথিবীর বিভিন্ন বক্তার আঞ্চলিক প্রভাব ও উচ্চারন প্রতিবন্ধকতা দূরীকরনে অডি ও বার্তাকে কথোপকথন, লিখন ও পঠন উপযোগী করার একটি ক্ষুদ্রতম প্রয়াস।", "একজন বধির ও প্রতিবন্ধী ব্যক্তি তার শিক্ষন প্রক্রিয়ায় অডিও বার্তাকে স্বয়ংক্রিয়ভাবে ভয়েস টু টেক্সট বার্তায় রূপান্তর এবং বার্তাকে কথোপকথন লিখন ও পঠন উপযোগী করে সামগ্রীক যোগাযোগ প্রক্রিয়ার কাজকে সম্পন্ন করে থাকে।"],
        typeSpeed: 30,
        backSpeed: 15,
        loop: true
    });
    // gallery light-box script
    // 1-select elements
    const gallery = document.querySelectorAll(".image");
    const previewBox = document.querySelector(".preview-box");
    const previewImg = previewBox.querySelector("img");
    const closeIcon = previewBox.querySelector(".icon");
    const currentImg = previewBox.querySelector(".current-img");
    const totalImg = previewBox.querySelector(".total-img");
    const shadow = document.querySelector(".shadow");

    window.onload = () => {// once window loaded
        for (let i = 0; i < gallery.length; i++) {
            totalImg.textContent = gallery.length;//passing gallery img length to totalImg
            let newIndex = i;//passing i value to newIndex varriable
            let clickImgIndex;
            gallery[i].onclick = () => {
                clickImgIndex = newIndex //passing clicked img index to clickImgIndex varriable
                console.log(i);
                function preview(){
                    currentImg.textContent = newIndex + 1;//passing new index value to currentImg with addition of one
                    let selectedImgUrl = gallery[newIndex].querySelector("img").src;//getting user activated image url
                    previewImg.src = selectedImgUrl;//passing user clicked image url
                    console.log(selectedImgUrl);
                }
                // previous and next button
                const prevBtn = document.querySelector(".prev");
                const nextBtn = document.querySelector(".next");
                if (newIndex == 0) {
                    prevBtn.style.display = "none";
                }
                if (newIndex >= gallery.length -1) {
                    nextBtn.style.display = "none";
                }
                prevBtn.onclick = () => {
                    newIndex--;//decrement new index value
                    if(newIndex == 0) {
                        preview();
                        prevBtn.style.display = "none";
                    }else{
                        preview();//calling again to update image
                        nextBtn.style.display = "block";
                    }
                }
                nextBtn.onclick = () => {
                    newIndex++;//decrement new index value
                    if(newIndex >= gallery.length -1) {
                        preview();
                        nextBtn.style.display = "none";
                    }else{
                        preview();//calling again to update image
                        prevBtn.style.display = "block";
                    }
                }
               
                preview();//calling preview function
                previewBox.classList.add("show");
                shadow.style.display = "block";
                document.querySelector(".g-sec").style.overflow = "hidden";
                closeIcon.onclick = () => {
                    newIndex = clickImgIndex; //assigning user first click img index to newIndex varriable;
                    previewBox.classList.remove("show");
                    prevBtn.style.display = "block";
                    nextBtn.style.display = "block";
                    shadow.style.display = "none";
                    document.querySelector(".g-sec").style.overflow = "auto";
                }
            }
        }
    }
});


