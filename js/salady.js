$(function(){
    $('a').on("click",function(e){
        e.preventDefault();
    });
 });

 $('.gnb li').mouseenter(function(){  
    $(this).children('div').stop().slideDown("fast");   
});
$('.gnb li').mouseleave(function(){
    $(this).children('div:visible').stop().slideUp("fast");       
});


$('.tab_header h3').click(function(){
    // 각각의 탭 index값 리턴 메서드
    // 이벤트 탭을 클릭했을 때 index번호를 콘솔창에 출력
    const idx = $(this).index();
    console.log(idx);
    // 탭 영역에 각각 on클래그 적용
    if($(this).hasClass('on')){
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');

        $(this).css('color','#fc3');
        $(this).siblings().css('color','#000');

        $('.tab_text p').siblings().hide();
        $('.tab_text p').eq(idx).show();
        
        $('.tab_dot div').siblings().hide();
        $('.tab_dot div').eq(idx).show();

        $('.tab_img p').siblings().hide();
        $('.tab_img p').eq(idx).show();
        
    }
    // 해당탭 내용만 보이도록 코딩
    // $('.tab_contents .list').hide();
    // $('.tab_contents .list').eq(idx).stop().show();
});




$(function(){
$('.faq_people>.faq_people_l>dl>dd').hide();
$('.faq_people>.faq_people_l>dl>dt').on('click',function(){   
    $(this).css("color","green").hide();  
    $(this).stop().css("color","#17643f").show();  
    $(this).next().slideToggle(400);
});
});

$(function(){
    $('body').append("<div class='alert'></div>");
    $('a[href="#"]').click(function(){
        $('.alert').fadeIn()
        $('#curtain').fadeIn()
        setTimeout(function(){
            $('.alert').stop().fadeOut()
            $('#curtain').stop().fadeOut()
        },1000)
})});

