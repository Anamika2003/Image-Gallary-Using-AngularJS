function borderImage(x) {
    x.style.border = "2px solid red";
} 

angular
.module('photoGalleryModule', [])
.controller('photoGalleryCtrl', function ($scope) {

var photoSource = [
                    ["https://i.ibb.co/vLWSmhx/flower.jpg","https://i.ibb.co/xfsQGxh/download-2.jpg","https://i.ibb.co/rvy7hHS/lily.jpg","https://i.ibb.co/xfsQGxh/download-2.jpg"],
                    [ "https://i.ibb.co/LSDmSmg/rose.jpg","https://i.ibb.co/KwpN9FT/sunflower.jpg","https://i.ibb.co/2FCcXvv/champa.jpg","https://i.ibb.co/YdrzPgs/daisy.jpg"],
                    [ "https://i.ibb.co/3TWzN9F/chrysanthemum.webp","https://i.ibb.co/NK0jW78/hibiscus.jpg","https://i.ibb.co/spYTfbT/narc202.jpg","https://i.ibb.co/MBVDMXR/tulip.jpg"],
                    [ "https://i.ibb.co/3SRt3RN/flower-color.jpg","https://i.ibb.co/R9nDHD0/Getty-Images.jpg","https://i.ibb.co/89PnzJb/Stevens.jpg","https://i.ibb.co/qr375m1/123.jpg"]                    
               ]; 

 var body = "<table width='100%' height='575'>";

    var row=4;
    var col=4;     
    
     for(var i=0;i<row;i++){

         body += "<tr>";  

        for(var j=0;j<col;j++)
        {
        	
            body +="<td> <img width='100%' height='100px' id='"+i+j+"' src='" + photoSource[i][j] + "'onmouseover=borderImage(this);></td>";
        }
        body += "</tr>";
     }

     body += "</table>";

     console.log(body);

     $("#divPhoto").html(body);

      
    
});

