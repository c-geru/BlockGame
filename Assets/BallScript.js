#pragma strict

var Speed : float = 15.0;

var obj :GameObject;
var script :SceneScript;

obj = GameObject.Find("SceneObject");
script = obj.GetComponent(SceneScript);

function Update () 
{
    if (Input.GetButtonUp("Jump") && GetComponent.<Rigidbody>().velocity == Vector3(0, 0, 0)){
        GetComponent.<Rigidbody>().AddForce((transform.forward + transform.right) * Speed, ForceMode.VelocityChange);
    }
}

function OnCollisionEnter () {
    GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity.normalized * 15;

    //残りブロック数でスピードを変える
    if (script.blockCt < 5){
        GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity.normalized * 30;
    }
    else if (script.blockCt < 15){
        GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity.normalized * 25;
    }
    else if (script.blockCt < 25){
        GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity.normalized * 20;
    }

    //垂直、水平にならないように補正
    if (Mathf.Abs(GetComponent.<Rigidbody>().velocity.y) < 5) {
        GetComponent.<Rigidbody>().velocity.y *= 5;
    }
    if (Mathf.Abs(GetComponent.<Rigidbody>().velocity.x) < 5) {
        GetComponent.<Rigidbody>().velocity.x *= 5;
    }
 
}