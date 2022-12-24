//	インスタンスの実体化
var params = new URLSearchParams(window.location.search);

//	パラメータ受け取り
window.onload = () => {
	if(params.has('q') == true) {
		if(params.get('q').includes('http:')) {
			document.getElementById('id_iframe').src = params.get("q");
		}
		else if(params.get('q').includes('https:')) {
			document.getElementById('id_iframe').src = params.get("q");
		}
		else {
			document.getElementById('id_iframe').src = 'https://www.bing.com/search?q='+params.get("q")+'&qs=n&form=QBRE&sp=-1&pq=lol&sc=15-3&sk=&cvid=B6B371A056024D66A922E814A990FE87&ghsh=0&ghacc=0&ghpl=';
		}
	}
}

document.getElementById('id_button').onclick = () => {

    let word = document.getElementById('id_text').value;
    
    let trimed_word = word.trim();
    
    document.getElementById('id_iframe').src = trimed_word;

}