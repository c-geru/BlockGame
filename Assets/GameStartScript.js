#pragma strict

import UnityEngine.SceneManagement;

var styleStart :GUIStyle;

function Start () {

}

function Update () {
    if (Input.GetButtonUp("Jump")) {
		//Unity5.3からは、SceneManager.LoadSceneを使用すること（冒頭のimport必須）
		SceneManager.LoadScene ("Main");
//        Application.LoadLevel("Main");
    }
}

//function OnGUI () {
//    GUI.Label(Rect(80, 10, 300, 80), "Block Game", styleStart);
//    GUI.Label(Rect(120, 240, 300, 100), "on Press 'space' to start!!", styleStart);
//}