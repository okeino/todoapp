// check off specific todos by clicking
$("ul").on("click","li",function(){  
    
    
    $(this).toggleClass("completed");  
        
    
});



// click on x
$("ul").on("click","span",function(e){
    
    $(this).parent().fadeOut(500, function(){
        
        $(this).remove();
    });
    
    
    e.stopPropagation();
    
});

$("input[type='text']").keypress(function(e){
    
    
    
    if(e.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //creat a new li and add to ul
        if(todoText !== ""){
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
        }
    }
    
});

$(".fa-plus").click(function(){
    
    $("input[type='text']").fadeToggle();
});