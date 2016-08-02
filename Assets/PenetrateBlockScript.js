#pragma strict

GetComponent.<Collider>().isTrigger = true;

//得点用
var obj :GameObject;
var script :SceneScript;
 
obj = GameObject.Find("SceneObject");
script = obj.GetComponent(SceneScript);

function OnTriggerEnter() {
    Destroy(gameObject);

    //得点加算
    script.score += 5;

    //ブロック数：減算
    script.blockCt--;
}
