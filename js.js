'use strict';

{

    //Intersection Obsever API

    //監視したい要素の取得
    const target = document.querySelector('img');

    //callbackが呼び出されたという関数
    //デフォルトの場合、targetがrootに0％交差した時に実行される。
    function callback(entries) {//callbackの引数で受け取ることができる。
        console.log(entries[0]);

        //交差が終わったらアニメーションをしない書き方
        if (!entries[0].isIntersecting) {//entries[0]が交差していなかったら処理しない
            return;
        }
        //交差してたらappearクラスを付ける処理をする
        entries[0].target.classList.add('appear');

        //交差が始まった時appearクラスを付ける。isIntersectingを調べてtrueだったらクラスをつける
        // if (entries[0].isIntersecting) {//isIntarsectingは交差しているかどうかのブール値
        //     entries[0].target.classList.add('appear');
        // } else {
        //     entries[0].target.classList.remove('appear');
        // }


    }

    //第二引数をオブジェクト形式にして指定する
    const options = {
        rootMargin: '0px 0px -100px',
        threshold: 0.2, // 20%交差指定で表示する。
        //root: null,  root領域の指定ができるオプション
        //rootMargin: '0px',　root領域の大きさの調整できるオプション
    };

    //Intersection Observerのインスタンスを作る。第二引数で任意の交差する値が指定できる。
    const observer = new IntersectionObserver(callback, options);

    //targetの監視の開始。observe()メソッドはDOMへの変更の通知の受診を開始する。
    observer.observe(target);
}