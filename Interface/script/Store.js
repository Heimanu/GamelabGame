﻿#pragma strict


var customGuiStyle = new GUIStyle();
var scrollPosition : Vector2 = Vector2.zero;

var x = (Screen.width / 2) - (180 / 2);
var h = Screen.height;

// variable use by the store
var atomeArray = ['carbone', 'hydrogene', 'methane', 'methyl'];
var prixAtome = ['$50000', '$10000', '$500', '$25000'];


function Start () {
	customGuiStyle.fontSize = 18;
	customGuiStyle.normal.textColor = Color.white;
	customGuiStyle.font = Resources.Load("small_font");
	customGuiStyle.wordWrap = true;
}

function OnGUI(){
	
	// Interface de base
	var ButtonExit : Texture = Resources.Load("exit");
	var vBar : Texture = Resources.Load("Vbar");
	var hBar : Texture = Resources.Load("hBar");
	
	//texture pour le dimensionnement
	var testTexture : Texture = Resources.Load("testTexture");
	var childrentestTexture : Texture = Resources.Load("testTexture2");
	
	if(GUI.Button(Rect(x,0,100,100), ButtonExit, customGuiStyle)){
		Application.LoadLevel("Interface");
	}
	
	GUI.DrawTexture(Rect(x + 50,70,1,h), vBar);
	GUI.Label(Rect(x - 225, 100, 250,100), "Atomes", customGuiStyle);
	GUI.Label(Rect(x + 225, 100, 250,100), "Fioles", customGuiStyle);
	// Wraper boutiquue

	/* disposition possible 
	
		--> 1: ajout d'u scroll CONTAINER
		--> 2 : Utiliser GUI.BeginGroup(Rect(x,y,width,height))
			--> placer tous les elements d'un produit de la boutique dedans, image, prix, HumanDescription
		--> 3 : fermer le groupe 
		--> 4 : reproduire
	
	*/

	scrollPosition = GUI.BeginScrollView (Rect (55,155,500,390),scrollPosition, Rect (0, 0, 0, 600));
			
		GUI.BeginGroup(Rect(15,0,470,150));
			// image de la molécule
			if(GUI.Button(Rect(0,35,65,65),Resources.Load(atomeArray[0]), customGuiStyle)){
			}
			// texte de la molécule
			GUI.Label(Rect(75,25, 300, 500 ),"Hi there we're gamelab our member are maxime, alexis, marc, thibault, and eric ! and we make super fucking amazing cool game, check it out !", customGuiStyle);
			GUI.DrawTexture(Rect(75,130,200,1), hBar);
			GUI.Label(Rect(280,125,200,50), "$500.000", customGuiStyle);
		GUI.EndGroup();
			
		
		GUI.BeginGroup(Rect(15,145,470,150));
			// image de la molécule
			if(GUI.Button(Rect(0,35,65,65),Resources.Load(atomeArray[0]), customGuiStyle)){
			}
			// texte de la molécule
			GUI.Label(Rect(75,25, 300, 500 ),"Hi there we're gamelab our member are maxime, alexis, marc, thibault, and eric  ! and we make super fucking amazing cool game, check it out !", customGuiStyle);
			GUI.DrawTexture(Rect(75,130,200,1), hBar);
			GUI.Label(Rect(280,125,200,50), "$250.000", customGuiStyle);
		GUI.EndGroup();
		
		GUI.BeginGroup(Rect(15,290,470,150));
			// image de la molécule
			if(GUI.Button(Rect(0,35,65,65),Resources.Load(atomeArray[0]), customGuiStyle)){
			}
			// texte de la molécule
			GUI.Label(Rect(75,25, 300, 500 ),"Hi there we're gamelab our member are maxime, alexis, marc, thibault, and eric ! and we make super fucking amazing cool game, check it out !", customGuiStyle);
			GUI.DrawTexture(Rect(75,130,200,1), hBar);
			GUI.Label(Rect(280,125,200,50), "$250.000", customGuiStyle);
		GUI.EndGroup();
		
		GUI.BeginGroup(Rect(15,435,470,150));
			// image de la molécule
			if(GUI.Button(Rect(0,35,65,65),Resources.Load(atomeArray[0]), customGuiStyle)){
			}
			// texte de la molécule
			GUI.Label(Rect(75,25, 300, 500 ),"Hi there we're gamelab our member are maxime, alexis, marc, thibault, and eric ! and we make super fucking amazing cool game, check it out !", customGuiStyle);
			GUI.DrawTexture(Rect(75,130,200,1), hBar);
			GUI.Label(Rect(280,125,200,50), "$250.000", customGuiStyle);
		GUI.EndGroup();	
		GUI.EndScrollView ();		
}

function Update () {

}