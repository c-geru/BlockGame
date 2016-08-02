#pragma strict

import UnityEngine.SceneManagement;

//得点用
var obj :GameObject;
var script :SceneScript;
 
obj = GameObject.Find("SceneObject");
script = obj.GetComponent(SceneScript);
var ball :Transform;

function Start(){
	//ボールの残数チェック
	checkBallRemains();

//    if (script.life > 0){
//	    Instantiate(ball);
//
//	    script.life--;
//    } else if (script.life == 0){
//		//Unity5.3からは、SceneManager.LoadSceneを使用すること（冒頭のimport必須）
//    	SceneManager.LoadScene ("GameOver");
////        Application.LoadLevel("GameOver");
//    }
}

function OnCollisionEnter (collision : Collision) {
	//衝突した相手を消す（相手＞collision.gameObject,自分＞gameObject）
    Destroy(collision.gameObject);

	//ボールの残数チェック
	checkBallRemains();

//    if (script.life > 0){
//	    Instantiate(ball);
//
//	    script.life--;
//    } else if (script.life == 0){
//		//Unity5.3からは、SceneManager.LoadSceneを使用すること（冒頭のimport必須）
//    	SceneManager.LoadScene ("GameOver");
////        Application.LoadLevel("GameOver");
//    }
}


function checkBallRemains(){
    if (script.life > 0){
	    Instantiate(ball);

	    script.life--;
    } else if (script.life == 0){
		//Unity5.3からは、SceneManager.LoadSceneを使用すること（冒頭のimport必須）
    	SceneManager.LoadScene ("GameOver");
//        Application.LoadLevel("GameOver");
    }
}