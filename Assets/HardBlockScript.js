#pragma strict

var hp :int = 2;

//得点用
var obj :GameObject;
var script :SceneScript;
 
obj = GameObject.Find("SceneObject");
script = obj.GetComponent(SceneScript);

 
function OnCollisionEnter() {
    hp--;
    if (hp == 0){
        Destroy(gameObject);

        //得点加算
	    script.score += 20;

	    //ブロック数：減算
	    script.blockCt--;
    }
}