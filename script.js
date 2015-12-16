(function(){

function floorPaste(){
 	$( "<div class='windows clearfix'><div class='window'></div><div class='window'></div></div>" ).prependTo(".floor");
 	}
 floorPaste();
 function floorRemove(){
 	$(".windows").remove();
 }

 var slider = document.getElementById("slider");
 var floor_number = document.getElementById("floor_number");
 
 slider.addEventListener('mousemove', function(){
 	function setFloorNumber(val) { floor_number.value=val; }
 	setFloorNumber(this.value);
 });

 slider.addEventListener('change', function(){
 	floorRemove();
 	for(var i=0; i<this.value; i++){
 		floorPaste();
 	}
 });
 
})();