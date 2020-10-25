

var x = window.matchMedia("(min-width: 940px)")
myFunction(x)
x.addListener(myFunction)


function myFunction(x) {
	console.log(x)
	hide= document.querySelector('#menu .hide')
	tour= document.querySelector('#menu-tourguide')
	labeltour= document.querySelector('#menu-label-tourguide')
	menu= document.querySelector('#menu')




	if (x.matches) {
	   hide.style.display = 'none'
	   tour.addEventListener('mouseover', block);
	   hide.addEventListener('mouseover', block);
	   hide.addEventListener('mouseout', none);
	   tour.addEventListener('mouseout', none);

    } else {
  		tour.removeEventListener('mouseover', block);
  		hide.removeEventListener('mouseover', block);
  		hide.removeEventListener('mouseout', none);
  		tour.removeEventListener('mouseout', none);
  		if(window.location.href.indexOf("tourguides") > -1){

			hide.style.display = 'block'
  		}
  		else
  			hide.style.display = 'none'

	 	labeltour.addEventListener('click', function(ect){



	 		if(hide.style.display === 'none'){
	 			console.log('1')
	 			block()
	 		}
	 		else
	 			none()

	 	})
	 	hide.addEventListener('click', function(evt){
	 		console.log('2333333333333')
	 		document.querySelector('#label-exit').click();
	 	})








	}

}

function block(){
	document.querySelector('.hide').style.display = 'block'
	console.log('333')
}
function none(){
	document.querySelector('.hide').style.display = 'none'
}





