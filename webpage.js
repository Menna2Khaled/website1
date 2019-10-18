
var _div0 = document.createElement("div");
_div0.className = "head";

var _img = document.createElement("img");
_img.src =  "banner_bg.png";
_div0.appendChild(_img);
document.getElementById("container").appendChild(_div0);

var _glow0 = document.createElement("div");
_glow0.className = "glow0";
_div0.appendChild(_glow0);
document.getElementById("container").appendChild(_div0);

var _div1 = document.createElement("div");
_div1.className = "nav";
/*document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunctionForSticky);
  
    // Get the navbar
    var navbar = document.getElementById("nav");
  
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
  
    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position
  
    function myFunctionForSticky() {
      if (window.pageYOffset >= sticky) {
        console.log("window.pageYOffset >= sticky");
      } else {
        console.log("Not window.pageYOffset >= sticky");
      }
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  
    /*Toggle between adding and removing the "responsive" class to topnav
    when the user clicks on the icon*/
  
  /*  function myFunctionForResponsive() {
      navbar.classList.toggle('responsive');
    }*/
  

var logo = document.createElement("img");
logo.src = "logo.png";
_div1.appendChild(logo);
_div0.appendChild(_div1);
document.getElementById("container").appendChild(_div0);

var _ul0 = document.createElement("ul");
_ul0.id = "u_of";
var arr0 = ["HOME","ABOUT","BLOGS","PLACES","CONTACT"];
for(var i=0;i<5;i++){
    var _li0 = document.createElement("li");
    var _a0 = document.createElement("a");
    _a0.id = "a_of";
    _a0.href = "vue_webpage.html";
    _a0.innerText = arr0[i];
    _li0.appendChild(_a0);
    _ul0.appendChild(_li0);
    if(i == 2){
        var arr1 = ["Blog","Single blog"];
        var _ul1 = document.createElement("ul");
        for(var j=0;j<2;j++){
            var _li1 = document.createElement("li");
            var _a1 = document.createElement("a");
            _a1.href = "#";
            _a1.innerText = arr1[j];
             _li1.appendChild(_a1);
            _ul1.appendChild(_li1); 
        }  
        _li0.appendChild(_ul1); 
    }
    else if(i == 3){
        var arr2 = ["Gallery","Course Details","Course Schedule","Elements"];
        var _ul2 = document.createElement("ul");
        for(var z=0;z<4;z++){
           var _li2 = document.createElement("li");
            var _a2 = document.createElement("a");
            _a2.href = "#";
            _a2.innerText = arr2[z];
             _li2.appendChild(_a2);
             _ul2.appendChild(_li2); 
        }  
        _li0.appendChild(_ul2);
    }
    _ul0.appendChild(_li0);
}
_div1.appendChild(_ul0);
_div0.appendChild(_div1);
document.getElementById("container").appendChild(_div0);


var _but0 = document.createElement("button");
_but0.innerText = "+440 1234 654 953";
_div1.appendChild(_but0);
_div0.appendChild(_div1);
document.getElementById("container").appendChild(_div0);


//////////////////////////////////////////////////////////
var s = document.createElement("div");
s.className = "clear";
document.getElementById("container").appendChild(s);
/////////////////////////////////////////////////////////////////

var _div2 = document.createElement("div");
_div2.className ="title";
var _h4 = document.createElement("h4");
_h4.innerText = "Working Hard In Order To Get Perfect Shape.";
_div2.appendChild(_h4);
_div0.appendChild(_div2);
document.getElementById("container").appendChild(_div0);


var _p0 = document.createElement("p");
var _d0 = document.createTextNode("FITFLOSS FITNESS STUDIO");
 _p0.appendChild(_d0);
 _div2.appendChild(_p0);
 _div0.appendChild(_div2);
 document.getElementById("container").appendChild(_div0);

var _but1 = document.createElement("button");
_but1.innerText = "Browse Services";
_div2.appendChild(_but1);
_div0.appendChild(_div2);
document.getElementById("container").appendChild(_div0);
//////////////////////////////////////////////////////////
var s = document.createElement("div");
s.className = "clear";
document.getElementById("container").appendChild(s);
/////////////////////////////////////////////////////////
var _div3 = document.createElement("div");
_div3.className = "content";
var _h1 = document.createElement("h1");
_h1.innerText = "Our Popular Courses";
_div3.appendChild(_h1);
document.getElementById("container").appendChild(_div3);


