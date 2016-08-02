#pragma strict

//得点用
var obj :GameObject;
var script :SceneScript;
 
obj = GameObject.Find("SceneObject");
script = obj.GetComponent(SceneScript);

function OnCollisionEnter () {
	//ブロック消去
    Destroy(gameObject);

    //得点加算
    script.score += 10;

    //ブロック数：減算
    script.blockCt--;
}