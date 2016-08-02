#pragma strict

var style :GUIStyle;
var obj :GameObject;
var script :SceneScript;
 
function OnGUI() {
    obj = GameObject.Find("SceneObject");
    script = obj.GetComponent(SceneScript);
 
    GUI.Label(Rect(10, 10, 200, 40), "点数", style);
    GUI.Label(Rect(100, 10, 200, 40), "" + script.score, style);
    GUI.Label(Rect(10, 120, 200, 40), "残機数", style);
    GUI.Label(Rect(100, 120, 200, 40), "" + script.life, style);
}