var _p1 = document.createElement("p");
var _d1 = document.createTextNode("As You Pour The First Glass Of Your Favorite Chianti Or Chardonnay And Settle Into An Intimate Friday Evening.");
 _p1.appendChild(_d1);
 _div3.appendChild(_p1);
 document.getElementById("container").appendChild(_div3);
 
 var _div4 = document.createElement("div");
 _div4.className = "left";
 var _img0 = document.createElement("img");
 _img0.src = "single_cource_1.png";
 _div4.appendChild(_img0);
 _div3.appendChild(_div4);
 document.getElementById("container").appendChild(_div3);

var _h2_0 = document.createElement("h2");
_h2_0.innerText = "Basic Body Building";
_div4.appendChild(_h2_0);
_div3.appendChild(_div4);
document.getElementById("container").appendChild(_div3);

var _t0 = document.createElement("p");
_t0.id = "t0";
_t0.appendChild(document.createTextNode("$140.00"));
_div4.appendChild(_t0);
_div3.appendChild(_div4);
document.getElementById("container").appendChild(_div3);

var _para0 = document.createElement("p");
var _data0 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.");
_para0.appendChild(_data0);
_div4.appendChild(_para0);
_div3.appendChild(_div4);
document.getElementById("container").appendChild(_div3);

var _but_0 = document.createElement("button");
_but_0.innerText = "Apply Course";
_div4.appendChild(_but_0);
_div3.appendChild(_div4);
document.getElementById("container").appendChild(_div3);


var _div5 = document.createElement("div");
_div5.className = "center";
var _img1 = document.createElement("img");
_img1.src = "single_cource_2.png";
_div5.appendChild(_img1);
_div3.appendChild(_div5);
document.getElementById("container").appendChild(_div3);

var _h2_1 = document.createElement("h2");
_h2_1.innerText = "BIntermediate Body Building";
_div5.appendChild(_h2_1);
_div3.appendChild(_div5);
//document.getElementById("container").appendChild(_div3);

var _t1 = document.createElement("p");
_t1.id = "t1";
_t1.appendChild(document.createTextNode("$200.00"));
_div5.appendChild(_t1);
_div3.appendChild(_div5);
//document.getElementById("container").appendChild(_div3);

var _para1 = document.createElement("p");
var _data1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.");
_para1.appendChild(_data1);
_div5.appendChild(_para1);
_div3.appendChild(_div5);

var _but_1 = document.createElement("button");
_but_1.innerText = "Apply Course";
_div5.appendChild(_but_1);
_div3.appendChild(_div5);

var _div6 = document.createElement("div");
_div6.className = "right";
var _img2 = document.createElement("img");
_img2.src = "single_cource_3.png";
_div6.appendChild(_img2);
_div3.appendChild(_div6);
document.getElementById("container").appendChild(_div3);

var _h2_2 = document.createElement("h2");
_h2_2.innerText = "Advanced Body Building";
_div6.appendChild(_h2_2);
_div3.appendChild(_div6);
//document.getElementById("container").appendChild(_div3);

var _t2 = document.createElement("p");
_t2.id = "t2";
_t2.appendChild(document.createTextNode("$250.00"));
_div6.appendChild(_t2);
_div3.appendChild(_div6);
//document.getElementById("container").appendChild(_div3);

var _para2 = document.createElement("p");
var _data2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.");
_para2.appendChild(_data2);
_div6.appendChild(_para2);
_div3.appendChild(_div6);

var _but_2 = document.createElement("button");
_but_2.innerText = "Apply Course";
_div6.appendChild(_but_2);
_div3.appendChild(_div6);

var _div7 = document.createElement("div");
_div7.className = "con";
var _h5 = document.createElement("h1");
_h5.innerText = "We are Fitfloss. A Dedicated Fitness Center Since 2004";
_div7.appendChild(_h5);
document.getElementById("container").appendChild(_div7);

var _p2 = document.createElement("p");
var _d2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
_p2.appendChild(_d2);
_div7.appendChild(_p2);
document.getElementById("container").appendChild(_div7);

var _img3 = document.createElement("img");
_img3.src = "about_img.png";
_div7.appendChild(_img3);
document.getElementById("container").appendChild(_div7);

var _but2 = document.createElement("button");
_but2.innerText = "Browse Services";
_div7.appendChild(_but2);
document.getElementById("container").appendChild(_div7);

var _div8 = document.createElement("div");
_div8.className = "im";

var _img4 = document.createElement("img");
_img4.src = "become_member_bg.png";
_div8.appendChild(_img4);
document.getElementById("container").appendChild(_div8);

