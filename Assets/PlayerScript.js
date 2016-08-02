#pragma strict

var Accel :float = 100.0;

var obj :GameObject;
var script :SceneScript;

obj = GameObject.Find("SceneObject");
script = obj.GetComponent(SceneScript);

function Update () {
    GetComponent.<Rigidbody>().AddForce(transform.right * Input.GetAxisRaw("Horizontal") * Accel, ForceMode.Impulse);

    //残りブロック数でパドルのサイズを変更する
    if (script.blockCt < 5){
        transform.localScale.x = 1.5*script.blockCt;
    }
    else if(script.blockCt < 15){
        transform.localScale.x = 7.5;
    }
    if(transform.localScale.x < 1.0) transform.localScale.x = 1.0;
}