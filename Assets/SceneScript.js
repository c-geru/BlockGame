#pragma strict

import UnityEngine.SceneManagement;

//残存玉数、スコア、ブロック総数
var life :int = 3;
var score :int = 0;
var blockCt :int = 35;


//シーン移動時にこのスクリプトを削除しないようにする
function Start () {
    DontDestroyOnLoad(this);
}

function Update () {
	//ゲームクリア監視
    if (blockCt == 0){
		//Unity5.3からは、SceneManager.LoadSceneを使用すること（冒頭のimport必須）
        SceneManager.LoadScene ("GameClear");
//        Application.LoadLevel("GameClear");
    }
}