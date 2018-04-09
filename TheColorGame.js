var num=document.querySelector("#Difficulty");
var num1=6;
num.addEventListener("click",function()
{
	if(num.textContent==="Easy")
	{
		num1=3;
		change();
		num.textContent="Hard";
		if(num1===3)
		{
			for(var j=3;j<6;j++)
			{
				colbox[j].classList.remove("colbox");
			}
		}
	}
	else{change();
		num1=6;
		num.textContent="Easy";
		if(num1===6)
		{
			for(var k=3;k<6;k++)
			{
				colbox[k].classList.add("colbox");
			}
		}
		}
});
var gamechange=document.querySelector(".container");
var colors=generateRandomColor(num1);
var colbox= document.querySelectorAll(".colbox");
var h1= document.querySelector("h1");
var goalcolor=randcol();
var colordisplay=document.getElementById("goalcolor");
colordisplay.textContent=goalcolor;
var msg= document.querySelector("#message");
var reset=document.querySelector("#reset");
reset.addEventListener("click",function()
{
	if(reset.textContent==="play again?")
	{reset.textContent="New colors";
	 h1.style.backgroundColor="rgb(77, 135, 193)";
	 msg.textContent=" ";}
	colors=generateRandomColor(num1);
	goalcolor=randcol();
	colordisplay.textContent=goalcolor;
	for(var i=0;i<num1;i++)
		colbox[i].style.backgroundColor=colors[i];
});

for(var i=0;i<num1;i++)
{	colbox[i].style.backgroundColor=colors[i];
	colbox[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===goalcolor)
			{allcolor(clickedcolor);
			 msg.textContent="correct!";
			 reset.textContent="play again?";
			 h1.style.backgroundColor=goalcolor;
			}
		else
			{this.style.backgroundColor="#232323";
			 msg.textContent="Try again!!";
			}
	});
}
function change()
	{
		if(reset.textContent==="play again?")
		{	reset.textContent="New colors";
			 h1.style.backgroundColor="rgb(77, 135, 193)";}
		colors=generateRandomColor(num1);
		goalcolor=randcol();
		colordisplay.textContent=goalcolor;
		for(var i=0;i<num1;i++)
			colbox[i].style.backgroundColor=colors[i];
	}
function allcolor(color){
	for(var i=0;i<num1;i++)
	{
		colbox[i].style.backgroundColor=goalcolor;
	}

}
function randcol()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num3)
{
	var a=[];
	for(var i=0;i<num3;i++){
		a.push(randomcol());

	}

	return a;
}
function randomcol()
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return "rgb("+ r +", "+ g +", "+ b+")";
	}	