var _glow1 = document.createElement("div");
_glow1.className = "glow";
_div8.appendChild(_glow1);
document.getElementById("container").appendChild(_div8);

var _h6 = document.createElement("h1");
_h6.innerText = "Many more Features are Waiting!";
_div8.appendChild(_h6);
document.getElementById("container").appendChild(_div8);

var _p3 = document.createElement("p");
var _d3 = document.createTextNode("Thinking about overseas adventure travel? Have you put any thought into the best places to go when it comes to overseas adventure travel?");
_p3.appendChild(_d3);
_div8.appendChild(_p3);
document.getElementById("container").appendChild(_div8);

var _but3 = document.createElement("button");
_but3.innerText = "Become A Member";
_div8.appendChild(_but3);
document.getElementById("container").appendChild(_div8);
////////////////////////////////////////////////////////////////////////////////////
var _footer = document.createElement("div");
_footer.className = "footer";

var _left1 = document.createElement("div");
_left1.className = "left1";
var _h2_3 =  document.createElement("h2");
_h2_3.innerText = "About Us";
_left1.appendChild(_h2_3);
_footer.appendChild(_left1);
document.getElementById("container").appendChild(_footer);

var _p4 = document.createElement("p");
var _d4 = document.createTextNode("The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.");
_p4.appendChild(_d4);
_left1.appendChild(_p4);
_footer.appendChild(_left1);
//document.getElementById("container").appendChild(_footer);

var _center1 = document.createElement("div");
_center1.className = "center1";
var _h2_4 =  document.createElement("h2");
_h2_4.innerText = "Contact us";
_center1.appendChild(_h2_4);
_footer.appendChild(_center1);
document.getElementById("container").appendChild(_footer);

var _p5 = document.createElement("p");
_p5.id = "p5";
var _d5 = document.createTextNode("56/8, rockybeach road, santa monica, Los angeles, California - 59620");
_p5.appendChild(_d5);
_center1.appendChild(_p5);
_footer.appendChild(_center1);
//document.getElementById("container").appendChild(_footer);

var _p6 = document.createElement("p");
_p6.id = "p6";
var _d6 = document.createTextNode("012-6532-568-9746 012-6532-569-9748");
_p6.appendChild(_d6);
_center1.appendChild(_p6);
_footer.appendChild(_center1);
//document.getElementById("container").appendChild(_footer);

var _right1 = document.createElement("div");
_right1.className = "right1";
var _h2_5 =  document.createElement("h2");
_h2_5.innerText = "Newsletter";
_right1.appendChild(_h2_5);
_footer.appendChild(_right1);
document.getElementById("container").appendChild(_footer);

var _p7 = document.createElement("p");
var _d7 = document.createTextNode("Stay updated with our latest trends Seed heaven so said place winged over given forth fruit.");
_p7.appendChild(_d7);
_right1.appendChild(_p7);
_footer.appendChild(_right1);
//document.getElementById("container").appendChild(_footer);

var _txt = document.createElement("input");
_txt.value = "";
_txt.id ="txt";
_right1.appendChild(_txt);
_footer.appendChild(_right1);

/*var _txt_in = document.createElement("p");
_txt_in.id = "txt_in";
var _txt_in_d = document.createTextNode("Email Address");
_txt_in.appendChild(_txt_in_d);
_right1.appendChild(_txt_in);
_footer.appendChild(_right1);*/

var _but4 = document.createElement("button");
_but4.innerText = "Subscribe -->";
_right1.appendChild(_but4);
_footer.appendChild(_right1);

var _bett = document.createElement("div");
_bett.className = "bett";
var _p8 = document.createElement("p");
var _d8 = document.createTextNode("Copyright ©2019 All rights reserved | This template is made with.");
_p8.appendChild(_d8);
_bett.appendChild(_p8);
_footer.appendChild(_bett);
document.getElementById("container").appendChild(_footer);

var _a3 = document.createElement("a");
_a3.href = "#";
_a3.innerText = "by Menna";
_bett.appendChild(_a3);
_footer.appendChild(_bett);


var _img5 = document.createElement("img");
_img5.id ="img1";
_img5.src = "facebook.png";
_bett.appendChild(_img5);
_footer.appendChild(_bett);

var _img6 = document.createElement("img");
_img6.id ="img2";
_img6.src = "twitter.png";
_bett.appendChild(_img6);
_footer.appendChild(_bett);

var _img7 = document.createElement("img");
_img7.id ="img3";
_img7.src = "insta.jpg";
_bett.appendChild(_img7);
_footer.appendChild(_bett);
document.getElementById("container").appendChild(_footer);
